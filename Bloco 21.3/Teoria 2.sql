-- Use o banco de dados hotel para realizar os desafios a seguir:
-- Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT Id, Title
FROM books
WHERE NOT EXISTS (SELECT * FROM books_lent WHERE books.Id = books_lent.book_id);

-- Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contem a palavra "lost" no título.
SELECT Id, Title
FROM books
WHERE EXISTS (SELECT * FROM books_lent WHERE books.Id = books_lent.book_id AND books.Title LIKE '%lost%');

-- Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT Name FROM customers
WHERE NOT EXISTS (SELECT * FROM carsales WHERE customers.CustomerId = carsales.CustomerID);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro 
-- de todos os clientes que fizeram compras de carros.
SELECT customers.Name, cars.Name
FROM cars
INNER JOIN carsales ON cars.Id = carsales.CarID
INNER JOIN customers ON customers.CustomerId = carsales.CustomerID
WHERE EXISTS (
			SELECT *
            FROM customers
            WHERE CustomerID = carsales.CustomerID
            );