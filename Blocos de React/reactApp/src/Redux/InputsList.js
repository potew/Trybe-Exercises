import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from './actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
    // Primeiro, nós estamos definindo um estado interno do componente chamado textValue. Note que, apesar de estarmos usando o Redux, que centraliza os states, caso haja algum estado o qual não necessite navegar entre outros componentes, podemos declará-lo internamente.
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        {/* Aqui, nada de novo: estamos criando um input para o usuário digitar a tarefa que deseja adicionar. A cada mudança no valor do input, o valor é salvo no estado textValue. */}
        <button onClick={() => this.props.add(this.state.textValue)}>
          Adicionar tarefa
        </button>
        {/* Um botão com a propriedade onClick foi criado, passando a função add que está presente na props. Mas como isso foi parar lá? Veja abaixo: */}
      </div>
    );
  }
}

// A função mapDispatchToProps é a responsável por disparar - fazer o dispatch de - uma ação para o reducer.
// Para termos acesso às funcionalidades do Redux, seja a de ler os dados ou manipulá-los, precisamos acessá-las como props de um componente. Por isso, como explícito no nome da função, o mapDispatchToProps mapeia os dispatchs para o props.

// Note que no ínicio do arquivo estamos importanto a action addAssignment, criada anteriormente. No caso, estamos nomeando uma propriedade chamada add, que faz o dispatch da action addAssignment com um parâmetro.

// O mapDispatchToProps, assim como o mapStateToProps, que veremos logo a frente, podem ser criados via funções convencionais ou arrow functions. O que é indispensável é que o retorno seja um objeto, pois é assim que o Redux o espera.
// Lembre-se: a única maneira de enviarmos uma action para um reducer é fazendo seu dispatch.

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e)),
});

// Por último, estamos conectando o Redux ao componente. Para isso, precisamos importar o método connect.
export default connect(null, mapDispatchToProps)(InputsList);

// O método connect possui a seguinte estrutura: connect()(). É ele quem nos da acesso ao store do Redux.
// No primeiro parênteses, devem estar presentes os métodos nativos do Redux. Como nesse caso estamos apenas enviando dados, estamos passando apenas o mapDispatchToProps. O null presente no connect é necessário pois ele entende que o primeiro parâmetro deve ser uma função chamada mapStateToProps, que veremos logo a frente. No segundo parênteses passamos nosso componente.