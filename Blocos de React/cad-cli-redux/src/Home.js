import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
		<header>
			<h2>Página inicial - exercícios de React/Redux</h2>
			<Link to="/login">Login</Link>
			<Link to="/ituneSearch">iTunes API</Link>
			<Link to="/about">Sobre</Link>
		</header>
  );
}

export default Home;
