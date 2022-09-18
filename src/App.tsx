import React,{useState,useEffect} from 'react';
import './App.css';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import { Item } from './components/model';

function App() {
  const [data,setData]=useState<Item[]>([])
  const [category,setCategory]=useState<boolean>(false)
  // const [category,setCategory]= useState<string>('')
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
  const filterByCategory=()=>{
  data.filter((value)=>{
console.log(value.category)  })
  setCategory(true)
  }
  return (
    <div className="app">
      <div className='container1'>
      <Sidebar filterByCategory={filterByCategory} />

      </div>
      <div className='container2'>
        {/* <Searchbar /> */}
        <Products category={category} filterByCategory={filterByCategory} />
      </div>

    </div>
  );
}

export default App;
