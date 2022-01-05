import { getMoviesAction } from './actionCreators';
import { stringify } from 'qs';

const getMovies = (params) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies?${stringify(params)}`)
    .then(response => response.json())
    .then(json => dispatch(getMoviesAction(json)));
  };
};

const addMovie = (movie) => {
  return (dispatch) => {
    fetch('http://localhost:4000/movies', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(() => dispatch(getMovies()));
  };
};

const editMovie = (movie) => {
  return (dispatch) => {
    fetch('http://localhost:4000/movies', {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(() => dispatch(getMovies()));
  };
};

const deleteMovie = (movieId) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/${movieId}`, {
      method: 'DELETE'
    })
    .then(() => dispatch(getMovies()));
  };
};

export {
  getMovies,
  addMovie,
  deleteMovie,
};
