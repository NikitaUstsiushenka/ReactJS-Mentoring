import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MovieList from './components/movie/MovieList';
import ErrorBoundary from './components/error/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
