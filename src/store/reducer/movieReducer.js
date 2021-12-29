import { v4 } from 'uuid';
import { Tabs } from '../../utils/utils';
import ActionTypes from '../actionTypes';

let movies = [
  {
    id: v4(),
    url: 'test',
    title: 'Pulp Fiction',
    genre: 'Horror',
    releaseDate: '1999-01-01',
    runtime: 180,
    rating: '7.8',
    overview: 'Nice!'
  },
  {
    id: v4(),
    url: 'test',
    title: 'Bohemian Rhapsody',
    genre: 'Crime',
    releaseDate: '2003-01-01',
    runtime: 180,
    rating: '7.8',
    overview: 'Nice!'
  }
];

const defaultState = {
  movies: movies
};

const editMovie = (movie) => {
  movies = movies.filter((movieItem) => movieItem.id !== movie.id);
  movies.push(movie);
};
const deleteMovie = (movieId) => movies = movies.filter((movie) => movie.id !== movieId);

export default function movieReducer(state = defaultState , action) {
  switch (action.type) {
    case ActionTypes.ADD_MOVIE:
      return {...state, movies: [...state.movies, {...action.payload, id: v4()}]};
    case ActionTypes.EDIT_MOVIE:
      editMovie(action.payload);
      return {...state, movies};
    case ActionTypes.DELETE_MOVIE:
      deleteMovie(action.payload);
      return {...state, movies};
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
