-- Modelo de Stored Procedure
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador
CREATE PROCEDURE nome_da_procedure(
	IN variavel_de_entrada tipo-dela(tamanho_se_for_o_caso),
    OUT variavel_de_retorno tipo-dela(tamanho_se_for_o_caso)
    ) -- parâmetros

BEGIN -- delimitando o início do código SQL
	SELECT AVG(rental_duration) INTO variavel_de_retorno
    FROM banco.tabela
    WHERE title = variavel_de_entrada;
END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário

-- Como usar?
CALL nome_da_procedure('exemplo-de-entrada', @parametro-de-saída);
SELECT @parametro-de-saida;

-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros 
-- de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes atuados.
USE sakila;
DELIMITER $$
CREATE PROCEDURE desafio1()
BEGIN
	SELECT first_name, last_name, 
    (
		SELECT COUNT(film_id)
        FROM film_actor
        WHERE film_actor.actor_id = actor.actor_id
    ) as MovieCount
    FROM actor
    ORDER BY MovieCount DESC LIMIT 10;
END $$
CALL desafio1();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, 
-- o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$
CREATE PROCEDURE desafio2(IN categoria VARCHAR(25))
BEGIN
	SELECT f.film_id, f.title, C.category_id, C.name
    FROM film as f
    INNER JOIN film_category as FC ON FC.film_id = f.film_id
    INNER JOIN category as C ON C.category_id = FC.category_id
	WHERE C.name = categoria;
END $$
CALL desafio2('Documentary');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$
CREATE PROCEDURE desafio3(
	IN cliente_mail VARCHAR(50),
    OUT registered BOOL
    )
BEGIN
	SELECT email, IF(active = true, registered = true, registered = false) as Existe
    FROM customer WHERE email = cliente_mail;
END $$
CALL desafio3('LINDA.WILLIAMS@sakilacustomer.org', @is_active);
SELECT @is_active;