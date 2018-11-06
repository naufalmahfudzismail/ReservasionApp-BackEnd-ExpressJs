var express = require('express');
var router = express.Router();
var cors = require("cors")
var jwt = require("jsonwebtoken");

router.use(cors());
process.env.SECRET_KEY = "tekomtek123";

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var input = req.body;

    var data = {
        kd_jadwal : input.kd_jadwal,
        kd_role: input.kd_role,
        nm_jadwal: input.nm_jadwal,
        tgl: input.tgl,
        jam_pinjam: input.jam_pinjam,
        jam_selesai: input.jam_selesai,
        tujuan: input.tujuan,
        kd_ruang: input.kd_ruang,
        hari: input.hari
    };

    connection.query("INSERT INTO Jadwal SET ?", data, function (error, results, fields) {
        if (!error) {
            res.send(JSON.stringify({
                "code": 201,
                "success": "Permintaan sudah dibuat"
            }));
        } else {
            res.send(JSON.stringify({
                "code": 400,
                "success": "error ocurred"
            }));
        }
    });

});


module.exports = router