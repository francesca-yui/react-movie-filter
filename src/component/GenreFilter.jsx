import { useState } from 'react';
import './GenreFilter.css';
import { movies } from '../data/movieList';


export const GenreFilter = props => {
  return (
    <>
    <section>
      <ul> {movies.filter( movie => movie.genre.toLowerCase().includes(filter.toLowerCase())).map(e => (
        <li key={e.title}></li>
      ))}
      </ul>
    </section>
    </>
  );
};

export default GenreFilter;