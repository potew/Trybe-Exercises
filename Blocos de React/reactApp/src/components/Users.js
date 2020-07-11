// arquivo Users.js
import React from 'react';

function Users(props) {
    const {greetingMessage} = props;
    const userID = props.match.params.id;
    return (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, user no. {userID} this is my awesome Users component </p>
  </div>
    );
}
export default Users;

/* Essa gambiarra Lupita-tier também funcionava
import React from 'react';

const Users = ({ greetingMessage = 'Hi There' }) => (
  <div> [...]
*/