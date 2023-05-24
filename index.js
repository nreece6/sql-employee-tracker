const mysql = require('mysql2')
const inquirer = require('inquirer')
require('console.table')

//object containing initial prompt questions
const promptMessages = {
    viewAllEmployees: 'View All Employees',
    viewByDepartment: 'View All Employees By Department',
    viewByManager: 'View All Employees By Manager',
    addEmployee: 'Add An Employee',
    removeEmployee: 'Remove An Employee',
    updateRole: 'Update Employee Role',
    updateEmployeeManager: 'Update An Employee Manager',
    viewAllRoles: 'View All Roles',
    exit: 'Exit'
}

// creates connection to database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employees_db'
})

db.connect(err => {
    if (err) throw err
    prompt()
})
// initial prompt - creates home screen of options and runs different functions depending on user selections
function prompt() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Welcome to the Employee Tracker.',
            choices: [
                promptMessages.viewAllEmployees,
                promptMessages.viewByDepartment,
                promptMessages.viewByManager,
                promptMessages.viewAllRoles,
                promptMessages.addEmployee,
                promptMessages.removeEmployee,
                promptMessages.updateRole,
                promptMessages.exit
            ]
        })
        .then(answer => {
            console.log('answer', answer)
            switch (answer.action) {
                case promptMessages.viewAllEmployees:
                    viewAllEmployees()
                    break

                case promptMessages.viewByDepartment:
                    viewByDepartment()
                    break

                case promptMessages.viewByManager:
                    viewByManager()
                    break

                case promptMessages.addEmployee:
                    addEmployee()
                    break

                case promptMessages.removeEmployee:
                    remove('delete')
                    break

                case promptMessages.updateRole:
                    remove('role')
                    break

                case promptMessages.viewAllRoles:
                    viewAllRoles()
                    break

                case promptMessages.exit:
                    db.end()
                    break
            }
        })
}

// TODO: write functions to handle new prompts based on user selections or call tables that user wants to see
function viewAllEmployees() {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;`
    db.query(query, (err, res) => {
        if (err) throw err
        console.log('\n')
        console.log('VIEW ALL EMPLOYEES')
        console.log('\n')
        console.table(res)
        prompt();
    })
}
function viewByDepartment() {
    const query = `SELECT department.name AS department, role.title, employee.id, employee.first_name, employee.last_name
    FROM employee
    LEFT JOIN role ON (role.id = employee.role_id)
    LEFT JOIN department ON (department.id = role.department_id)
    ORDER BY department.name;`
    db.query(query, (err, res) => {
        if (err) throw err
        console.log('\n')
        console.log('VIEW EMPLOYEE BY DEPARTMENT')
        console.log('\n')
        console.table(res)
        prompt()
    })
}
function viewByManager() {
    
}
function addEmployee() {
    
}
function remove() {
    
}
function viewAllRoles() {
    
}

