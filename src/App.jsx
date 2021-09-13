import React from 'react';
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Main } from './layout/Main'
import { Movies } from './components/Movies'
import { Preloader } from './components/Preloader'
import { Search } from './components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=marvel`)
      .then(response => response.json())
      .then(data => this.setState(() => ({movies: data.Search, loading: false}), () => console.log(this.state.movies)))
  }

  searchMovies = (str, type) => {
    if(str.trim() !== '') {
      this.setState({movies: [], loading: true})
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str.toLowerCase()}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        <Header />
        <Main>
          <Search callback={this.searchMovies}/>
          {loading ? (<Preloader />) : (<Movies movies={movies} />)}
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
