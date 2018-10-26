var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var mysql = require("mysql");
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.disable('etag');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jadwal = require('./routes/Jadwal/getJadwal');
var addJadwal = require('./routes/Jadwal/postJadwal')
var ruangan = require('./routes/Ruangan/getRuangan');
var loginMhs = require('./routes/Mahasiswa/LoginMhs');
var loginDosen = require('./routes/Dosen/LoginDosen');
var RegisMhs  = require('./routes/Mahasiswa/RegisMhs');
var RegisDosen = require('./routes/Dosen/RegisDosen');
var carijadwal = require('./routes/Jadwal/getJadwalRuangan');
var jadwalDosen = require('./routes/Jadwal/getJadwalDosen');
var cariRuangan = require('./routes/Ruangan/findRuangan');
var ruanganId = require('./routes/Ruangan/getRuanganbyId');
var namaDosen = require('./routes/Dosen/getNamaDosen');
var jadwalhari = require('./routes/Jadwal/getJadwalbyHari');
var addPeminjaman = require('./routes/Peminjaman/postPeminjaman');
var getMahasiswa = require('./routes/Mahasiswa/getMahasiswa');

// Database Connection
app.use(function (req, res, next) {
  global.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'spr_tik'
  });
  connection.connect();
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/allJadwal', jadwal);
app.use('/api/allRuangan', ruangan);
app.use('/api/addJadwal', addJadwal);
app.use('/api/logMahasiswa',loginMhs);
app.use('/api/logDosen', loginDosen);
app.use('/api/regisMahasiswa', RegisMhs);
app.use('/api/regisDosen', RegisDosen);
app.use('/api/getJadwalRuangan', carijadwal);
app.use('/api/getjadwalDosen', jadwalDosen);
app.use('/api/cariRuangan', cariRuangan);
app.use('/api/getRuanganbyId',ruanganId);
app.use('/api/getNamaDosen',namaDosen);   
app.use('/api/getJadwalHari', jadwalhari);   // get data jadal perhari
app.use('/api/addPeminjaman', addPeminjaman, cors()); // insert peminjaman
app.use('/api/getMahasiswa', getMahasiswa);  // get data manusia dengan nim nya


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var server = http.createServer(app);
server.listen(4001);