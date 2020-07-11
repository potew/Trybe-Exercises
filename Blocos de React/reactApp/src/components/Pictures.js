import React from 'react';
import PropTypes from 'prop-types'

// Para fixar, adicione um novo componente como filho de App, esse componente deve receber alguns valores: uma imagem, uma propriedade alt para o texto alternativo, sua altura e uma legenda. Como no exemplo abaixo.

const Pictures = (props) => {
    const filhos = props.children;
    return (
    <div>
        {/*console.log(props.children[1].props)*/}
        {filhos}
    </div>
    )
}
export default Pictures;

/* Parte 2 - Adicione ao componente Picture uma checagem de tipos da seguinte forma:
    1. Acrescente uma prop alt e garanta que ela seja uma string obrigatória;
    2. Acrescente uma prop height e garanta que ela seja um number, e adicione um valor default para ela de 400;
    3. Garanta que a prop children da imagem seja obrigatória;
    4. Crie um elemento PicturesList que receba, na prop children, uma array de Pictures e as renderize dentro de uma lista. Faça a checagem de tipos de children. Esse exercício é para rever um pouco o conteúdo de aulas passadas também! O elemento precisará ocupar a posição de Pictures no componente App.

    Obs.: necessário instalar o prop-types com npm install --save prop-types antes de rodar os comandos.
*/

Pictures.propTypes = {
    alt: PropTypes.string,
    height: PropTypes.number,
    filho: PropTypes.element.isRequired
};

Pictures.defaultProps = {
    height: 400
};