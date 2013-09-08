import db

class Analytics(object):
    def __init__(self):
        pass

    def run(self, user_id):
        user = db.User.get(db.User.id == user_id)
        return 'I got %s' % user.phone