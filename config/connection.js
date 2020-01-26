var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burger_db',
});

db.connect(function(err) {
    if(err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log("Connected as id " + db.threadId);
});

module.exports = db;

