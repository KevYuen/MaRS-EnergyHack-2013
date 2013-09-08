import time
from datetime import datetime, timedelta
import db
from sms import SMS
from greenbutton import GreenButton
from bs4 import BeautifulSoup


class Analytics(object):
    def __init__(self):
        self.sms = SMS()
        self.greenbutton = GreenButton()
        self.duration = 60 * 24 * 3600
        self.start = int(time.time()) - 24 * 3600 - self.duration

    def run(self, user_id):
        user = db.User.get(db.User.id == user_id)
        xml = self.greenbutton.getUsagePointData(user.token, self.start, self.duration)

        soup = BeautifulSoup(xml)

        # Locate the data we care about
        blocks = []
        for entry in soup.find_all('entry'):
            if entry.content and entry.content.find('ns2:intervalblock'):
                blocks = entry.content.find_all('ns2:intervalblock')

        # Group the data by weekday and by hour
        raw = {}
        for block in blocks:
            readings = block.find_all('ns2:intervalreading')
            for reading in readings:
                dt = datetime.fromtimestamp(int(reading.find('ns2:timeperiod').find('ns2:start').get_text()))
                weekday = dt.weekday()
                if weekday not in raw:
                    raw[weekday] = {}
                if dt.hour not in raw[weekday]:
                    raw[weekday][dt.hour] = []
                raw[weekday][dt.hour].append(int(reading.find('ns2:cost').get_text()))

        # Determine the average for each hour on each weekday
        averages = {}
        for weekday in raw.keys():
            averages[weekday] = {}
            for hour in raw[weekday].keys():
                averages[weekday][hour] = sum(raw[weekday][hour]) / len(raw[weekday][hour])

        # Find the peak for whichever weekday tomorrow is
        tomorrow = datetime.today() + timedelta(days=1)
        weekday = (tomorrow.weekday() + 1) % 7
        today_averages = averages[weekday]
        peak_cost = 0
        peak_hour = 0
        for hour in today_averages.keys():
            if today_averages[hour] > peak_cost:
                peak_cost = today_averages[hour]
                peak_hour = hour

        # Send that peak to the user's phone
        message = 'Welcome to Spring Gauge! Your peak usage on %ss is at %s%s. Try turning off some lights at that time.'
        peak = datetime(tomorrow.year, tomorrow.month, tomorrow.day, peak_hour)
        self.sms.send(user.phone, message % (tomorrow.strftime('%A'), int(peak.strftime('%I')), peak.strftime('%p')))

        return {'status': 'success'}


