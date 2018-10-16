var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    var input = req.body;

    var data = {

        username: input.username,
        password: input.password,
        role: input.role,
        kd_role: input.kd_role

    };
    
    connection.query("INSERT INTO akun SET ?", data, function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({
                "status": 500,
                "error": error,
                "response": null
            }));
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({
                "status": res.statusCode,
                "error": null,
                "response": results
            }));
            //If there is no error, all is good and response is 200OK.
        }
    });
});

module.exports = router;