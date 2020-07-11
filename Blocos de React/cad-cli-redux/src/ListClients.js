import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteClient } from "./Actions";

class ListClients extends React.Component {
	constructor(props) {
		super(props);
		this.pullClientsList = this.pullClientsList.bind(this);
	}

	pullClientsList(clientsArray) {
		if (clientsArray.length) {
		return clientsArray.map((cliente) => (
			<tr key={cliente.email}>
				<td>{cliente.name}</td>
				<td>{cliente.age}</td>
				<td>{cliente.city}</td>
				<td>{cliente.email}</td>
				<td>
					<button
					type="button"
					onClick={() => this.props.erase(cliente)}
					>
						e[X]cluir
					</button>
				</td>
			</tr>
		));
		}
		else return (<p>Nenhum cliente registrado</p>);
	}

	render() {
		const { username, entries } = this.props;
		if (username.length)
			return (
				<div className='listaClientes'>
					<p>Bem-vindo, {username}.</p>
					<Link to='/newClient'>Novo Cliente</Link>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Idade</th>
							<th>Cidade</th>
							<th>E-mail</th>
						</tr>
					</thead>
					{this.pullClientsList(entries)}
				</div>
			);
			return (
				<div>
					<h2>Login não efetuado</h2>
					<Link to='/login'>Faça-o antes de acessar esta página</Link>
				</div>
			)
		}
}

const mapStateToProps = (state) => ({
	username: state.loginReducer,
	entries: state.clientReducer
});

const mapDispatchToProps = (dispatch) => (
	{
		erase: (evt) => dispatch(deleteClient(evt))
	}
)

export default connect(mapStateToProps, mapDispatchToProps)(ListClients);
