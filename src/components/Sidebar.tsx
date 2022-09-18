import React,{useState,useEffect} from 'react'
import FilterType from './FilterType'
import './Sidebar.css'
import axios from 'axios';
import { Item } from './model';



let category:any[]=[]
let brand=['Apple', 'Samsung', 'Redmi','Lakme', 'Maybelline', 'Zara']
let price=['Under 100', 'Under 500','Under 1000']

interface SidebarProps{
  filterByCategory:() => void
}
const Sidebar = ({filterByCategory}:SidebarProps) => {
  const [data,setData]=useState<Item[]>([])
  // const [category,setCategory]= useState<string>('')
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
        console.log(response.data)
        let res=response.data
       setData(res)
       data.forEach((value)=>{
        if(!category.includes(value.category)){
          category.push(value.category)

        }
       })
       console.log(category)
       
       
       
    }).catch(error=>{
        console.log(error)
    })
  },[])
  return (
    <div className='sidebar'>
           <div className='filterType'>
            <h2>Filter by category</h2>
        <hr></hr>
        <div className='filterName'>
       {category.map((value,index)=>{
        return(
          <li onClick={filterByCategory} key={index}>{value}</li>
        )
       })}

        </div>
    </div>
    <div className='filterType'>
      <h2>Filter by price</h2>
        <hr></hr>
        <div className='filterName'>
          {price.map((value,index)=>{
            return(
              <li key={index}>{value}</li>
            )
          })}
          

        </div>
    </div>
    
   
          </div>

        )
      


        
  
}

export default Sidebar