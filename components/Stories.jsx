import React from 'react'

import { stories } from '../data'
import Story from './Story'

const Stories = () => {
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rouned-sm overflow-x-scroll scrollbar-hide'>
      {
          stories.map((story) => (
              <Story key={story.id} name={story.name} pic={story.pic} />
          ))
      }
    </div>
  )
}

export default Stories
