import db
from sms import SMS

class Analytics(object):
    def __init__(self):
        pass

    def run(self, user_id):
        user = db.User.get(db.User.id == user_id)
        sms = SMS()
        sms.send(user.phone, 'Did you get this, Kevin?')
        return 'I got %s' % user.phone