var connection = require("./connection.js")

var orm = {

    selectAll: function(table, cb){
        var queryString = "SELECT * FROM" + " " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw (err);
            cb(result)
        })
    },

    insertOne: function(table, columnName, values, cb){
        var queryString = `INSERT INTO ${table} (${columnName}) VALUES ("${values}")`;
        connection.query(queryString, function(err, result) {
            if (err) throw (err)
            cb(result)
        })
    },

    updateOne: function(table, columnName, value, condition, cb){
        var queryString = `UPDATE ${table} SET ${columnName}=${value} WHERE ${condition}`;
        connection.query(queryString, function(err, result) {
            if (err) throw (err)
            cb(result)
        })
    }

}

module.exports = orm;