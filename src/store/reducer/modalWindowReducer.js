import ActionTypes from '../actionTypes';

const defaultState = {
  showModal: false,
  type: '',
};

export default function modalWindowReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        type: action.payload.type,
        movieId: action.payload.movieId
      };
    case ActionTypes.CLOSE_MODAL:
      return {...state, showModal: false};
    default:
      return state;
  }
}
