import React from 'react';
//import { Component } from 'react'; << também dá pra usar, dispensando o React no React.Component deixando apenas Component

class BotTexto extends React.Component {

    constructor() {
        super();
        this.state = {
            texto: 'Aula 13.1 - Componentes com estado - clique em um dos buttons'
        };
    }

    changeState(bot) {
        this.setState({ texto: `Clicaste no ${bot}` })
    };

    render() {
    return (  
        <div className="botoes">
            <h3>{ this.state.texto }</h3>
            <button onClick={ () => this.changeState(1) }>Botão um</button>
            <button onClick={ () => this.changeState(2) }>Botão dois</button>
            <button onClick={ () => this.changeState(3) }>Botão três</button>
        </div>
    );
  };
}

export default BotTexto;
