var Express = require('express');
var router = Express.router;


router.delete('/:kd_jadwal', function(req, res, next)
{
    var query = req.params.kd_jadwal;

    connextion.query('DELETE FROM jadwal WHERE kd_jadwal =?', query, function(error, result, field){

        
    })
})



module.exports = router;