function Employee(id, name) {
  this.id = id;
  this.name = name;
  this.idAndName = function() {
    return id + "-" + name;
  }

}
module.exports = Employee;
