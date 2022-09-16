import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className='search'>
      <input className='searchInput' placeholder='Enter your search value...'/>
      <button className='searchButton'>Search</button>
    </div>
  )
}

export default Searchbar