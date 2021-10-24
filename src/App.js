import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Search from './components/Search';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Counter />
        <Search />
      </header>
    </div>
  );
}

export default App;
