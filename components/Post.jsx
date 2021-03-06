import React from 'react'

import { BookmarkIcon,ChatIcon,DotsHorizontalIcon,EmojiHappyIcon,HeartIcon,PaperAirplaneIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

const Post = ({id,username,userImg,img,caption}) => {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-5'>
         <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3'/>
         <p className='flex-1 font-bold'>{username}</p>
         <DotsHorizontalIcon className='h-5'/>
      </div>

      {/* Post Image */}
      <img src={img} className='object-cover w-full'/>

      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4 '>
            <HeartIconFilled className='btn text-red-500'/>
            <ChatIcon className='btn'/>
            <PaperAirplaneIcon className='btn rotate-45'/>
        </div>
         <BookmarkIcon className='btn'/>
      </div>

      {/* Post Caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username} </span>
        {caption}
      </p>

      {/* Comment Input */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className="h-7"/>
        <input placeholder="Add a comment..." className="border-none flex-1 focus:ring-0 outline:none" type="text"></input>
        <button className='font-semibold text-blue-400'>Post</button>
      </form>
     
    </div>
  )
}

export default Post
