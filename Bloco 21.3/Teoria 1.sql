-- Exiba o título, o id do idioma e o idioma de todos os filmes, utilizando apenas SUBQUERY para encontrar
--  o idioma. A SUBQUERY deve possuir o alias idioma. Use as tabelas film e language para encontrar essa informação.

SELECT title, language_id, 
	(
		SELECT name
        FROM language
        WHERE film.language_id = language.language_id
        ) AS lang
	FROM film;

-- Usando as tabelas staff e address, exiba o nome, sobrenome, id do endereço e endereço dos funcionários 
-- usando apenas subqueries. A SUBQUERY deve possuir o alias endereco.

SELECT first_name, last_name, address_id,
	(
		SELECT address
        FROM address
        WHERE staff.address_id = address.address_id
        ) AS endereco
	FROM staff;

-- Utilizando apenas subqueries, exiba os nomes dos atores ou atrizes que já atuaram em mais de 40 filmes.
-- Use as tabelas actor e film_actor.
SELECT first_name, last_name,
	(
		SELECT COUNT(actor_id)
        FROM film_actor
        WHERE film_actor.actor_id = actor.actor_id
        ) AS TotMoviesActed
	FROM actor
    ORDER BY first_name;
    
    SELECT a.actor_id, a.first_name, a.last_name, COUNT(FA.actor_id)
	FROM actor AS A
    INNER JOIN film_actor as FA
    ON FA.actor_id = A.actor_id
    GROUP BY actor_id;
    
    