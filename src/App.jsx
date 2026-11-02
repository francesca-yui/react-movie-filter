import { useState } from 'react';
import './App.css';
import { Movies } from './component/Movies';
import { AddMovie } from './component/AddMovie';
import { moviesList } from './data/movieList';

export const App = () => {
  const [movies, setMovies] = useState(moviesList);

  return (
    <>
    <header><h1>Filter movie</h1></header>
    
    <main>
    <Movies
    movies={movies}
    setMovies={setMovies}/>
    <AddMovie
    setMovies={setMovies}/>
    </main>
    </>
  )
};

export default App;
