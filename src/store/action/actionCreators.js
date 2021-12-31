import ActionTypes from '../actionTypes';

const getMoviesAction = (movies) => {
  return {
    type: ActionTypes.GET_MOVIES,
    payload: movies,
  };
};

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
  getMoviesAction,
  openModalWindowAction,
  closeModalWindowAction,
};
