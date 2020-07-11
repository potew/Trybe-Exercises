import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItunesItems } from "./Actions";
import AlbumCard from "./AlbumCard";

class iTuneSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchCat: 'musicTrack',
    }
  }

  APIRequest = () => {
    const { fetchItems } = this.props;
    const { searchText, searchCat } = this.state;
    fetchItems(searchText, searchCat);
  };

  render() {
    const { searchText, searchCat } = this.state;
    const { results, loading } = this.props;
    return ( 
      <div>
        <Link to="/">Voltar</Link>
        <label htmlFor="searchbox">Termo de busca</label>
        <input
          name="searchBox"
          type="text"
          placeholder="Ex.: Oasis"
          value={searchText}
          onChange={e => this.setState({ searchText: e.target.value })}
        />
        <select 
          name="mediaType"
          onChange={e => this.setState({ searchCat: e.target.value})}
          value={searchCat}>
          <option value='musicTrack'>Faixa</option>
          <option value='musicArtist'>Artista</option>
          <option value='album'>Álbum</option>
          <option value='musicVideo'>Clipe</option>
          <option value='mix'>Remix</option>
        </select>
        <button onClick={this.APIRequest}>Procurar</button>
        { loading ?
        <h3>Carregando...</h3> :
        results.map((result) => <AlbumCard key={result.trackID} item={result} />) }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  results: state.APISearchReducer.results,
  resultCount: state.APISearchReducer.resultCount,
  loading: state.APISearchReducer.loading,
  error: state.APISearchReducer.error
});

const mapDispatchToProps = (dispatch) => (
  {
    fetchItems: (p1, p2) => dispatch(fetchItunesItems(p1, p2))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(iTuneSearch);