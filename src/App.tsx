import React,{useState,useEffect} from 'react';
import './App.css';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import { Item } from './components/model';

function App() {
  const [data,setData]=useState<Item[]>([])
  const [product,setProduct]=useState<Item[]>([])

  const [category,setCategory]=useState<boolean>(false)
  const [categoryName,setCategoryName]=useState<string>('')
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
        // console.log(response.data)
        let res=response.data
       setData(res)
       setProduct(res)

       console.log(data)
       
       
    }).catch(error=>{
        console.log(error)
    })
        console.log(categoryName)
        console.log('render')

  },[categoryName])

  //parent category function


  //filter product
  const filterByCategory=(event: React.FormEvent<HTMLSelectElement>)=>{
    event.preventDefault();
    const element = event.target as HTMLSelectElement;
setCategoryName(element.value)
var cat=true
setCategory(cat)
const newProduct= product.filter((newVal)=>{
  return newVal.category==categoryName
})
setProduct(newProduct)
  }


  return (
    <div className="app">
      <div className='container1'>
      <Sidebar  categoryName={categoryName} filterByCategory={filterByCategory} />

      </div>
      <div className='container2'>
        {/* <Searchbar /> */}
        <Products data={product} category={category} categoryName={categoryName} filterByCategory={filterByCategory} />
      </div>

    </div>
  );
}

export default App;
