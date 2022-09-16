import React from 'react'
import './FilterType.css'

type FilterProps={
  type:string,
  name:string[]  
}
const FilterType = ({type,name}:FilterProps) => {
  return (
    <div className='filterType'>
        <h2>{type}</h2>
        <hr></hr>
        <div className='filterName'>
            {name.map((name,key)=>(
                <li key={key}>{name}</li>
            ))}

        </div>
    </div>
  )
}

export default FilterType