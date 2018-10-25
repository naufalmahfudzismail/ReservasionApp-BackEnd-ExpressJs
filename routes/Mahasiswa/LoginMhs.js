var express = require('express');
var router = express.Router();

router.get('/:nim/:password', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var user = req.params.nim;
    var pass = req.params.password;

    connection.query("SELECT * FROM Akun WHERE level = 'Mahasiswa' AND kd_role=? AND password =?",
        [user, pass],
        function (error, result, fields) {
            if (error) {
                res.send(JSON.stringify({
                    "status": 500,
                    "error": error,
                    "response": null
                }));
            } else {
                res.send(JSON.stringify({
                    "status": res.statusCode,
                    "error": null,
                    "response": result
                }));
            }
        }
    );
})


module.exports = router