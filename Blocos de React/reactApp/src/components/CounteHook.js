import React, { useState } from "react";

const initValues = {
  cx1: 0,
  cx2: 0,
  cx3: 0,
}

const CounteHook = () => {
  const [ cont, setCont ] = useState(0);
  const [ valores, setValores ] = useState(initValues);
  const { cx1, cx2, cx3 } = valores;

  return (
    <div>
      <p>Contador 3 - Componente funcional com hook para fazer a mesma coisa</p>
      <button onClick={() => setCont(cont + 1)}>Soma</button>
      <p> Contador 3: {cont}</p>
      <input
        type='number'
        onChange={(event) => setValores({ cx1: Number(event.target.value), cx2, cx3 })}
        value={cx1}>
      </input>
      <input
        type='number'
        onChange={(event) => setValores({ cx2: Number(event.target.value), cx1, cx3 })}
        value={cx2}>
      </input>
      <input
        type='number'
        onChange={(event) => setValores({ cx3: Number(event.target.value), cx1, cx2 })}
        value={cx3}>
      </input>
      Soma das 3: {cx1 + cx2 + cx3}
    </div>
    );
  }

export default CounteHook;
