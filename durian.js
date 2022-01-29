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

  
}

const ada = new Employee('Ada', 'CEO', 3000000);
// console.log(ada);

const craig = new Employee('Craig', 'VP Software', 1000000);
const arvinder = new Employee('Arvinder', 'Chief Design Officer', 1000000);
const angela = new Employee('Angela', 'VP Retail', 1000000);
const phil = new Employee('Phil', 'VP Marketing', 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);



// console.log(ada); // Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [ Employee { name: 'Craig', title: 'VP Software', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Arvinder', title: 'Chief Design Officer', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Angela', title: 'VP Retail', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype }, Employee { name: 'Phil', title: 'VP Marketing', salary: 1000000, boss: Employee { name: 'Ada', title: 'CEO', salary: 3000000, boss: null, subordinates: [], __proto__: Employee.prototype }, __proto__: Employee.prototype } ], __proto__: Employee.prototype }
// console.log(Object.keys(ada.subordinates).length); // 4
// console.log(craig.boss.name); // 'Ada'

// console.log(ada.numberOfSubordinates); // 4

// console.log(ada.numberOfPeopleToCEO); // 0

// console.log(phil.hasSameBoss(craig)); // true

// console.log(craig.numberOfPeopleToCEO); // 1

