SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;

-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou 
-- usando as tabelas actor e film_actor.
SELECT a.actor_id, a.first_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. 
-- Use as tabelas staff e address.
SELECT s.first_name, s.last_name, ad.address
FROM address AS ad
INNER JOIN staff AS s
ON ad.address_id = s.address_id;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California
-- e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT c.first_name, c.email, ad.address_id, ad.address, ad.district
FROM address AS ad
INNER JOIN customer AS c
ON ad.address_id = c.address_id
WHERE district = 'California';

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano 
-- de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE year(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

-- Monte uma query que exiba o id do ator, nome, id do filme e titulo do filme, usando as tabelas actor, 
-- film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT a.actor_id, a.first_name, a.last_name, f.film_id, f.title
FROM actor as a
INNER JOIN film_actor as fa
ON a.actor_id = fa.actor_id
INNER JOIN film as f
ON f.film_id = fa.film_id;

 