var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jimmy010617!',
    database: 'bbs'
});
db.connect();

module.exports = db;