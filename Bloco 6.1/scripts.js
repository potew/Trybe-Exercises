function init() {
    var campoCPF = document.getElementById("cpf");
    campoCPF.addEventListener('keypress', verificaNum, false);
    populaEstados();
}

//  Onde a variável passada 'evt' representa a tecla recebida pela função
function verificaNum(evt) {
    let carASCII = evt.carASCII;
    if (carASCII != 0) {
        if(carASCII < 48 || carASCII > 57) {
             evt.preventDefault();
             alert("Apenas números, por favor!!");
        }
    }
}

function populaEstados() {
    var listaUF = document.getElementById("selectEstados");
    const listaEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    for (let i = 0 ; i < 27 ; i++) {
        let uf = document.createElement("option");
        listaUF.setAttribute('value',listaEstados[i]);
        uf.innerText = listaEstados[i];
        listaUF.appendChild(uf);
    }

}

function geraDiv() {
    let divGerada = document.createElement("div"),
    nome = document.createElement("div"),
    cpf = document.createElement("div"),
    email = document.createElement("div");
    endereco = document.createElement("div");
    cidade = document.createElement("div");
    estado = document.createElement("div");
    tipoRes = document.createElement("div");
    console.log("gerou");
    divGerada.className = "divGerada";
    divGerada.textContent = '<h3>Mini-relatório gerado</h3>'
    nome.textContent = `Nome: ${document.getElementById("nome").value}`;
    cpf.textContent = `CPF: ${document.getElementById("cpf").value}`;
    email.textContent = `E-mail: ${document.getElementById("email").value}`;
    endereco.textContent = `Endereço: ${document.getElementById("endereco").value}`;
    cidade.textContent = `Cidade: ${document.getElementById("cidade").value}`;
    estado.textContent = `Estado: ${document.getElementById("selectEstados").value}`;
    tipoRes.textContent = `: ${document.getElementsByName("residencia").value}`;
    divGerada.appendChild(nome);
    divGerada.appendChild(cpf);
    divGerada.appendChild(email);
    divGerada.appendChild(endereco);
    divGerada.appendChild(cidade);
    divGerada.appendChild(estado);
    divGerada.appendChild(tipoRes);
    document.body.appendChild(divGerada);
}
