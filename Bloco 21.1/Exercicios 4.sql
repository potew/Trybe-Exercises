SELECT * FROM employees;

-- 1. Write a query to get the job_id and related employee's id.
SELECT JOB_ID, group_concat(EMPLOYEE_ID, ' ') as 'Employees IDs' FROM employees
GROUP BY JOB_ID;

-- 2. Write a query to update the portion of the phone_number in the employees table, 
-- within the phone number the substring '124' will be replaced by '999'.
SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET PHONE_NUMBER = replace(phone_number, '124', '999');

-- 3. Write a query to get the details of the employees where the length of the first name
-- greater than or equal to 8.
SELECT * FROM employees
WHERE length(FIRST_NAME) >= 8;

-- 4. Write a query to display leading zeros before maximum and minimum salary.
SELECT job_id, LPAD( max_salary, 7, '0') ' Max Salary',
LPAD( min_salary, 7, '0') ' Min Salary' 
FROM jobs;

-- 5. Write a query to append '@example.com' to email field.
SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET EMAIL = concat(EMAIL, '@exempol.com.br');

-- 6. Write a query to get the employee id, first name and hire month.
SELECT EMPLOYEE_ID, FIRST_NAME, month(HIRE_DATE)
FROM employees;

-- 7. Write a query to get the employee id, email id (discard the last three characters).
SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, substring(EMAIL, 1, length(EMAIL) - 3)
FROM employees;

-- 8. Write a query to find all employees where first names are in upper case.
SELECT * FROM employees 
WHERE first_name = BINARY UPPER(first_name);

-- 9. Write a query to extract the last 4 character of phone numbers.
SELECT PHONE_NUMBER, substring(PHONE_NUMBER, length(PHONE_NUMBER) - 3)
FROM employees;

-- 10. Write a query to get the last word of the street address.
SELECT location_id, street_address, 
SUBSTRING_INDEX(REPLACE(REPLACE(REPLACE(street_address, ',', ' '), ')', ' '), '(',' '), ' ', -1) 
AS 'Last-word-of-street_address'
FROM locations;

-- 11. Write a query to get the locations that have minimum street length.
SELECT * FROM locations
WHERE length(STREET_ADDRESS) = (SELECT min(length(STREET_ADDRESS)) FROM locations);

-- 12. Write a query to display the first word from those job titles which contains more than one words.
SELECT job_title, SUBSTR(job_title,1, INSTR(job_title, ' ')-1)
FROM jobs;
