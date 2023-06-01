# sql-employee-tracker

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)



## Descritption

This application is a console shell based employee tracker. The application prompts the user through a series of menu options, allowing the user to do things such as View All Employees, View All Employees By Department, View All Employees By Manager, Add Employees, Remove Employees, Update Employee Job Description, Change An Employee's Manager, and View All Roles in the organization.

This application allows a user with limited coding knowledge to view and manipulate data stored in MySQL tables. These tables make use of primary and foreign keys so that the user is able to view data stored in multiple tables so long as it is relevant to their task.


## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [License](#license)
  5. [Tests](#tests)
  6. [Questions](#questions)
  

## Installation

To install this application, navigate to the repo on my github account https://github.com/nreece6/sql-employee-tracker. Clone the repo and open the folder location of the program in the terminal. You must have node installed in order to run the application. You must also use 

```
npm install
```

In your shell to install all necessary dependencies.

Once you have the repo location open in your terminal, run the program with 

```
node index.js
 ``` 
Follow the prompts. Once a task has been completed the user will be returned to the main menu. You can exit the program from the main menu with the 'Exit" option.


## Usage

You must have node.js, the inquirer package, and the mysql2 package installed to run this application.

YOU MUST USE YOUR OWN MYSQL PASSWORD - PROJECT HAS BEEN UPLOADED WITH THIS SECTION BLANK - CAN BE FOUND ON LINE 23 OF INDEX.JS

Video example of usage available at:

https://drive.google.com/file/d/1K5ommYKuTY64MITOlvdvr4XmQ8wwWkgY/view

Run the program in the terminal using 
```
node index.js
```

User will be greeted with a menu of options. Each option will either allow the user to view certain data, or allow the user to manipulate the data stored in the tables. The user will be returned to the main menu following the completion of any task. The user may be prompted to enter information, or select from a list of options, depending on the option selected from the original menu. In order to delete an Employee, or change an Employee's Manager, you must use the Employee's id. This can be found by viewing all Employees. If you attempt to alter data without knowing the Employee ID, you will have the option of returning to the main menu to find this information.

If the user wishes to close the program, select "Exit" from the main menu.


## Contributing

To contribute, clone this repo and push any changes.


## License

https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

MIT License

Copyright (c) 2021 Othneil Drew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Tests

Tests available in the utils folder located withing the repository for this application.

## Questions


For any questions, please view my github account:

https://github.com/nreece6

or you can reach me at:

reece.nick24@gmail.com