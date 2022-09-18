import React,{useState,useEffect} from 'react'
import './Products.css'
import axios from 'axios'
import { Item } from './model'

interface SidebarProps{
    filterByCategory:() => void,
    category:boolean
  }
const Products = ({filterByCategory,category}:SidebarProps) => {
    const [products,setProducts]=useState<Item[] | undefined >()
    const [searchValue, setSearchValue]= useState<string>('')
    
    useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
        console.log(response.data)
        let data=response.data
        setProducts(data)
        // console.log(products)
    }).catch(error=>{
        console.log(error)
    })

    console.log(searchValue)
    },[])
  return (
    <div>
    <div className='search'>
    <input className='searchInput' value={searchValue}  placeholder='Enter your search value...' onChange={(e)=>setSearchValue(e.target.value)}/>
    <button className='searchButton'>Search</button>
  </div>
    <div className='products'>
        
        {products?.filter((data)=>{//filter display data on condition
            if(searchValue==''){// if searchterm is empty then show all data 
                return data
            }else if(data.title.toLowerCase().includes(searchValue.toLowerCase()) || data.category.toLowerCase().includes(searchValue.toLowerCase())){//if title or category match to search term then return data
                return data
            }else if(category==true){
               return data.category
            }
        }).map((value,key)=>{
          return( 
           
            <div key={value.id} className='product-Card'>
                <img className='product-image' style={{height:'100px', width:'250px'}} src={value.image}></img>
                <div>
                    <span className='product-title'>{value.title}</span>
                </div>
                <div>
                    <span className='product-category'>Category: {value.category} <span className='product-price'>Price: {value.price}</span></span>
                    </div>
            </div>
        )})}
        </div>
        </div>
  )
}

export default Products