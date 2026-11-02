import { useState } from 'react';
import './AddMovies.css';
import { IcofontUiAdd } from "./icon/IcofontUiAdd";

export const AddMovie = props => {
  const [ newMovie, setNewMovie ] = useState ({
    title: '',
    genre: '',
  });

  const handleFormChange = e => {
    const value = e.target.value;

    setNewMovie(
      currentmovie => ({
        ...currentmovie,
        [e.target.name] : value
      }))
  };

  return (
  <form onSubmit = { e => {
    e.preventDefault();

    props.setMovies(currentMovies => 
    currentMovies.concat(newMovie));

    setNewMovie({
      title: '',
      genre: '',
    });
    }}>

    <input 
    type="text"
    name="title"
    placeholder='New title'
    value={newMovie.title}
    onChange={handleFormChange}
    />

    <input 
    type="text"
    name="genre"
    placeholder='New genre'
    value={newMovie.genre}
    onChange={handleFormChange}
    />

    <button type="submit">
      <IcofontUiAdd/>add movie</button>
  </form>
  );
};

export default AddMovie;

