import React,{useState,useEffect} from 'react'
import FilterType from './FilterType'
import './Sidebar.css'
import axios from 'axios';
import { Item } from './model';



let category=['Technology', 'Clothing', 'Beauty']
let brand=['Apple', 'Samsung', 'Redmi','Lakme', 'Maybelline', 'Zara']
let price=['Under 5,000', 'Rs 5,000- Rs 10,000','Rs 10,000- Rs 20,000','Over 20,000']


const Sidebar = () => {
  const [data,setData]=useState<Item[]>([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
        console.log(response.data)
        let res=response.data
       setData(res)
       console.log(data)
    }).catch(error=>{
        console.log(error)
    })
  },[])
  return (
    <div className='sidebar'>
        <FilterType type='Filter by category' name={category}/>
        <FilterType type='Filter by brand' name={brand}/>
        <FilterType type='Filter by price' name={price}/>


        
    </div>
  )
}

export default Sidebar