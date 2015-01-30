var express = require('express')
var logger = require('morgan');
var bodyParser = require('body-parser');
var swagger = require("swagger-node-express");

var app = express()

app.use(bodyParser.json());

var routes = require('./routes/index');
app.use('/main', routes);

var employeeRoutes = require('./employee/routes/index');
app.use('/employee', employeeRoutes);


swagger.setAppHandler(app);

swagger.addValidator(
  function validate(req, path, httpMethod) {
    //  example, only allow POST for api_key="special-key"
    if ("POST" == httpMethod || "DELETE" == httpMethod || "PUT" == httpMethod) {
      var apiKey = req.headers["api_key"];
      if (!apiKey) {
        apiKey = url.parse(req.url,true).query["api_key"];
      }
      if ("special-key" == apiKey) {
        return true;
      }
      return false;
    }
    return true;
  }
);

var findById = {
  'spec': {
    "description" : "find employees",
    "path" : "/employee",
    "notes" : "all employees",
    "summary" : "Find aa employees",
    "method": "GET",
    "type" : "employee",
    "errorResponses" : [swagger.errors.notFound('employee')],
    "nickname" : "findAll"
  },
  'action': function (req,res) {
    var pet = employeeService.proxyList();
  }
};

swagger.addGet(findById);

var models = require('./employee/domain/employee.js');
swagger.addModels(models);

swagger.configure("http://localhost:9998", "0.1");

var server = app.listen(9999, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

module.exports = app;
