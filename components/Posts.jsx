import React from 'react'
import Post from './Post'

import { posts } from '../data'

const Posts = () => {
  return (
    <div>
      {
          posts.map((post) => (
              <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} caption={post.caption} img={post.img}/>
          ))
      }
    </div>
  )
}

export default Posts
