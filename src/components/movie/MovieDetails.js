import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss';
import { useSelector } from 'react-redux';
import { getMovie } from '../../store/selectors';
import { Button } from 'reactstrap';
import { useSearchParams } from 'react-router-dom';

const MovieDetails = ({ movieId }) => {
  const movie = useSelector(getMovie(movieId));
  const [searchParams, setSearchParams] = useSearchParams();

  const handleBackToSearchSubmit = () => {
    const updatedParams = Object.fromEntries(searchParams.entries());
    delete updatedParams['movie'];
    setSearchParams(updatedParams);
  };

  return (
    <div className="movie-details-container">
      <div className="movie-image">
        <img src={movie.poster_path} height="350"/>
      </div>
      <div>
        <div className="movie-title-rating">
          <h2 className="title">{movie.title}</h2>
          <div className="round-rating">{movie.vote_average}</div>
        </div>
        <div className="genres mb-2 text-muted">
          <p>{movie.genres.join(' & ')}</p>
        </div>
        <div className="movie-year-runtime">
          <p>{movie.release_date?.split('-')[0]}</p>
          <p className="movie-runtime">{`${movie.runtime}min`}</p>
        </div>
        <div className="movie-overview mb-2 text-muted">
          <p>{movie.overview}</p>
        </div>
      </div>
      <div>
        <Button
          id="btn-back-to-search"
          className="btn-back-to-search"
          onClick={handleBackToSearchSubmit}
        >
          {'Back to search'}
        </Button>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieDetails;
