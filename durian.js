class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {
    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
      // console.log(this.name);
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver =
        subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }
  get totalEmployees() {
    let totalEmployeesCount = 0; // 1

    for (const subordinate of this.subordinates) {
      totalEmployeesCount += subordinate.totalEmployees; // 2
      console.log('CHECK', subordinate.name, totalEmployeesCount);
      // console.log({ totalEmployeesCount });
      // console.log(subordinate.totalEmployees);
    }

    setTimeout(() => {
      console.log('CHECK', this.name, totalEmployeesCount);
    }, 1000);
    return totalEmployeesCount + 1; // 3
  }
}

const ada = new Employee('Ada', 'CEO', 3000000);
// console.log(ada);

const craig = new Employee('Craig', 'VP Software', 1000000);
const arvinder = new Employee('Arvinder', 'Chief Design Officer', 1000000);
const angela = new Employee('Angela', 'VP Retail', 1000000);
const phil = new Employee('Phil', 'VP Marketing', 1000000);

const simone = new Employee('Simone', 'Software', 200000);
const ali = new Employee('Ali', 'Software', 100000);

const florida = new Employee('Florida', 'Marketing Designer', 150000);
const david = new Employee('David', 'Marketing Designer', 200000);
const brian = new Employee('Brian', 'Marketing Designer', 100000);
const karla = new Employee('Karla', 'Retail', 120000);

const sarah = new Employee('Sarah', 'Software', 95000);
const andrew = new Employee('Andrew', 'Software', 90000);

const emma = new Employee('Emma', 'Marketing Designer', 60000);
const jeremy = new Employee('Jeremy', 'Marketing Designer', 60000);

const chandler = new Employee('Chandler', 'Retail', 100000);

//Ada's direct subordinates
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

//Craig's direct subordinates
craig.addSubordinate(simone);
craig.addSubordinate(ali);

//Phil's direct subordinates
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

//Angela's direct subordinates
angela.addSubordinate(karla);

//Ali' subordinates
ali.addSubordinate(sarah);
ali.addSubordinate(andrew);

//Davids's direct subordinates
david.addSubordinate(emma);
david.addSubordinate(jeremy);

//Karla's direct subordinates
karla.addSubordinate(chandler);

// console.log(craig); // Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [ Employee { name: 'Craig', title: 'VP Software', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Arvinder', title: 'Chief Design Officer', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Angela', title: 'VP Retail', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Phil', title: 'VP Marketing', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype } ], __proto__: Employee.prototype }
// console.log(Object.keys(ada.subordinates).length); // 4
// console.log(craig.boss.name); // 'Ada'

// console.log(ada.numberOfSubordinates); // 4

// console.log(ada.numberOfPeopleToCEO); // 0

// console.log(phil.hasSameBoss(craig)); // true

// console.log(craig.numberOfPeopleToCEO); // 1

// console.log(ada.employeesThatMakeOver(1000000)); // [ Employee { name: 'Craig', title: 'VP Software', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Arvinder', title: 'Chief Design Officer', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Angela', title: 'VP Retail', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Phil', title: 'VP Marketing', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype } ]

console.log(craig.totalEmployees); // 7
