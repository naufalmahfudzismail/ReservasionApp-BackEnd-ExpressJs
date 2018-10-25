var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	connection.query('SELECT j.kd_jadwal, j.nm_jadwal, j.hari, DATE_FORMAT(j.tgl, '+"'%e %b, %Y'"+') as tgl, j.jam_awal, j.jam_akhir, d.nm_dosen , j.kd_ruang, j. kd_kelas from jadwal j JOIN dosen d ON j.nip = d.nip  ORDER by j.tgl ASC '
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