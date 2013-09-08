from flask import Flask, request, jsonify
from analytics import Analytics

app = Flask(__name__)

@app.route('/analytics', methods=['POST'])
def analytics():
    user_id = int(request.form['id'])
    analytics = Analytics()
    result = analytics.run(user_id)
    return jsonify(**result)

if __name__ == '__main__':
    app.debug = True
    app.run()