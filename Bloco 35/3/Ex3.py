# Exercício 3 Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como um navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedido.

import requests
from parsel import Selector

fullResponse = requests.get('https://scrapethissite.com/pages/advanced/?gotcha=headers', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'})
selector = Selector(text=fullResponse.text)
scraperFeedback = selector.css('.col-md-4::text').get()
print(scraperFeedback)

assert "bot detected" not in fullResponse.text