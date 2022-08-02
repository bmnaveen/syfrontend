import React from 'react'
import { useState } from 'react';
import axios from "axios"
const SignUp = () => {
  const [user,setUser]=useState({
    Email:"",
    Passcode:"",
    Mobile:"",
    Role:"staff",
    Name:""
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
   await axios.post(`http://localhost:5555/register`,user).then((res)=>{
   
      if(res.data!=false){
          sessionStorage.setItem("type",JSON.stringify(res.data));
          return alert("Sucessfully registerd")
      } 
      return alert("use different credentials")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='signin'>
         <h2>SignUp</h2>
<form action="">
<label  htmlFor="">User name</label>
<br />
    <input onChange={setUserDetailes} id='Name'  type="text" />
    <br />
    <label htmlFor="">Mobile</label>
    <br />
    <input onChange={setUserDetailes} id='Mobile' type="text" />
    <br />
    <label htmlFor="">E-mail</label>
    <br />
    <input onChange={setUserDetailes} id='Email' type="email" />
    <br />
    <label htmlFor="">Password</label>
    <br />
    <input onChange={setUserDetailes} id='Passcode' type="password" />
    <br />
    <label htmlFor="">Role</label>
    <br />
    <select onChange={setUserDetailes} name="" defaultValue={"staff"} id="Role">
        <option value="staff">Staff</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
    </select>
    <br />
    <input onClick={passData} type="submit" />
</form>
    </div>
  )
}

export default SignUp