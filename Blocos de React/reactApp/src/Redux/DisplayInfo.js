import React from "react";
import { connect } from "react-redux";

function DisplayInfo(props) {
    const {
        name,
        email,
        cpf,
        address,
        city,
        state,
        home_type,
        resume,
        role,
        role_description,
    } = props.information;

    return (
        <div>
          <h2>Informações:</h2>
          <p>{name}</p>
          <p>{email}</p>
          <p>{cpf}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{home_type}</p>
          <p>{resume}</p>
          <p>{role}</p>
          <p>{role_description}</p>
        </div>
    )
}

// A função mapStateToProps, auto-descritiva, mapeia as entidades armazenadas nos estados para uma props.
// Note que as estruturas dos métodos mapStateToProps e mapDispatchToProps sempre serão as mesmas, o que irá mudar são as propriedades que vamos acessar ou actions que vamos disparar.

const mapStateToProps = (state) => (
    { information: state }
);

export default connect(mapStateToProps)(DisplayInfo);
