/*******************************************************************************
Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Example:

employees = [
  { name: "Alice", salary: 80000 },
  { name: "Bob", salary: 40000 },
  { name: "Carol", salary: 60000 },
  { name: "Dan", salary: 70000 },
  { name: "Ellen", salary: 100000 },
];

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]
*******************************************************************************/
employees = [
  { name: "Alice", salary: 80000 },
  { name: "Bob", salary: 40000 },
  { name: "Carol", salary: 60000 },
  { name: "Dan", salary: 70000 },
  { name: "Ellen", salary: 100000 },
];



function employeeRaises(employees) {
  let raisedEmployees = [];

  for (let i = 0; i <employees.length; i++) {

    if (employees[i].salary < 50000) {
        let employeeRaises = {};
        employeeRaises['name'] = employees[i].name;
        employeeRaises['salary'] = employees[i].salary * 1.10;

        raisedEmployees.push(employeeRaises);

    }
  }
  return raisedEmployees;
}

  console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]

  
  /*****************DO NOT MODIFY ANYTHING UNDER THIS LINE*********************/
  try {
    module.exports = employeeRaises;
  } catch (e) {
    module.exports = null;
  }