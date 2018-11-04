var express = require('express');
var router = express.Router();
var cors = require("cors")
var jwt = require("jsonwebtoken");

router.use(cors());
process.env.SECRET_KEY = "tekomtek123";

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var kode = req.body.kode;
    var password = req.body.password;

    connection.query("SELECT * FROM Akun WHERE level = 'Dosen' AND kd_role=?",
        [kode],
        function (error, result, fields) {
            if (error) {
                // console.log("error ocurred",error);
                res.send(JSON.stringify({
                    "status": 500,
				    "error": error,
				    "response": null
                }))
            } else {
                // console.log('The solution is: ', results);
                if (result.length > 0) {
                    if (result[0].password == password) {
                        let token = jwt.sign(JSON.parse(JSON.stringify(result[0])), process.env.SECRET_KEY, {
                            expiresIn: 5000
                        });
                        res.send(JSON.stringify({
                            "code": 200,
                            "success": "login berhasil",
                            "token ": token
                        }));
                    } else {
                        res.send(JSON.stringify({
                            "code": 204,
                            "success": "kode atau password salah"
                        }));
                    }
                } else {
                    res.send(JSON.stringify({
                        "code": 204,
                        "success": "Dosen tidak terdaftar"
                    }));
                }
            }
        }
    )

});

module.exports = router