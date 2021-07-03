"""
Neste exemplo utilizamos a classe abstrata BookRetriever para definir uma
interface de métodos que serão utilizados pelo nosso código cliente.

A classe BookImporter é incompatível com nosso estoque (Stock),
pois nos envia dicionários ao invés de livros.

O nosso adaptador (Adapter) é composto por um objeto BookImporter a ser adaptado.

Quando o cliente invoca o método `retrieve_books` da classe adaptadora (`Adapter`),
estamos realizando a tradução para a interface esperada pelo cliente
(um conjunto de livros e não dicionários).
"""
from abc import ABC, abstractmethod
# from collections.abc import Iterator, Iterable

# ...

# first_book = next(iterator)
#    print(first_book.isbn, first_book.title)


#    for book in stock:
#        print(book.title)

class BookImporter:
    def __init__(self):
        # adicionei alguns livros no construtor
        # somente para didática
        self._books = [
            {
                "isbn": "7b599c8bfcdd8d30",
                "title": "Camp Midnight",
                "author": "Steven Seagle",
                "qty": 8,
            },
            {

                "isbn": "abbb492978ff656d",
                "title": "The Secret Garden",
                "author": "Frances Burnett",
                "qty": 4,
            },
        ]

    # ...

    def load_books(self):
        """Retorna os livros carregados em memória.

        Equivalente a specificRequests no diagrama."""
        return self._books


class BookRetriever(ABC):
    """Classe abstrata que define a interface utilizada pelo código cliente"""

    @abstractmethod
    def retrieve_books(self):
        raise NotImplementedError()


class Adapter(BookRetriever):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def retrieve_books(self):
        # os livros são recuperados como dicionários
        raw_books = self.adaptee.load_books()
        # converte os dicionários em livros
        books = [
            Book(
                isbn=book["isbn"],
                title=book["title"],
                author=book["author"],
                qty=book["qty"],
            )
            for book in raw_books
        ]
        # retorna uma lista de livros
        return books


"""O código cliente recebe uma lista de livros para adicionar em estoque
preciso de um objeto livro, porém o sistema de importação nos provê um dicionário."""
stock = Stock()
# Enviamos o importador para ser adaptado
adapter = Adapter(BookImporter())
books = adapter.retrieve_books()
# Enfim podemos armazenar os livros
for book in books:
    stock.add_book(book)