SELECT film_id, title, description, IF(description LIKE '%Cat%', 'Quero ver', 'Meeeeeeh') AS wishwatchlist
FROM film;

SELECT title AS Nome, description AS Sinopse,
	CASE
		WHEN rating = 'G' THEN '(L)ivre'
        WHEN rating = 'PG' THEN '+6'
        WHEN rating = 'PG-13' THEN '+13'
        WHEN rating = 'R' THEN '+17'
		ELSE '(A)dults (O)nly'
    END AS 'Classificação indicativa'
FROM film;