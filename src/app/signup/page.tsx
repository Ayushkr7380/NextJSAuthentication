"use client";
import React ,{ useState} from 'react'
import Link from "next/link"
import { toast } from "react-hot-toast"
import axios from "axios";
import { useRouter } from 'next/navigation';
const SignUp = () => {

  const router = useRouter();
  const [ user , setUser] = useState({username:'',email:'',password:''});
  // console.log(user);

  const [ loading , setLoading ] = useState(false);

  const signUp = async() =>{
      try {
        setLoading(true);
        const response = await axios.post("/api/user/signup",user);
        console.log("signup success",response.data);
        router.push("/login");
      } catch (error:any) {
        toast.error(error.message);
        console.log(error.message);
      }finally{
        setLoading(false);
      }
  }

  return (
    <div className='flex items-center flex-col mt-[20vh]'>
      <div className='text-4xl my-5'>SignUp Page</div>
      <div className='flex flex-col items-center border-2 p-3 rounded'>
        <label htmlFor="username">Username</label>
        <input
           type="text"
           id='username'
           name="username"
           placeholder='username'
           value={user.username}
           onChange={(e)=>setUser({...user ,username:e.target.value})}
           className='text-black px-2 py-1 my-1 border-none outline-none rounded-md'
        />
        <label htmlFor="email">Email</label>
        <input
           type="text"
           id='email'
           name="email"
           placeholder='email'
           value={user.email}
           onChange={(e)=>setUser({...user ,email:e.target.value})}
           className='text-black px-2 py-1 my-1 border-none outline-none rounded-md'
        />
        <label htmlFor="password">password</label>
        <input
           type="password"
           id='password'
           name="password"
           placeholder='password'
           value={user.password}
           onChange={(e)=>setUser({...user ,password:e.target.value})}
           className='text-black px-2 py-1 my-1 border-none outline-none rounded-md'
        />
        <div className='my-4'>
          {loading && <div>Loading...</div>}
        </div>
        <div className='my-1'>
          <button className='rounded border-2 px-1 mx-2 hover:bg-gray-600' onClick={signUp}>Signup</button>
          <Link href="/login" className='rounded border-2 p-1 mx-2 hover:bg-gray-600'>LoginPage</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp