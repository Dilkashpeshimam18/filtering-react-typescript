import React from 'react';
import './App.css';
import Products from './components/Products';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <div className='container1'>
      <Sidebar />

      </div>
      <div className='container2'>
        {/* <Searchbar /> */}
        <Products />
      </div>

    </div>
  );
}

export default App;
