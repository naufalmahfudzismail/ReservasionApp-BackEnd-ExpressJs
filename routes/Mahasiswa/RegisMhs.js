var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var input = req.body;

    var data = {

        username: input.username,
        password: input.password,
        role: input.role,
        kd_role: input.kd_role

    };

    var code = res.statusCode;

    database.connection.getConnection(function (err, connection) {
        if (err) {
            res.send(JSON.stringify({
				"status": 500,
				"error":  "Internal Server Error",
				"response": null
			}));
        } else {
            connection.query("INSERT INTO akun SET ?", data, function (error, results, fields) {
                if (!error) {
                    res.send(JSON.stringify({
                        "code": 201,
                        "success" : "Akun berhasil"
                    }))
                } else {
                    res.send(JSON.stringify({
                        "code": 400,
                        "failed": "error ocurred"
                    }))
                }
            });
            connection.release();
        }
    });
});

module.exports = router;