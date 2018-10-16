var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	connection.query('SELECT * from ruangan', function (error, results, fields) {
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