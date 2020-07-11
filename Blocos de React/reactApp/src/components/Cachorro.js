import React from 'react';
import '../App.css';

class BusCachorro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: '',
        carregOk: false,
        loadingTextClass: 'DisplayNone',
        imageClass: 'DisplayNone',
        fetchedBreed: '',
        disableFetchBtn: false,
      };
    }


    fetchAPI() {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(resposta => resposta.json())
      .then(
        (json) => {
        this.setState({
          carregOk: true,
          url: json.message,
          msgEstado: json.status,
          loadingTextClass: 'DisplayNone',
          imageClass: 'Display',
          fetchedBreed: json.message.slice(30, json.message.lastIndexOf('/'))
        });
      },
        (erro) => {
        this.setState({
          carregOk: true,
          msgEstado: erro
        });
      })
    }

    componentDidMount() {
      //this.fetchAPI();
    }

    componentDidUpdate() {
      //alert(this.state.fetchedBreed.toUpperCase())
      localStorage.setItem('URL', this.state.url);
      console.log('Atualizou.');
    }

    componentWillUpdate() {
      this.setState({loadingTextClass: 'Display'})
      this.setState({disableFetchBtn: true});
      console.log('Vai atualizar.');
    }

    //shouldComponentUpdate(_, nextState) {
    //  if (nextState.src.includes('terrier')) return false
    //  else return true
   // }

  
    render() {
      const { url, fetchedBreed, imageClass, loadingTextClass } = this.state;
      return (
        <div>
          <p>
            <button 
              onClick={() => this.fetchAPI()} 
              disabled={this.state.disableFetchBtn}>
              Random dog pic
            </button>
          </p>
          <p className={loadingTextClass}>Carregamento...</p>
          <p className={imageClass}>Raça: {fetchedBreed.replace('-',' ').toUpperCase()}</p>
          <img src={url} alt="Cachorreiro" className={imageClass} height='300px'></img>
        </div>)
    }
  }

export default BusCachorro;