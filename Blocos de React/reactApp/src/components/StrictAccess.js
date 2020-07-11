import React from 'react';
// import { Redirect, Route } from 'react-router-dom';

function StrictAccess(props) {
    const {username, password} = props;
    if (username === 'joao' && password === '1234')
        return (<p>Welcome, {username}!</p>)
    else {
        alert("Access Denied");
        //<Redirect to='/' />;
    }
}
export default StrictAccess;