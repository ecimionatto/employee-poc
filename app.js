var express = require('express')
var logger = require('morgan');
var bodyParser = require('body-parser');
var models = require('./employee/domain/employee.js');

var app = express()

app.use(bodyParser.json());

var routes = require('./routes/index');
app.use('/main', routes);

var employeeRoutes = require('./employee/routes/index');
app.use('/employee', employeeRoutes);

var server = app.listen(9999, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

module.exports = app;
