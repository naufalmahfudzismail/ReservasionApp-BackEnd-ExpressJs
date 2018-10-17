var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    var input = req.body;

    var data = {

        kd_jadwal: input.kd_jadwal,
        nm_jadwal: input.nm_jadwal,
        hari: input.hari,
        tgl: input.tgl,
        jam_awal: input.jam_awal,
        jam_akhir: input.jam_akhir,
        nip: input.nip,
        kd_ruang: input.kd_ruang,
        kd_kelas: input.kd_kelas
    };

    var code = res.statusCode;


    connection.query("INSERT INTO jadwal SET ?", data, function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({
                "status": 500,
                "error": error,
                "response": null
            }));
            //If there is error, we send the error in the error section with 500 status
        } else if (code == 200) {
            res.send(JSON.stringify({
                "status": res.statusCode,
                "error": null,
                "response": results
            }));
            //If there is no error, all is good and response is 200OK.
        } else {
            res.send(JSON.stringify({
                "status": res.statusCode,
                "error": null,
                "response": null
            }));
              // if error detedcted and got no return
        }
      
    });
});

module.exports = router;