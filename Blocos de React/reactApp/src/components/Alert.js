import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  //const { hideComponent, contentTitle, content } = props; - no item 2
  const { children, hideComponent, timeSeconds } = props // children no lugar de { title, content, timeSeconds }
  setTimeout(() => hideComponent(), timeSeconds*1000);
  return (
    <div className='Alert'>
        {children}
    </div>
  )
}

//      No ítem 1, isso ficava dentro do return e era alimentado pelos props:
//      <h1>{title}</h1>
//      <p>{content}</p>

// Esta parte é opcional
Alert.defaultProps = {
    title: 'Xabrau',
    content: 'Braxau',
};

Alert.propTypes = {
    hideComponent: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeSeconds: PropTypes.number,
};

export default Alert;

// 2. Usando o código anterior, refatore o aplicação para que o Alert funcione com qualquer informação. O componente deverá receber, como filho, um objeto com a estrutura {title: "Algum título", content: "Algum conteúdo", timeSeconds: 3 }. O filho é quem definirá o tempo que o modal permanece na tela com o valor da chave timeSeconds. Use PropTypes para realizar a validação do formato do objeto.