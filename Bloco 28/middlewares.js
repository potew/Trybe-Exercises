
// Anatomia de um middleware - no express, tudo é um middleware
// Recebe esses 3 parâmetros, é executada em um dado momento, pode encerrar a request ou executar o próximo middleware
const middleware = (req, res, next) => {
  // req é a requisição
  // req.params
  // req.query
  // req.body
  // res é a resposta
  // res.status
  // res.json - usado quando mandamos um objeto - logo, converte o que vc mandar para JSON
  // res.send - esse já não faz essa conversão. Deve ser evitado, a menos que nunca se use JSON na API
  // res.end
  // next - passa a requisição para o próximo middleware.
}

const middlewareDeErro = (err, req, res, next) => {
  // Mesma coisa do outro, só que com esse parâmetro extra (err)
  // O valor dele é o que foi passado para a variável next em outro middleware
  // Deve ser o último middleware a ser executado - vir depois dos outros tipos de middleware (só 1)
}