const mysql = require('mysql2')
const inquirer = require('inquirer')
require('console.table')

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

function prompt() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
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
            console.log('answer', answer);
            switch (answer.action) {
                case promptMessages.viewAllEmployees:
                    viewAllEmployees();
                    break;

                case promptMessages.viewByDepartment:
                    viewByDepartment();
                    break;

                case promptMessages.viewByManager:
                    viewByManager();
                    break;

                case promptMessages.addEmployee:
                    addEmployee();
                    break;

                case promptMessages.removeEmployee:
                    remove('delete');
                    break;

                case promptMessages.updateRole:
                    remove('role');
                    break;

                case promptMessages.viewAllRoles:
                    viewAllRoles();
                    break;

                case promptMessages.exit:
                    connection.end();
                    break;
            }
        })
}


function viewAllEmployees() {
    
}
function viewByDepartment() {
    
}
function viewByManager() {
    
}
function addEmployee() {
    
}
function remove() {
    
}
function viewAllRoles() {
    
}

