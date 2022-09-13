import ActionTypes from '../actionTypes';

const defaultState = {
  movies: [],
  showMovieDetails: false,
};

export default function movieReducer(state = defaultState , action) {
  switch (action.type) {
    case ActionTypes.ADD_MOVIE:
      return state;
    case ActionTypes.EDIT_MOVIE:
      return state;
    case ActionTypes.DELETE_MOVIE:
      return state;
    case ActionTypes.GET_MOVIES:
      return {...state, movies: action.payload};
    case ActionTypes.OPEN_MOVIE_DETAILS:
      return {...state, showMovieDetails: true};
    default:
      return state;
  }
}
