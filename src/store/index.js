import { applyMiddleware, combineReducers, createStore } from 'redux';
import modalWindowReducer from './reducer/modalWindowReducer';
import movieReducer from './reducer/movieReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  modalWindowReducer,
  movieReducer,
});

export default createStore(reducer, applyMiddleware(thunk))
