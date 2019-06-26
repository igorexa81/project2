var orm = require("../config/orm.js");

var product = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.insertOne("product", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.updateOne("product", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = product;