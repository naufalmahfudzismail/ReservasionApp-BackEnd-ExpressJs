var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var input = req.body;

    var today = new Date();

    var appData = {
        "error": 1,
        "data": ""
    };

    var data = {

        username: input.username,
        password: input.password,
        role: input.role,
        kd_role: input.kd_role

    };

    var code = res.statusCode;

    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query("INSERT INTO akun SET ?", data, function (error, results, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "User registered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = "Error Occured!";
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

module.exports = router;