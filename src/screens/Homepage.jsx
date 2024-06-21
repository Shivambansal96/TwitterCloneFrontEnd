import React, { useEffect } from 'react'
import './Homepage.scss'
import LeftSidebar from '../Components/LeftSidebar.jsx'
import Feed from '../Components/Feed.jsx'
import RightSidebar from '../Components/RightSidebar.jsx'
import { useSelector } from 'react-redux'
import useGetMyTweets from '../customHooks/useGetMyTweets.js'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {

const navigate = useNavigate();
  const {user, otherUsers} = useSelector(store=>store.user)
  useGetMyTweets(user?._id)
  
  useEffect(() => {
    if(!user) {
      navigate('/login')
    }

  }, [])

  return (
    <div id='homepage'>

      

        <LeftSidebar />
        <Feed />
        <RightSidebar />
      
    </div>
  )
}

export default Homepage
