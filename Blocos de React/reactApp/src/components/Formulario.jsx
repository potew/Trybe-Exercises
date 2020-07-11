import React from 'react';
import Estados from './EstadosBR';

// Exercício referente ao bloco 13.2 - eventos e formulários
class Formulario extends React.Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            estate: ''
        };

    this.modStateNome = this.modStateNome.bind(this);
    this.modStatEmail = this.modStatEmail.bind(this);
    this.modStatCPF = this.modStatCPF.bind(this);
    this.modStatEnder = this.modStatEnder.bind(this);
    this.modStatCidad = this.modStatCidad.bind(this);
    this.modStatE = this.modStatE.bind(this);

    }
        /* Em todas as fções abaixo, fazer const {value} = event.target; também serviria e permitiria simplificar a linha de baixo. 
        Também seria possível avançar mais e fazer uma refatoração que aceite um valor genérico */
    modStateNome(event) {
        this.setState({nome: event.target.value.toUpperCase()});
    }

    modStatEmail(event) {
        const {value} = event.target;
        if (value.match(/[@].*[.].*/gi)) alert('Done!!!');
        this.setState({email: value});
    }

    modStatCPF(event) {
        let {value} = event.target;
        this.setState({cpf: value.replace(/\D/gi,'')});
    }

    modStatEnder(event) {
        let {value} = event.target;
        this.setState({address: value.replace(/\W/gi,'')});
    }

    modStatCidad(event) {
        let {value} = event.target;
        if (value.match(/\d/gi)) value = '';
        this.setState({city: value});
    }

    modStatE(event) {
        const {value} = event.target;
        this.setState({estate: value});
    }

    render() {
        return (
            <fieldset>
                <legend>Exercício Aula 13.2 - Eventos e formulários</legend>
                <label htmlFor="name">Nome: </label>
                <input 
                    type="text"
                    name="name"
                    maxLength="40"
                    onChange={this.modStateNome}
                    value={this.state.nome}
                    required
                />
                <label htmlFor="email">E-mail: </label>
                <input 
                    type="text"
                    name="email"
                    maxLength="50"
                    onChange={this.modStatEmail}
                    value={this.state.email}
                    required
                />
                <label htmlFor="cpf">CPF: </label>
                <input 
                    type="text"
                    name="cpf"
                    maxLength="11"
                    onChange={this.modStatCPF}
                    value={this.state.cpf}
                    required
                />
                <label htmlFor="address">Endereço: </label>
                <input 
                    type="text"
                    name="address"
                    maxLength="200"
                    onChange={this.modStatEnder}
                    value={this.state.address}
                    required
                />
                <label htmlFor="city">Cidade: </label>
                <input 
                    type="text"
                    name="city"
                    maxLength="28"
                    onChange={this.modStatCidad}
                    onBlur={this.modStatCidad}
                    value={this.state.city}
                    required
                />
                <label htmlFor="state">Estado: </label>
                <select 
                    type="select"
                    name="state"
                    onChange={this.modStatE}
                    value={this.state.estate}
                    required
                > 
                { Estados.map(uf => <option key={uf}>{uf}</option>) }
                </select> 

            </fieldset>
        );
    }

}

export default Formulario;