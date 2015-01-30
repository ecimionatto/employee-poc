/**
*/

var Employee = require("../domain/employee.js");
var EmployeeService = require("../service/employeeService.js");

var express = require('express');
var request = require('request');
var logger = require('morgan');

var router = express.Router();

/**
* @apiName GetEmployees
* @apiGroup Employee
* @apiVersion 1.0.0
* @api {get} /employee/ request all employees
*
* @apiSuccess list of employees.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     "employees": {
*       "firstname": "John",
*       "lastname": "Doe"
*     }
*
*/
router.get('/', function(req, res) {
  new EmployeeService().proxyList(req, res);
});
/**
* @apiName create employee
* @apiGroup Employee
* @apiVersion 1.0.0
* @api {post} /employee/ create new employee
  *
  * @apiParam {Number} id unique ID.
  *
* @apiSuccess {String} Empoyee.
*
* @apiParamExample Request-Example:
*     HTTP/1.1 200 OK
*     {
*       "firstname": "John",
*       "lastname": "Doe"
*     }
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "id" : "1122",
        "firstname": "John",
*       "lastname": "Doe"
*     }
*
* @apiError UserNotFound The id of the User was not found.
*/
router.post('/', function(req, res) {
  console.log(req.body);
  new EmployeeService().proxyAdd(req.body, res);
});
router.put('/', function(req, res) {
  console.log(req.body);
  new EmployeeService().proxyUpdate(req.body, res);
});

/**
* @apiName GetEmployee
* @apiGroup Employee
* @apiVersion 1.0.0
* @api {get} /employee/:id Request employee information
*
* @apiParam {Number} id unique ID.
*
* @apiSuccess {String} Empoyee.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "firstname": "John",
*       "lastname": "Doe"
*     }
*
* @apiError UserNotFound The id of the User was not found.
*/
router.get('/:id', function(req, res) {
  console.log('id: ' + req.params.id);
  new EmployeeService().proxyEmployee(req.params.id, res);
});

module.exports = router;
