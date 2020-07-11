import React from "react";
import { userDB } from './Data';
import { userValidated } from "./Actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			txtUser: '',
			txtPass: ''
		};
		this.validaUsuario = this.validaUsuario.bind(this);
		this.stHandler = this.stHandler.bind(this);
	}

	validaUsuario() {
		const { userValidated } = this.props;
		const { txtPass, txtUser } = this.state;
		const usuario = userDB.find((user) => user.username === txtUser);
		if (usuario && usuario.pass === txtPass) {
			userValidated(usuario.username);
		}
		else usuario ? alert('Senha incorreta') : alert('Usuário não encontrado');
	}
	
	stHandler(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div>
				<input
					type='text'
					name='txtUser'
					placeholder='Usuário'
					onChange={this.stHandler}
					value={this.state.txtUser}
				/>
				<input
					name='txtPass'
					type='password'
					placeholder='Senha'
					onChange={this.stHandler}
					value={this.state.txtPass}
				/>
				<button 
					onClick={() => this.validaUsuario()}
					disabled={!this.state.txtUser}
				>Acesso
				</button>
				<Link to='/listClients'>Link</Link>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => (
	{
		userValidated: (user) => dispatch(userValidated(user))
	}
);

// O null presente no connect é necessário pois ele entende que o primeiro parâmetro deve ser uma função mapStateToProps.
export default connect(null, mapDispatchToProps)(Login);
