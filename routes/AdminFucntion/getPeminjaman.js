var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	connection.query('SELECT kd_peminjmanan as kode, kd_role, kd_ruang, jam_pinjam as start_time, jam_selesai as end_time, tgl, tujuan, hari, nm_jadwal FROM Peminjaman'
	, function (error, results, fields) {
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

			console.log(res.statusCode);
			//If there is no error, all is good and response is 200OK.
		}
	});
});

module.exports = router;