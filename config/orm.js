var connection = require("./connection.js");

// Object for all our SQL statement functions

var orm = {
    selectAll: function(burger_db, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, burger_db, function(err, res){
            if(err) throw err;
            cb(res);
        })
    },
    insertOne: function(burger_db, burger_name, devoured,cb) {
        var queryString = "INSERT INTO ?? (??, ??)";
        connection.query(queryString, [burger_db, burger_name, devoured], function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        })
    },
    updateOne: function(burger_db, burger_name, devoured, cb) {
        var queryString = "UPDATE ?? SET ?? = ??";
        connection.query(queryString, [burger_db, burger_name, devoured], function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        })
    }
}

module.exports = orm;


