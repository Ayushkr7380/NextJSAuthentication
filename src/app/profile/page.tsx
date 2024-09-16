"use client"
import React from 'react'

const ProfilePage = () => {

  const logoutUser = async()=>{

  }
  return (
    <div className='flex flex-col items-center min-h-screen'>
        <div className="mt-[25vh]">
            <h1>
                Profile
            </h1>
        </div>
        <div className='mt-5 px-2 py-1 font-bold rounded bg-orange-600 cursor-pointer'>
          <p onClick={logoutUser}>logout</p>
        </div>
    </div>
  )
}

export default ProfilePage