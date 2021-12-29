import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MovieList from './components/movie/MovieList';
import ErrorBoundary from './components/error/ErrorBoundary';
import { useSelector } from 'react-redux';
import ModalWindow from './components/modalWindow/ModalWindow';

function App() {
  const { movieReducer, modalWindowReducer } = useSelector(state => state);

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <MovieList movies={movieReducer.movies} />
        <ModalWindow type={modalWindowReducer.type} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
