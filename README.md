MaRS-EnergyHack-2013
====================

Add a `config.js` file to `app/models`:
```javascript
module.exports = {
    host: 'db.example.com',
    port: 3306,
    database: 'dbname',
    username: 'dbuser',
    password: 'dbpassword'
};
```

Add a `configy.py` file to `analytics/python`:
```python
DB_HOST = 'db.example.com'
DB_PORT = 3306
DB_DATABASE = 'dbname'
DB_USERNAME = 'dbuser'
DB_PASSWORD = 'dbpassword'

SMS_ACCOUNT_SID = 'twilio-account-sid'
SMS_AUTH_TOKEN = 'twilio-auth-token'
SMS_FROM_NUMBER = '+1234567890'
```