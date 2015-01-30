var expect = require ('expect.js');
var sinon = require ('sinon');
var Employee = require("../domain/employee.js");
var assert = require ('assert');

describe('employee object', function(){
  it('should return idAndName', function(){
    var employee = new Employee (1, 'employee 1');
    assert.equal("1-employee 1",employee.idAndName());
  });
});
