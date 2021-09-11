import React from 'react';
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Main } from './layout/Main'
import { Movies } from './components/Movies'
import { Preloader } from './components/Preloader'
import { Search } from './components/Search'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=e6c5beaa&s=marvel')
      .then(response => response.json())
      .then(data => this.setState(() => ({ movies: data.Search }), () => console.log(this.state.movies)))
  }

  searchMovies = (str) => {
    this.setState({ movies: [] })
    fetch(`http://www.omdbapi.com/?apikey=e6c5beaa&s=${str.toLowerCase()}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    const {movies} = this.state;
    return (
      <>
        <Header />
        <Main>
          <Search callback={this.searchMovies} />
          {movies.length ? (<Movies movies={movies} />) : (<Preloader/>)}
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;