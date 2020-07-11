import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Favs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            caixinha: 'Piano'
        };
    
    }

    render () {
        const { children, lista } = this.props;
        const { isClicked, caixinha } = this.state;
        return (
            <div>
                <span>{children}</span>
                <div className="Caixeta" onClick={ () => this.setState({isClicked: !isClicked}) }> {caixinha} </div>
                <div className={ isClicked ? 'DropDownList' : 'DropDownList-Disabled'}>
                    { lista.map(elemento => 
                        <li key={elemento.id} onClick={
                            () => this.setState({caixinha: elemento.item})}>{elemento.item}</li>)
                        }
                </div>
            </div>
            )
    }
}

Favs.defaultProps = {
    children: 'Lista ainda não carregada...!'
};

Favs.propTypes = {
    children: PropTypes.string,
    lista: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        item: PropTypes.string,
    })),
};

export default Favs;