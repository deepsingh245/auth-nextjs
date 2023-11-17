import React from 'react'

export default function UserProfilePage({params}:any) {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1>Profile</h1>
      <p className='text-3xl'>This is the profile page for </p>
      <span className='p-1 rounded border  bg-red-700'>{params.id}</span>
    </div>
  )
}
