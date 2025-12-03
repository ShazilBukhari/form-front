import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [form, setform] = useState({email:"",password:""})

  const handleChange=(e)=>{
    const {name,value}=e.target
    setform(prev=>({...prev,[name]:value}))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
     const res = await fetch("https://form-6f4b.onrender.com/auth/signin",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(form)
    })
    const data = await res.json();
    if(res.ok){
      console.log("SignIn Successfull",data)
      toast('SignIn Successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type:"success"
      // transition: Bounce,
      });
    }else{
      toast('Invalid Password!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type:"error"
      // transition: Bounce,
      });
    }
    }
    catch(err){
      console.log("Request Failed",err)
      toast('Authentication Failed!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type:"error"
      });
    }
  }

  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    <form onSubmit={handleSubmit}>
    <div className='flex justify-center items-center'>
    <div className='flex flex-col gap-3 p-5 border border-gray-300 shadow-md mt-5 h-80 justify-center items-center rounded-md'>
      {/* <input type="text" name="name" id="name" 
      placeholder=' Enter Your Name'
      value={form.name}
      onChange={handleChange}
      className='border border-gray-500 p-3 w-96 rounded-md bg-white'
      /> */}
      
      <input type="email" name="email" id="email" 
      placeholder=' Enter Your Email'
      value={form.email}
      onChange={handleChange}
      className='border border-gray-500 p-3 w-96 rounded-md bg-white'
      />
      
      <input type="password" name="password" id="password" 
      placeholder=' Enter Your Password'
      value={form.password}
      onChange={handleChange}
      className='border border-gray-500 p-3 w-96 rounded-md bg-white'
      />
      <button className='bg-blue-700 p-3 text-white font-semibold rounded-md'>Sign-In</button>
    </div>
    </div>
    </form>
    </>
  )
}

export default App