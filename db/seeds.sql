INSERT INTO department
    (department_name)
VALUES
    ('Operations'),
    ('Analystics'),
    ('Marketing'),
    ('Executive');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('General Manager', 11000000, 1),
    ('Tech Lead', 4000000, 1),
    ('Team Lead Analyst', 15000000, 2),
    ('Team Analyst', 8000000, 2),
    ('Media Manager', 7000000, 3),
    ('Media Specialist', 3000000, 3),
    ('CEO', 45000000, 4),
    ('CFO', 25000000, 4);
    
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Carl', 'Lewis', 3, NULL),
    ('Quinn', 'Smith', 4, 3),
    ('Denise', 'Kemp', 5, NULL),
    ('Lauren', 'Diaz', 6, 5),
    ('Gary', 'Johnson', 7, NULL),
    ('Angel', 'Lopez', 8, 7);