import './Movie.css';

export const Movies = props => (
  <ul>
    {props.movies.map(movie => (
      <li key={movie.title}>
      <h2 className="title">{movie.title}</h2>
      <p className="genre">{movie.genre}</p>
    </li>
    ))}
  </ul>
);

export default Movies;