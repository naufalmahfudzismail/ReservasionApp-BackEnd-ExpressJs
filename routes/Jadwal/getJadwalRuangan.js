var express = require('express');
var router = express.Router();

router.get('/:ruang/:hari', function (req, res, next) {

	var ruangan = req.params.ruang;
	var hari  = req.params.hari;
	var sql = 'SELECT * FROM jadwal WHERE kd_ruang=? AND hari=?';

	connection.query(sql,[ruangan, hari], function (error, results, fields) {
		if (error) {
			res.send(JSON.stringify({
				"status": 500,
				"error": error, 
				"response": null
			}));
			//If there is error, we send the error in the error section with 500 status
		} else {
			res.send(JSON.stringify({
				
				"status":res.statusCode,
				"error": null,
				"response": results
				
			}));
			console.log(sql);
			console.log(req.params);
			//If there is no error, all is good and response is 200OK.
		}
	});
});

module.exports = router;