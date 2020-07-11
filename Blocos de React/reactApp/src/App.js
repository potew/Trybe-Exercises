// Renomeie este arquivo para App.js e o outro para outro nome para rodá-lo novamente.

import './App.css';
import React from 'react';
import { Provider } from "react-redux";
import { Switch, Route, Link } from 'react-router-dom';

import List from './Redux/List';
import store from './Redux/store';
import Home from './components/Home';
import Favs from './components/FavList'
import About from "./components/About";
import Alert from './components/Alert';
import Users from "./components/Users";
import Image from './components/Image';
import Reddit from './components/Reddit';
import Button from './components/Button';
import MyList from './components/MyList';
import FormRedux from './Redux/FormRedux'
import Counter from './components/Counter';
import BotTexto from './components/Buttons';
import InputsList from './Redux/InputsList';
import NameForm from './components/NameForm';
import Pictures from './components/Pictures';
import DisplayInfo from './Redux/DisplayInfo';
import ColorGrid from './components/ColorGrid';
import BusCachorro from './components/Cachorro';
import CounteHook from './components/CounteHook';
import ShowButton from './components/ShowButton';
import Formulario from './components/Formulario';
import ArrImagens from './components/ArrayOfPics';
import StrictAccess from './components/StrictAccess';
import CounterDisplay from './components/CounterDisplay';

const lishta = [
  {id: 1, item: 'Piano'},
  {id: 2, item: 'Gatos'},
  {id: 3, item: 'Chuva'},
  {id: 4, item: 'Vento'},
  {id: 5, item: 'Elevadores'},

];

// A função App() é o elemento mais simples do React. Fazer só com function App() quando for mais simples.
const task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
// A classe App é um componente que extende o componente React. Dessa forma, ele tem acesso a todos os recursos do React, como por exemplo, estados.
class App extends React.Component {
  constructor(props) {
    super(props)

    this.stHandler = this.stHandler.bind(this);

    this.state = {
      counter: 0,
      showModal: false,
      isDisabledBtnModal: false,
      isDisabledBtnDog: false,
      mountDog: false,
      title: 'Minha Lista de Componentes',
      user: 'xa',
      pass: 'blau'
      };
    }

    stHandler(event, name) {
      const { value } = event.target;
      this.setState({ [name]: value });
    }
  
    changeTitle = (value) => {
      this.setState({ title: value })
    }
    
    changeShowComponent = () => {
      this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisabledBtnModal: !state.isDisabledButton
      }
    ))
  }

  render() {
    const tasks = ['Lavar a louça','Imposto de renda','Adiantar a teoria','AwlAo vivo','Resolver outros pepinos'];
    return (
      <div className="App">
        <h2>Exercícios de React referentes aos blocos 12 a 15!!</h2>
        User: <input type="text" onChange={(evt) => this.stHandler(evt, 'user')}></input>
        Password: <input type="text" onChange={(evt) => this.stHandler(evt, 'pass')}></input>
        <ul>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/users/1"> Users </Link>
          <Link to="/reddit"> Exercício da API do Reddit</Link>
          <Link to="strict-access">Strict Access</Link>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/reddit" component={Reddit} />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning"/>} />
          <Route path="/strict-access" render={(props) => 
            <StrictAccess {...props} username={this.state.user} password={this.state.pass}/>} />
        </Switch>
        <Formulario />
        <h3>Teoria da aula 17.2 - React com Redux p1</h3>
        <Provider store={store}>
          {/* O provedor provém o estado da aplicação para os 2 componentes abaixo!! */}
          <InputsList />
          <List />
          <h3>Teoria da aula 17.3 - React com Redux na prática</h3>
          <FormRedux />
          <DisplayInfo />
        </Provider>
        <BotTexto />
        <p>Contador 1 - Lógica/estado no componente de classe (Teoria aula 14.2 - ciclo de vida de componentes)</p>
        <Counter />
        <p>Contador 2 - Lógica/estado direto no App.js e CounterDisplay num arquivo separado</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
        <p>Exercícios aula 18.2</p>
        <CounteHook />
        <p>Exercício da aula 14.2</p>
        <BusCachorro />
        <p>Teoria aula  da aula 18.2</p>
        <ColorGrid />
        <p>Form de nome da aula 13.3</p>
        <NameForm />
        <h2>Minha Lista de Componentes (Teoria da aula 14.1)</h2>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <Pictures>
            {ArrImagens}
          </Pictures>
          <ShowButton changeTitle={this.changeTitle} value='Título Show' />
        </MyList>
        <p>Começou <code>a</code> ventar...</p>
        <Button content="Clique aqui" isDisable={this.state.isDisabledBtnModal}
          showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
        <Alert hideComponent={this.changeShowComponent} timeSeconds="4">
                <h1>Modal do segundo exercício</h1>
                <p>Coloque qq coisa aqui</p>
                <p>Observe que tudo que for passado entre os 'Alert' será contado como children</p>
                <p>E dá para usar os parâmetros normalmente dentro do primeiro Alert!!</p>
        </Alert>
        }
        <Favs lista={lishta}>
            <div>Isto e o de baixo são children</div>
            <h2>Lista de itens excelentes que ninguém sequer imagina em gosta</h2>
        </Favs>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
        <h3>Exercício 1 - um dos primeiros de React, da aula 12.1</h3>
        { task('Fazer exercícios de Hello World') }
        { tasks.map(tarefa => task(tarefa)) }
      </div>
    );
  }
}

export default App;

//import React from 'react';
/*<img
              height="100"
              src="https://course.betrybe.com/images/logo_white.png"
              alt="Logo da Trybe"
              legenda="Lista feita na Trybe"
/> */

/* Estava assim antes da 2:
<Alert
    hideComponent={this.changeShowComponent}
    contentTitle="Modal"
    content="Coloque qualquer coisa aqui."
/> */