import { useSession,signOut } from 'next-auth/react'
import React from 'react'


const MiniProfile = () => {

    const {data:session} = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src={session?.user?.image} className='rounded-full border p-[2px] w-16 h-16' />
    

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to InstaNext</h3>
        </div>

        <button className='text-sm font-semibold text-blue-400' onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default MiniProfile
