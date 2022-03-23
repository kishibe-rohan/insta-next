import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src="https://i.ibb.co/SsRjvv5/me.jpg" className='rounded-full border p-[2px] w-16 h-16' />
    

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>r20was.jsx</h2>
            <h3 className='text-sm text-gray-400'>Welcome to InstaNext</h3>
        </div>

        <button className='text-sm font-semibold text-blue-400'>Sign Out</button>
    </div>
  )
}

export default MiniProfile
