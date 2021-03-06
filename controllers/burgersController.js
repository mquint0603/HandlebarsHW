var express = require("express")

var burger = require("../models/burgerModel.js")

// console.log(burger)

var router = express.Router()

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
        // res.json(hbsObject)
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.name, function(result){
        res.json({id: result.insertId})
    });
});


router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = "+ req.params.id;
    console.log(condition);

    burger.update(req.body.devoured, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// update: function(value, condition, cb) {
//     orm.updateOne("burgers", "devoured", value, condition, function(res) {
//       cb(res);
//     });
//   }

module.exports = router;