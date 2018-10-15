var express = require('express');
var router = express.Router();

var Jadwal = function (jadwal)
{
    this.kd_jadwal = jadwal.kd_jadwal;
    this.nm_jadwal = jadwal.nm_jadwal;
    this.hari = jadwal.hari;
    this.tgl  = jadwal.tgl;
    this.jam_awal = jadwal.jam_awal;
    this.jam_akhir = jadwal.jam_akhir;
    this.nip = jadwal.nip;
    this.kd_ruang = jadwal.kd_ruang;
    this.kd_kelas = jadwal.kd_kelas;
};

router.post('/', function (req, res, next) {

    var new_jadwal = new Jadwal(req.body);
    var input = req.body;

    var data = {

        kd_jadwal : input.kd_jadwal,
        nm_jadwal : input.nm_jadwal,
        hari : input.hari,
        tgl : input.tgl,
        jam_awal : input.jam_awal,
        jam_akhir : input.jam_akhir,
        nip : input.nip,
        kd_ruang : input.kd_ruang,
        kd_kelas : input.kd_kelas
    };


    connection.query("INSERT INTO jadwal SET ?", data , function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({
                "status": 500,
                "error": error,
                "response": null
            }));
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({
                "status": 200,
                "error": null,
                "response": results
            }));
            //If there is no error, all is good and response is 200OK.
        }
    });
});

module.exports = router;