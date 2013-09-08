from flask import Flask
from flask import request
from analytics import Analytics

app = Flask(__name__)

@app.route('/analytics', methods=['POST'])
def analytics():
    user_id = int(request.form['id'])
    analytics = Analytics()
    return analytics.run(user_id)

if __name__ == '__main__':
    app.debug = True
    app.run()