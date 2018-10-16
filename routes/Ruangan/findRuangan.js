var express = require('express');
var router = express.Router();

router.get('/:tgl/:jam_awal/:jam_akhir', function (req, res, next) {

    var tgl = req.params.tgl;
    var start = req.params.jam_awal;
    var end = req.params.jam_akhir;

    connection.query(
        'SELECT kd_ruang from jadwal where tgl=? AND jam_awal !=? AND jam_akhir!=?',
        [tgl, start, end],
        function (error, results, fields) {
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