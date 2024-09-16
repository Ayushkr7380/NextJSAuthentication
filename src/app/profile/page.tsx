"use client"
import React ,{useState} from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
const ProfilePage = () => {
  const router = useRouter();

  const [ isLoading , setIsLoading] = useState(false);
  const logoutUser = async()=>{
    try {
      setIsLoading(true);
      const response = await axios.get("api/user/logout");
      console.log(response.data);
      router.push("/login"); 
    } catch (error:any) {
      toast.error(error.message);
      console.log(error.message);
    }finally{
      setIsLoading(false);
    }
  }
  return (
    <div className='flex flex-col items-center min-h-screen'>
        <div className="mt-[25vh]">
            <h1>
                Profile
            </h1>
        </div>
        <div className='my-3'>
          {
            isLoading && <div>Loading...</div>
          }
        </div>
        <div className='mt-5 px-2 py-1 font-bold rounded bg-orange-600 cursor-pointer'>
          <p onClick={logoutUser}>logout</p>
        </div>
    </div>
  )
}

export default ProfilePage