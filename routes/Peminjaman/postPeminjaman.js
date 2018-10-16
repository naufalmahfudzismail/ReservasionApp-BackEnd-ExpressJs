var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    var input = req.body;

    var data = {

        nim : input.nim,
        nm_jadwal : input.nm_jadwal,
        tgl : input.tgl,
        jam_pinjam : input.jam_pinjam,
        jam_selesai : input.jam_selesai,
        tujuan : input.tujuan,
        kd_ruang : input.kd_ruang,
        hari : inpt.hari
    };

    connection.query("INSERT INTO peminjaman SET ?", data , function (error, results, fields) {
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