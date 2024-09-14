"use client";
import React from 'react'
import Link from "next/link"
const SignUp = () => {
  return (
    <div className='flex items-center flex-col mt-[25vh]'>
      <div className='text-4xl'>SignUp Page</div>
      <div className='m-2 rounded border-2 p-2'>
        <Link href="/login">LoginPage</Link>
      </div>
    </div>
  )
}

export default SignUp