SELECT UCASE(title) FROM film LIMIT 10;
SELECT LCASE(title) FROM film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM film WHERE film_id = 1;
SELECT LENGTH(title) FROM film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) as 'Algo' FROM film WHERE film_id = 1;