"use client";
import React ,{useState} from 'react'
import Link from "next/link"
import { toast } from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const [userLogin , setUserLogin] = useState({email:'',password:''});
  const [loading , setLoading ] = useState(false);
  const signIn  = async() =>{
      try {
        setLoading(true);
          const response = await axios.post("api/user/login",userLogin);
          console.log(response.data);
          router.push('/profile');        
      } catch (error:any) {
        toast.error(error.message);
        console.log(error.message);
      }finally{
        setLoading(false);
      }
  }
  return (
    <div className='flex items-center flex-col mt-[25vh]'>
      <div className='text-4xl my-5'>Login Page</div>
      <div className='flex flex-col items-center border-2 p-3 rounded'>
        <label htmlFor="email">Email</label>
        <input
           type="text"
           id='email'
           name="email"
           placeholder='email'
           value={userLogin.email}
           onChange={(e)=>setUserLogin({...userLogin ,email:e.target.value})}
           className='text-black px-2 py-1 my-1 border-none outline-none rounded-md'
        />
        <label htmlFor="password">password</label>
        <input
           type="password"
           id='password'
           name="password"
           placeholder='password'
           value={userLogin.password}
           onChange={(e)=>setUserLogin({...userLogin ,password:e.target.value})}
           className='text-black px-2 py-1 my-1 border-none outline-none rounded-md'
        />
        <div className='my-3'>
          { loading && <div>Loading...</div> }
        </div>
        <div className='my-1'>
          <button className='rounded border-2 px-1 mx-2 hover:bg-gray-600' onClick={signIn}>Login</button>
          <Link href="/signup" className='rounded border-2 p-1 mx-2 hover:bg-gray-600'>SignUpPage</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage