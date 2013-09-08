import peewee as pw
import config

mysql = pw.MySQLDatabase(config.DB_DATABASE, host=config.DB_HOST, port=config.DB_PORT, user=config.DB_USERNAME,
                         passwd=config.DB_PASSWORD)

class User(pw.Model):
    phone = pw.CharField()
    token = pw.CharField()
    createdAt = pw.DateTimeField()
    updatedAt = pw.DateTimeField()
    deletedAt = pw.DateTimeField()

    class Meta:
        database = mysql
        db_table = 'User'