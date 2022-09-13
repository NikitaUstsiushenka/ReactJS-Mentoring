import ActionTypes from '../actionTypes';

const defaultState = {
  showModal: false,
  type: undefined,
  movieId: undefined,
  message: undefined,
};

export default function modalWindowReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        type: action.payload.type,
        movieId: action.payload.movieId,
        message: action.payload.message,
      };
    case ActionTypes.CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
}
