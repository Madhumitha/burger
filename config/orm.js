var connection = require("./connection.js");

var orm = {
    selectAll: function(burger_db) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, burger_db, function(err, res){
            if(err) throw err;
            console.log(res);
        })
    },
    insertOne: function(burger_db, burger_name, devoured) {
        var queryString = "INSERT INTO ?? (??, ??)";
        connection.query(queryString, [burger_db, burger_name, devoured], function(err, res){
            if(err) throw err;
            console.log(res);
        })
    },
    updateOne: function(burger_db, burger_name, devoured) {
        var queryString = "UPDATE ?? SET ?? = ??";
        connection.query(queryString, [burger_db, burger_name, devoured], function(err, res){
            if(err) throw err;
            console.log(res);
        })
    }
}

module.exports = orm;


