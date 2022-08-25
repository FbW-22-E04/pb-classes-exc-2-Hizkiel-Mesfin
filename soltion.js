//#1

class Employee {
  constructor(id, firstName, lastName, taxID, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxID = taxID;
    this.salary = salary;
  }

  generatePaySlip() {
    return `Employee ID: ${this.id} \nName: ${this.firstName} ${
      this.lastName
    } \nTax ID: ${this.taxID} \nPay: ${(this.salary / 12).toFixed(2)}`;
  }
}

// const person = new Employee(1234, "Ezekiel", "Mesfin", 1234, 12500);
// console.log(person.generatePaySlip());

//#2

class Manager extends Employee {
  constructor(id, firstName, lastName, taxID, salary) {
    super(id, firstName, lastName, taxID, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  removeManagedEmployee(employee) {
    this.managedEmployees = this.managedEmployees.filter((el) => {
      return el.id !== employee.id;
    });
  }
}

const aman = new Employee(1234, "Aman", "Mehari", 1233, 31121);
const chris = new Employee(3456, "chris", "Hetherton", 2323, 1212);

// console.log(aman);
// console.log(chris);

const manager = new Manager(1223, "Ezekiel", "Mesfin", 2323, 232323);
manager.addManagedEmployee(aman);
manager.addManagedEmployee(chris);

// manager.removeManagedEmployee(aman);
// manager.removeManagedEmployee(chris);

console.log(manager);
