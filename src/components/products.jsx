import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate=useNavigate();
  let k=JSON.parse(sessionStorage.getItem("type"));
 let l=k?.token
 
useEffect(()=>{

 
  
  if(!k){
   return navigate("/signin")
  }


})

    const [product,setProduct]=useState({
        Name:"",
        Price:"",
        Description:"",
        Count:"",
      })
    
      const setProductDetailes=(e)=>{
       let  {id,value}=e.target;
    
       setProduct({...product,[id]:value})
      }
      const config = {
        headers: { Authorization: `Bearer ${l}` }
        
    };
      const passData=async (e)=>{
        e.preventDefault()
        for(let x in product){
          if(product[x].length<=0){
            return alert("Empty fields")
          }
        }
        
       await axios.post(`http://localhost:5555/addproduct`,product,config).then((res)=>{
          console.log(res.data)
            return alert(res.data)
          
        }).catch((err)=>{
          console.log(err)
        })
      }
      return (
        <div className='signin'>
           <h2>Add Product</h2>
    <form action="">
    <label  htmlFor="">Name</label>
    <br />
        <input onChange={setProductDetailes} id='Name'  type="text" />
        <br />
        <label htmlFor="">Price</label>
        <br />
        <input onChange={setProductDetailes} id='Price' type="number" />
        <br />
        <label htmlFor="">Description</label>
        <br />
        <input onChange={setProductDetailes} id='Description' type="text" />
        <br />
        <label htmlFor="">Count</label>
        <br />
        <input onChange={setProductDetailes} id='Count' type="number" />
        <br />
        <input onClick={passData} type="submit" />
    </form>
        </div>
      )
    }
    
    export default Products