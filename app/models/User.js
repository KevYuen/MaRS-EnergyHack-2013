var Sequelize = require('sequelize'),
    config = require('./config.js'),
    db = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        dialect: 'mysql'
    });

var User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    phone: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    paranoid: true,
    freezeTableName: true
});

module.exports = User;