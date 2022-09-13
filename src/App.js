import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MovieList from './components/movie/MovieList';
import ErrorBoundary from './components/error/ErrorBoundary';
import { useSelector } from 'react-redux';
import ModalWindow from './components/modalWindow/ModalWindow';

function App() {
  const { type } = useSelector(state => state.modalWindowReducer);

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <MovieList />
        {type && <ModalWindow type={type} />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
