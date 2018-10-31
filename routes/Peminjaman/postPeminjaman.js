var express = require('express');
var router = express.Router();
var cors = require('cors');

router.post('/', cors(), function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type");

    var input = req.body;

    var data = {

        nim: input.nim,
        nm_jadwal: input.nm_jadwal,
        tgl: input.tgl,
        jam_pinjam: input.jam_pinjam,
        jam_selesai: input.jam_selesai,
        tujuan: input.tujuan,
        kd_ruang: input.kd_ruang,
        hari: input.hari
    };
    connection.query("INSERT INTO peminjaman SET ?", data, function (error, results, fields) {
        if (!error) {
            res.send(JSON.stringify({
                "code": 201,
                "success": "Permintaan sudah dibuat"
            }))
        } else {
            res.send(JSON.stringify({
                "code": 400,
                "success": "error ocurred"
            }))
        }
    });
});

module.exports = router;