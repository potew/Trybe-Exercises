# Vamos testar o scrap com os dados do site abaixo
# Obs.: execute $python -m pip install parsel antes de rodar o código!!

from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"
# Define a primeira página como próxima a ter seu conteúdo recuperado

productList = []
description_suffix = '...more'
next_page_url = 'page-1.html'

while next_page_url:
    # Busca o conteúdo da próxima página, enquanto ela existir
    response = requests.get(URL_BASE + next_page_url)
    # Criamos o seletor para poder fazer todas as extrações Dá pra pegar, por exemplo response.status_code, .headers["Content-Type"], .text, .content...
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        # O método .css recebe um seletor CSS como parâmtro, bem como outros especiais com valores de texto por exemplo.
        # Busca e extrai o título e o preço, tirando o Â que vem antes do preço. O método .re(gex) já tem o get() embutido
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").re(r"£\d+\.\d{2}")
        print(title, price) # For debug purposes

        # Busca o link para página de detalhes de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description = detail_selector.css("#product_description ~ p::text").get()
        if description.endswith(description_suffix):
            description = description[:-len(description_suffix)]
        print(description) # For debug purposes
        productList.append({
            "name": title,
            "price": price,
            "description": description
            })
    print(productList)

    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()