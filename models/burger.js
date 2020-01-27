// Import the ORM to create functions that will interact with the database

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, devoured, cb) {
        orm.insertOne("burgers", burger_name, devoured, function(res){
            cb(res);
        });
    },
    updateOne: function(burger_name, devoured, cb) {
        orm.updateOne("burgers", burger_name, devoured, function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;