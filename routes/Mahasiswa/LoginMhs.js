var express = require('express');
var router = express.Router();

router.get('/:username/:password', function (req, res, next) {

    var user = req.params.username;
    var pass = req.params.password;

    connection.query("SELECT * FROM Akun WHERE username = ? ",
        [user],
        function (error, result, fields) {
            if (error) {
                res.send(JSON.stringify({
                    "status": 500,
                    "error": error,
                    "response": null
                }));
            } else {

                if (result.lenght > 0) {
                    if (result[0].password == pass) {
                        res.send(JSON.stringify({
                            "status": res.statusCode,
                            "error": null,
                            "response": result
                        }));
                    } else {
                        res.send(JSON.stringify({
                            "status": res.statusCode,
                            "error": null,
                            "response": null
                        }));
                    }
                }

            }
        });
})


module.exports = router