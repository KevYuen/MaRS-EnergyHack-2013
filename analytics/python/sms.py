from twilio.rest import TwilioRestClient
import config

class SMS(object):
    def __init__(self):
        self.client = TwilioRestClient(config.SMS_ACCOUNT_SID, config.SMS_AUTH_TOKEN)

    def send(self, phone, message):
        message = self.client.sms.messages.create(to='+1%s' % phone, from_=config.SMS_FROM_NUMBER, body=message)