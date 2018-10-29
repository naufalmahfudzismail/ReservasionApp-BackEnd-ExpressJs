var express = require('express');
var router = express.Router();
var cors = require("cors")
var jwt = require("jsonwebtoken");

router.use(cors());
process.env.SECRET_KEY = "tekomtek123";

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var appData = {};
    var kode = req.body.nim;
    var password = req.body.password;

    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {

            connection.query("SELECT * FROM Akun WHERE level = 'Mahasiswa' AND kd_role=?",
                [kode],
                function (error, result, fields) {
                    if (error) {
                        // console.log("error ocurred",error);
                        res.send({
                            "code": 400,
                            "failed": "error ocurred"
                        })
                    } else {
                        // console.log('The solution is: ', results);
                        if (results.length > 0) {
                            if (results[0].password == password) {
                                let token = jwt.sign(rows[0], process.env.SECRET_KEY, {
                                    expiresIn: 1440
                                });
                                appData.error = 0;
                                appData["token"] = token;
                                res.send({
                                    "code": 200,
                                    "success": "login sucessfull",
                                    appData
                                });
                            } else {
                                appData.error = 1;
                                appData["data"] = "Kode and Password salah";
                                res.send({
                                    "code": 204,
                                    appData
                                });
                            }
                        } else {
                            appData.error = 1;
                            appData["data"] = "User tidak terdaftar";
                            res.send({
                                "code": 204,
                                appData
                            });

                        }
                    }
                }
            )
            connection.release();
        };
    });
});


module.exports = router