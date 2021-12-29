import ActionTypes from '../actionTypes';

const addMovieAction = (movie) => {
  return {
    type: ActionTypes.ADD_MOVIE,
    payload: movie,
  };
};

const editMovieAction = (movie) => {
  return {
    type: ActionTypes.EDIT_MOVIE,
    payload: movie,
  };
};

const getMoviesAction = (movies) => {
  return {
    type: ActionTypes.GET_MOVIES,
    payload: movies,
  };
};

const deleteMovieAction = (movieId) => {
  return {
    type: ActionTypes.DELETE_MOVIE,
    payload: movieId,
  };
}

const openModalWindowAction = (params) => {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: params,
  };
};

const closeModalWindowAction = () => {
  return { type: ActionTypes.CLOSE_MODAL };
};

export {
  addMovieAction,
  getMoviesAction,
  deleteMovieAction,
  editMovieAction,
  openModalWindowAction,
  closeModalWindowAction,
};
