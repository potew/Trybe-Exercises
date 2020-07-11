// Arquivo Reddit.js - Exercício da Aula 18.2
import React, { useState, useEffect } from 'react';

const Reddit = () => {
  const [ selectedSub, setSelectedSub ] = useState('aspergers');
  const [ loadingState, setLoadingState ] = useState(true);
  const [ error, setError ] = useState('');
  const [ apiResults, setApiResults ] = useState([]);

  // Só atualiza quando selectedSub muda, que só acontece ao selecionar algo na lista.
  useEffect(() => {
    fetch(`https://www.reddit.com/r/${selectedSub}.json`)
      .then(res => res.json())
      .then(json => setApiResults(json.data.children))
      .catch((err) => setError(err));
    setLoadingState(false);
  }, [selectedSub]);

  return (
    <div>
      <p>Selecione uma subreddit para exibir os assuntos</p>
      <select
        onChange={(event) => setSelectedSub(event.target.value)}
        value={selectedSub}
      >
        <option value='aspergers'>Aspies</option>
        <option value='reactjs'>ReactJS</option>
        <option value='frontend'>Front-End</option>
      </select>
      { loadingState ?
      <p>Loading</p> : error ||
      apiResults.map((item) => <li key={item.data.id}>{item.data.title}</li>)
      }
    </div>
  );
  }

export default Reddit;
