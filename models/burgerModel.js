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

    update: function(colName, condition, cb) {
      orm.updateOne("burgers", colName, condition, function(res) {
        cb(res);
      });
    }


  };

//   burger.all(function(res){
//       console.log(res)
//   })

module.exports = burger;