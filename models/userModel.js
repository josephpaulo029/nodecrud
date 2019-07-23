var db = require('../dbcon'); //reference of dbconnection.js


var users_tbl = {
    getaccountInfo: callback => {
        return db.query("select * from users", callback);
    },

    addUser: function (info, callback) {
        db.query("insert into users values(?,?,?,?,?)", [0, info.name, info.age, info.gender, info.city], callback);
        return console.log("Account Added");
    },

    updateUser: function (info, callback) {
        db.query("update users set name=?, age=?, gender=?, city=? where id=?", [info.name, info.age, info.gender, info.city, info.id], callback)
        return console.log("Account Updated");
    },

    deleteUser: function (info, callback) {
        db.query("delete from users where id=?", [info.id], callback)
        return console.log("Account Deleted");
    },
}

module.exports = users_tbl; ``
