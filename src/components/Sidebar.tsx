import React from 'react'
import FilterType from './FilterType'
import './Sidebar.css'


let category=['Technology', 'Clothing', 'Beauty']
let brand=['Apple', 'Samsung', 'Redmi','Lakme', 'Maybelline', 'Zara']
let price=['Under 5,000', 'Rs 5,000- Rs 10,000','Rs 10,000- Rs 20,000','Over 20,000']
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <FilterType type='Filter by category' name={category}/>
        <FilterType type='Filter by brand' name={brand}/>
        <FilterType type='Filter by price' name={price}/>


        
    </div>
  )
}

export default Sidebar