import React from 'react';
const MyList = (props) => {
  return (
    <ul>
      {props.children.map((child) => {
        if (child.type && child.type === 'li' ) return child;
        return <li>{child}</li>;
      })}
    </ul>
  )
}
export default MyList;

// Somente com isso no no unordered list: <li>Item Lista no arquivo da Lista</li> acontece isso abaixo
// Como pode ver, o componente MyList recebeu como filho a palavra SUPIMPA, mas ainda não está utilizando-a. Se rodar o programa verá que ela não aparece na tela. Para o componente renderizar o seu filho é necessário chama-ló com o props.children. Adicionando o props.children ao MyList.js o código fica assim:  <li>{props.children}</li>
// Trocando por {props.children} no <li>
// Nada mudou visualmente na aplicação mas, como pode ver, o MyList recebeu um elemento HTML inteiro como filho, props.children. Ele pode receber vários valores distintos como filho, e até mais de um. Vamos passar mais dois elementos ao MyList: um botão e um texto.

// Como pode ter visto, alguns filhos não estão dentro de um elemento <li>. Em função disso, a lista está quebrada. Para arrumar esse problema precisamos mudar um pouco a lógica do elemento MyList: (a trombose toda dentro do ul!!)

// Vejamos o último caso, de quando passamos um outro elemento como filho. Criaremos um componente para substituir o botão que já está sendo passado. Adicionaremos, também, uma nova funcionalidade ao componente App. (Componente ShowButton.js)