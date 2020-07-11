import React from 'react';
const ShowButton = (props) => {
  const { changeTitle, value } = props;
  return (
    <button type="button" onClick={() => changeTitle(value)}>SHOW</button>
  )
}
export default ShowButton;

// Como pode ver adicionamos uma nova funcionalidade ao componente App, uma função que muda o título. E passamos essa função para dentro do novo componente ShowButton ao clica-ló ele muda o título da nossa lista.