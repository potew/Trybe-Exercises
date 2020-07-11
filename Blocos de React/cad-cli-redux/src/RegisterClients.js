import React from "react";
import { addClient } from "./Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class RegClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      city: '',
      email: ''
    }
  }

  insertClient = () => {
    const { name, age, city, email } = this.state;
    this.props.addClient({ name, age, city, email });
    this.setState({
      name: '',
      age: '',
      city: '',
      email: '',
    });
  };

  render() {
    const { name, age, city, email } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={e => this.setState({ age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={e => this.setState({ city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <button onClick={this.insertClient}>Registrar Cliente</button>
        <Link to="/listClients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
	{
		addClient: evt => dispatch(addClient(evt)),
	}
);

export default connect(null, mapDispatchToProps)(RegClient);
