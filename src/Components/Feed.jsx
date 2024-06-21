import React from 'react'
import './Feed.scss'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'

const Feed = () => {

  const {tweets} = useSelector(store=>store.tweet)

  return (
    <div id='feed'>
      {/* feed */} 

      <CreatePost />

      <br />

      {
        tweets?.map((tweet) => <Tweet key={tweet?._id} tweet={tweet}/>)
      }


        
       


    </div>
  )
}

export default Feed
