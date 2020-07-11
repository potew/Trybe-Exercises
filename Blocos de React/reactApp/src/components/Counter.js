import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      console.log("Counter: construtor");
    }
  
    componentDidMount() {
      // Aqui devem ser colocadas requisições a APIs por exemplo.
      //console.log("Counter: componentDidMount");
      //this.setState({counter: 10});
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      //console.log("Counter: shouldComponentUpdate", this.state, nextState);
      return true;
    }

    componentDidUpdate(prevProps, prevState) {
      //console.log("Counter: componentDidUpdate", this.state, prevState);
    }
   
    
    render() {
      console.log("Counter: render");
      return (
        <div>
          <p><button onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
            Soma
          </button></p>
          Contador 1: {this.state.counter}
        </div>
      );
    }
  }

export default Counter;