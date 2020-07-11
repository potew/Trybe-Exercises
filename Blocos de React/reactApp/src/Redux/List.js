import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

// Estamos fazendo um map com os elementos presentes no array list que, por sua vez, está presente no props. Mas como isso foi parar lá?
const mapStateToProps = state => ({
  list: state.listReducer,
});

// A função mapStateToProps, auto-descritiva, mapeia as entidades armazenadas nos estados para uma props.
// Note que as estruturas dos métodos mapStateToProps e mapDispatchToProps sempre serão as mesmas, o que irá mudar são as propriedades que vamos acessar ou actions que vamos disparar.
// No nosso caso, queremos acessar os dados providos pelo reducer.js, portanto basta acessar o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamos de list).
// Por último, conectamos o Redux ao componente, fazendo uso do connect. Como visto anteriormente, o connect tem o seguinte formato: connect()(). Como no caso estamos fazendo apenas leitura dos dados, basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.

export default connect(mapStateToProps)(List);
