var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var input = req.body;

    var data = {

        NiP : input.kd_role,
        nm_dosen : input.nama

    };

    var code = res.statusCode;
    
    connection.query("INSERT INTO Dosen SET ?", data, function (error, results, fields) {
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
