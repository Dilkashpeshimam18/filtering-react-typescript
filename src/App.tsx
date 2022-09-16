import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div>
        <Searchbar />
      </div>

    </div>
  );
}

export default App;
