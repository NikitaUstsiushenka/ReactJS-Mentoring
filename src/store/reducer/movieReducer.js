import { v4 } from 'uuid';
import ActionTypes from '../actionTypes';

const defaultState = {
  movies: []
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
    default:
      return state;
  }
}

export const addMovie = (movie) => {
  return {
    type: ActionTypes.ADD_MOVIE,
    payload: movie,
  };
};
