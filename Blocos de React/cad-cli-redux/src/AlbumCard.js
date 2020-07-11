import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class AlbumCard extends React.Component {
  render() {
    const { 
      artistName,
      artworkUrl100,
      collectionName,
      previewUrl,
      releaseDate,
      trackName,
      trackNumber,
      trackCount,
      trackViewUrl
     } = this.props.item;
    return (
      <div className="album-card">
        <h4>Artista: {artistName}</h4>
        <h5>Título: {trackName}</h5>
        <img className="album-image" alt="Album Cover" src={artworkUrl100} />
        <a href={previewUrl}>Previsualizar</a>
        <a href={trackViewUrl}>Ver na loja da Apple</a>
        <h5>Faixa número {trackNumber} de {trackCount} no Album {collectionName}</h5>
        <h5>Data de lançamento: {releaseDate.toLocaleString()}</h5>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  item: PropTypes.shape({
    collectionName: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    trackNumber: PropTypes.number.isRequired,
    trackCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default AlbumCard;
