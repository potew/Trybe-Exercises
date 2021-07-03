#
# Exercício 4 Baseado em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html, faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.

import requests
from parsel import Selector

# 2 comandos em 1 só 
selector = Selector(requests.get('http://books.toscrape.com/catalogue/the-origin-of-species_499/index.html').text)

bookData = selector.css('.product_page')
bookTitle = bookData.css('.product_main h1').get()
bookPrice = bookData.css('.price_color').re(r"£\d+\.\d{2}")[0]
bookDescription = bookData.css('#product_description ~ p::text').get()
bookPicUrl = bookData.css('#product_gallery img').get()
bookRelated = bookData.css('.product_pod')

print(
  'All:', bookData,
  '\nTitle:', bookTitle,
  '\nPrice:', bookPrice,
  '\nDescription:', bookDescription,
  '\nPicPath:', bookPicUrl,
  '\nRelatedBooks:', bookRelated
)
