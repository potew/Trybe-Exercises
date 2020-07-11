import React from 'react';

class CounterDisplay extends React.Component {
    // Impede que a rendizericação seja feita  os números de 13 a 15.
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.value > 12 && nextProps.value < 16) return false;
      return true;
    }
  
    render() {
      return <div> Contador 2: {this.props.value}</div>;
    }
  }

export default CounterDisplay;
