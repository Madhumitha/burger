// Import the ORM to create functions that will interact with the database

var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    insert: function(burger_name, devoured, cb) {
        orm.insert("burgers", burger_name, devoured, function(res){
            cb(res);
        });
    },
    update: function(burger_name, devoured, cb) {
        orm.update("burgers", burger_name, devoured, function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;