var orm = require("../config/orm.js")

// console.log(orm)

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    create: function(vals, cb) {
      orm.insertOne("burgers", "burger_name", vals, function(res) {
        cb(res);
      });
    },

    update: function(value, condition, cb) {
      orm.updateOne("burgers", "devoured", value, condition, function(res) {
        cb(res);
      });
    }
    // var queryString = `UPDATE ${table} SET ${columnName}=${value} WHERE ${condition}`;
    // connection.query(queryString, function(err, result) {
    //     if (err) throw (err)
    //     cb(result)
    // })

  };

//   burger.all(function(res){
//       console.log(res)
//   })

module.exports = burger;