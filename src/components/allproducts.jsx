import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Allproducts = () => {
  const navigate=useNavigate();
  let k=JSON.parse(sessionStorage.getItem("type"));
 let l=k?.token
  const [allProducts,setAllProducts]=useState([]);

  useEffect(()=>{

    if(!k){
      return navigate("/signin")
     }

    getProduct();
  },[])

  const config = {
    headers: { Authorization: `Bearer ${l}` }
    
};
  const getProduct=()=>{
    axios.get("http://localhost:5555/product",config).then((res)=>{
      
      setAllProducts(res.data)
    }).catch((err)=>{
      console.log(err)
      alert(err.response.data)
    })
  }
  return (
    <div className='grid-gap'>
      {
        allProducts.map((e)=>{
          return <div>
            <p>Name:{e.Name}</p>
            <p>Price:{e.Price}</p>
            <p>Description:{e.Description}</p>
            <button>Edit</button>
          </div>
        })
      }
    </div>
  )
}

export default Allproducts