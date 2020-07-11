// B1 - O código abaixo utiliza uma API de piadas e implementa o fetchJoke, que é um gerador de piadas ruins. As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL. Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:

const piadinhaQualquer = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
}

const API_URL = 'https://icanhazdadjoke.com/';

function fetchJoke() {
    return fetch(API_URL, { headers: { Accept: 'application/json' }})
        .then(response => response.json())
        .then(data => data.joke);
};

test("Fetch Mockado", async () => {
    fetchJoke = jest.fn().mockResolvedValue(piadinhaQualquer);

    expect(fetchJoke()).toEqual(piadinhaQualquer);
    expect(fetchJoke).toHaveBeenCalledTimes(1);
})
