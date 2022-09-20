import React,{useState,useEffect} from 'react'
import FilterType from './FilterType'
import './Sidebar.css'
import axios from 'axios';
import { Item } from './model';



let category:any[] =[]
let price=['Under 100', 'Under 500','Under 1000']


interface SidebarProps{
  filterByCategory:(event: React.FormEvent<HTMLSelectElement>) => void,
  categoryName:string,
}


const Sidebar = ({filterByCategory,categoryName}:SidebarProps) => {
  const [data,setData]=useState<Item[]>([])
  // const [categoryName,setCategoryName]=useState<string>('')

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
        let res=response.data
       setData(res)
       data.forEach((value)=>{
        if(!category.includes(value.category)){
          category.push(value.category)

        }
       })
       localStorage.setItem('categories', category as never)
       
       
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
      
        
          <div>
          <select
            name="category-list"
            id="category-list"
            onChange={filterByCategory}
          >
            {category?.map((value,index)=>
                <option key={index} value={value}>{value}</option>

           
            )}
            
          </select>
       </div>
        

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