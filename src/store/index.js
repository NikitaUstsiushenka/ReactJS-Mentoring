import { combineReducers } from 'redux';
import modalWindowReducer from './reducer/modalWindowReducer';
import movieReducer from './reducer/movieReducer';

export default combineReducers({
  modalWindowReducer,
  movieReducer,
});
