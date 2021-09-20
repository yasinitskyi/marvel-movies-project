import React, {useState, useEffect} from 'react';
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Main } from './layout/Main'
import { Movies } from './components/Movies'
import { Preloader } from './components/Preloader'
import { Search } from './components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=marvel`)
      .then(response => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
      })
  }, []);

  const searchMovies = (str, type) => {
    if(str.trim() !== '') {
      setMovies([]);
      setLoading(true);
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.toLowerCase()}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then((data) => {
          setMovies(data.Search);
          setLoading(false);
        }).catch(err => {
          setLoading(false);
        })
    }
  }


  return (
    <>
      <Header />
      <Main>
        <Search callback={searchMovies}/>
        {loading ? (<Preloader />) : (<Movies movies={movies} />)}
      </Main>
      <Footer />
    </>
  );
}

export default App;
