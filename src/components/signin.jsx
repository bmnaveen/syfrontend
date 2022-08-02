import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate=useNavigate()
  const [user,setUser]=useState({
    Email:"",
    Passcode:""
  })

  const setUserDetailes=(e)=>{
   let  {id,value}=e.target;

   setUser({...user,[id]:value})
  }

  const passData=async (e)=>{
    e.preventDefault()
    
    for(let x in user){
      if(user[x].length<=0){
        return alert("Empty fields")
      }
    }
   await axios.post(`http://localhost:5555/login`,user).then((res)=>{
    
      if(res.data!==false) {
         sessionStorage.setItem("type",JSON.stringify(res.data));
          alert("Sucessfully signedIn")
          return navigate("/")
      }
      
      return alert("use different credentials")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='signin'>
      <h2>SignIn</h2>
<form action="">
    <label htmlFor="">E-mail</label>
    <br />
    <input id='Email' onChange={setUserDetailes} type="email" />
    <br />
    <label htmlFor="">Password</label>
    <br />
    <input onChange={setUserDetailes} type="password" id='Passcode'/>
    <br />
    <input onClick={passData} type="submit" />
</form>
    </div>
  )
}

export default SignIn