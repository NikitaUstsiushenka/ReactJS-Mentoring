import { getMoviesAction, openModalWindowAction } from './actionCreators';
import { stringify } from 'qs';
import { DEFAULT_PAGE_SIZE, ModalWindowType } from '../../utils/utils';

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
    .then(response => {
      if (response.status === 201) {
        dispatch(getMovies({ limit: DEFAULT_PAGE_SIZE }));
        dispatch(openModalWindowAction({
          type: ModalWindowType.SUCCESS_MODAL,
          message: 'The movie has been added to database successfully',
        }));
      }
    })
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
    .then(response => {
      if (response.status === 200) {
        dispatch(getMovies({ limit: DEFAULT_PAGE_SIZE }));
        dispatch(openModalWindowAction({
          type: ModalWindowType.SUCCESS_MODAL,
          message: 'The movie has been updated in database successfully',
        }));
      }
    })
  };
};

const deleteMovie = (movieId) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/${movieId}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (response.status === 204) {
        dispatch(getMovies({ limit: DEFAULT_PAGE_SIZE }));
        dispatch(openModalWindowAction({
          type: ModalWindowType.SUCCESS_MODAL,
          message: 'The movie has been deleted from database successfully',
        }));
      }
    });
  };
};

export {
  getMovies,
  addMovie,
  deleteMovie,
  editMovie,
};
