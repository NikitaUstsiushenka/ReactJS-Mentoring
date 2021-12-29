import { addMovieAction, deleteMovieAction, editMovieAction, getMoviesAction } from './actionCreators';

const getMovies = (params) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => dispatch(getMoviesAction(json.data)));
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
    .then(json => dispatch(addMovieAction(json)));
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
    .then(json => dispatch(editMovieAction(json)));
  };
};

const deleteMovie = (movieId) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/${movieId}`, {
      method: 'DELETE'
    })
    .then(() => dispatch(deleteMovieAction(movieId)));
  };
};

export {
  getMovies,
  addMovie,
  deleteMovie,
};
