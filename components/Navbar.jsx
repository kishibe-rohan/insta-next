import React from 'react'
import Image from 'next/image'

import {SearchIcon,PlusCircleIcon,UserGroupIcon,HeartIcon,PaperAirplaneIcon,MenuIcon} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useSession,signIn, signOut } from 'next-auth/react'

const Navbar = () => {

    const {data:session} = useSession();

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex max-w-6xl justify-between mx-5 lg:mx-auto'>
            {/* Logo */}
            <div className="relative hidden lg:inline-grid w-40">
                <Image src="https://i.ibb.co/5sS5PpM/logolight.png" layout="fill" objectFit='contain'/>
            </div>

            <div className="relative lg:hidden w-9 flex-shrink-0 cursor-pointer">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" layout="fill" objectFit='contain'/>
            </div>

            {/* Searchbar */}
            <div className='max-w-xs'>
            <div className="mt-1 relative p-3 rounded-md">
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-400'/>
                </div>
                <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type='text' placeholder="Search"/>
            </div>
            </div>

            {/* Navlinks */}
            <div className="flex items-center justify-end space-x-4">
                <HomeIcon className="navBtn"/>
                <MenuIcon className="h-6 md:hidden cursor-pointer"/>

                {session?(<>
                <div className="relative navBtn">
                <PaperAirplaneIcon className='navBtn rotate-45'/>
                <div className='absolute -top-1 -right-2 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center animate-pulse'>3</div>
                </div>
                <PlusCircleIcon className="navBtn"/>
                <UserGroupIcon className='navBtn'/>
                <HeartIcon className='navBtn'/>

                <img src={session.user?.image} className='h-10 w-10 rounded-full cursor-pointer' onClick={signOut}/>
               </>

                ): (<button onClick={signIn}>Sign In</button>)
                }
               
            
        </div>
    </div>
    </div>
  )
}

export default Navbar
