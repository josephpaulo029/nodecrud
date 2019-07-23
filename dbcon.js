var mysql = require('mysql');
var connection = mysql.createPool({
    port: 3306,
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'test'

});
module.exports = connection;