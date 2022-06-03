const Employee = require("./Employee");

class Manager extends Employee {
  // TODO - Write Manager class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, officeNumber) {
  super(name, id, email);
  this.officeNumber = officeNumber;
}

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
