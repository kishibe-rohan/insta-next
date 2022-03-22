import React from 'react'

const Story = ({name,pic}) => {
  return (
    <div>
      <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:animate-pulse focus:border-none' src={pic}/>
      <p className='text-xs w-14 truncate hover:scale-110 transition transform duration-200 ease-out'>{name}</p>
    </div>
  )
}

export default Story
