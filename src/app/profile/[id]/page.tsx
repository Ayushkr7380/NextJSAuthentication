import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserProfile = ({params}:any) => {
  return (
    <div className='flex items-center flex-col'>
        <div className='text-4xl'>Profile</div>
        <div className='text-4xl mt-[30vh]'>
            <span>UserProfile</span>
            <span className='bg-orange-500 rounded-xl ml-3 px-1 text-black'>{params.id}</span>
        </div>
    </div>
  )
}

export default UserProfile