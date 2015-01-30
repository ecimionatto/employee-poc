var express = require('express')
var logger = require('morgan');
var bodyParser = require('body-parser');
var models = require('./employee/domain/employee.js');

var swagger = require('swagger-express');

var app = express()

app.use(bodyParser.json());

var routes = require('./routes/index');
app.use('/main', routes);

var employeeRoutes = require('./employee/routes/index');
app.use('/employee', employeeRoutes);

app.use(swagger.init(app, {
  apiVersion: '1.0',
  swaggerVersion: '1.0',
  swaggerURL: '/swagger',
  swaggerJSON: '/api-docs.json',
  swaggerUI: './public/swagger/',
  basePath: 'http://localhost:3000',
  info: {
    title: 'swagger-express sample app',
    description: 'Swagger + Express = {swagger-express}'
  },
  apis: ['./api.js'],
  middleware: function(req, res){}
}));


var server = app.listen(9999, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

module.exports = app;
