var Employee = require('../domain/employee.js');
var request = require ('request');
var logger = require('morgan');

function EmployeeService() {
  this.proxyList = function(req, respo) {
    request.get({ url : 'https://xxx.test.com/employee/list?j_username=xxx@xxx.com&j_password=xxxx&ert=json', rejectUnauthorized : false }).on('response', function(res) {
      var body = '';

      res.on('data', function (chunk) {
        console.log(chunk);
        body += chunk;
      });

      res.on('end', function() {
        console.log(body);
        respo.setHeader('content-type', 'application/json');
        respo.send(body);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  }

  this.proxyEmployee = function(req, respo) {
    request.get({ url : 'https://xxx.test.com/employee/list?j_username=xxx@xxx.com&j_password=xxxx&ert=json', rejectUnauthorized : false }).on('response', function(res) {
      var body = '';

      res.on('data', function (chunk) {
        console.log(chunk);
        body += chunk;
      });

      res.on('end', function() {
        console.log(body);
        respo.setHeader('content-type', 'application/json');
        respo.send(body);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  }


  this.proxyUpdate = function (body, respo) {

    request.put({ url : 'https://xxx.test.com/employee/list?j_username=xxx@xxx.com&j_password=xxxx&ert=json', rejectUnauthorized : false }).
    form(createFormData(body)).
    on('response', function(res) {
      var body = '';

      res.on('data', function (chunk) {
        console.log(chunk);
        body += chunk;
      });

      res.on('end', function() {
        console.log(body);
        respo.setHeader('content-type', 'application/json');
        respo.send(body);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });


  }

  function createFormData(body) {

    var formData = {
      version: body.version,
      id: body.id,
      number: body.number,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      efax: body.efax,
      phoneExtension: body.phoneExtension,
      homePhone: body.homePhone,
      mobilePhone: body.mobilePhone,
      phone: body.phone,
      homeEmail: body.homeEmail,
      homeAddress1: body.homeAddress1,
      homeAddress2: body.homeAddress2,
      homeCity: body.homeCity,
      homeState: body.homeState,
      homeZip: body.homeZip,
      userName: body.userName,
      hireDate: body.hireDate,
      departureDate: body.departureDate,
      isCurrentEmployee: body.isCurrentEmployee,
      department: body.department,
      office: body.office,
      krfsEntity: body.krfsEntity,
      userId: body.userId,
      fullName: body.fullName,
      new: body.new
    };

    return formData;

  }


  this.proxyAdd = function(body, respo) {

    request.post({ url : 'https://xxx.test.com/employee/list?j_username=xxx@xxx.com&j_password=xxxx&ert=json', rejectUnauthorized : false }).
    form(createFormData(body)).
    on('response', function(res) {
      var body = '';

      res.on('data', function (chunk) {
        console.log(chunk);
        body += chunk;
      });

      res.on('end', function() {
        console.log(body);
        respo.setHeader('content-type', 'application/json');
        respo.send(body);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });

  }
}
module.exports = EmployeeService;
