// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
    let employees = [];
    const addEmployee = () => { 
        let firstName = prompt("Enter first name:");
        let lastName = prompt("Enter last name:");
        let salary = prompt("Enter salary:");
        if(!firstName || !lastName || !salary) {
            alert("Form is still not complete.");
            addEmployee ();
            return;
        }
    
        employees.push({ firstName, lastName, salary: Number(salary) });

        if (confirm("Do you want to add another employee?")) {
            addEmployee();
        }
    
    
    }
  addEmployee();
  return employees;
  
    // TODO: Get user input to create and return an array of employee objects
};



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  for (i=0; i<employeesArray.length; i++){
    totalSalary += employeesArray[i].salary;
  }
  
  const averageSalary = totalSalary / employeesArray.length;
  alert(`The average salary is ${averageSalary.toLocaleString()}`);

  
  
    // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    alert(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}, Salary: ${randomEmployee.salary.toLocaleString()}`);
  
    // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

