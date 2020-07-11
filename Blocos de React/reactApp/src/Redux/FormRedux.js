import React from 'react';
import Estados from '../components/EstadosBR';
import { connect } from "react-redux";
import { formAction } from './actions';

// Exercício referente ao bloco 17.32 - eventos e formulários
class ReduxForm extends React.Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            state: '',
            home_type: '',
            resume: '',
            role: '',
            role_description: '',
        };

        this.modStateNome = this.modStateNome.bind(this);
        this.modStatEmail = this.modStatEmail.bind(this);
        this.modStatCPF = this.modStatCPF.bind(this);
        this.modStatEnder = this.modStatEnder.bind(this);
        this.modStatCidad = this.modStatCidad.bind(this);
        this.modStatE = this.modStatE.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

    }
        /* Em todas as fções abaixo, fazer const {value} = event.target; também serviria e permitiria simplificar a linha de baixo. 
        Também seria possível avançar mais e fazer uma refatoração que aceite um valor genérico */
    modStateNome(event) {
        this.setState({nome: event.target.value.toUpperCase()});
    }

    modStatEmail(event) {
        const {value} = event.target;
        if (value.match(/[@].*[.].*/gi)) alert('E-mail válido!!!');
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
        this.setState({state: value});
    }

    changeHandler(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });
      }

    render() {
        return (
            <form>
            <fieldset>
                <legend>Dados pessoais</legend>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text"
                        name="name"
                        maxLength="40"
                        onChange={this.modStateNome}
                        value={this.state.nome}
                        required
                        />
                </div>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input 
                        type="text"
                        name="email"
                        maxLength="50"
                        onChange={this.modStatEmail}
                        value={this.state.email}
                        required
                        />
                </div>
                <div>
                    <label htmlFor="cpf">CPF: </label>
                    <input 
                        type="text"
                        name="cpf"
                        maxLength="11"
                        onChange={this.modStatCPF}
                        value={this.state.cpf}
                        required
                        />
                </div>
                <div>
                    <label htmlFor="address">Endereço: </label>
                    <input 
                        type="text"
                        name="address"
                        maxLength="200"
                        onChange={this.modStatEnder}
                        value={this.state.address}
                        required
                        />
                </div>
                <div>
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
                </div>
                <label htmlFor="state">Estado: </label>
                <select 
                    type="select"
                    name="state"
                    onChange={this.modStatE}
                    value={this.state.state}
                    required
                    > 
                { Estados.map(uf => <option key={uf}>{uf}</option>) }
                </select>
            </fieldset>
            <fieldset>
                <legend>Dados profissionais:</legend>
                <div>
                Resumo do Currículo:
                <textarea
                    name="resume"
                    maxLength="1000"
                    value={this.state.resume}
                    onChange={this.changeHandler}
                    />
                </div>
                <div>
                Cargo:
                <input
                    type="text"
                    name="role"
                    maxLength="40"
                    value={this.state.role}
                    onChange={this.changeHandler}
                    />
                </div>
                <div>
                Descrição do cargo:
                <textarea
                    name="role_description"
                    maxLength="500"
                    value={this.state.role_description}
                    onChange={this.changeHandler}
                    />
                </div>
          </fieldset>
          <button type="button" onClick={() => this.props.send(this.state)}>
            Enviar
          </button>
        </form>
        );
    }
}

// const mapStateToProps = map => ...

const mapDispatchToProps = (dispatch) => ({
    send: (state) => dispatch(formAction(state)),
});

export default connect(null, mapDispatchToProps)(ReduxForm);
