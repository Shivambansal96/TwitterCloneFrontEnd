import React from 'react'
import './Profile.scss'
import LeftSidebar from '../Components/LeftSidebar'
import RightSidebar from '../Components/RightSidebar'
import ProfileFeed from '../Components/ProfileFeed'
// import { useSelector } from 'react-redux';
// import store from '../redux/store'
// import useGetProfile from '../customHooks/useGetProfile'


const Profile = () => {

  return (
    <div id='profile'>

      <LeftSidebar />

      <ProfileFeed  />
      
      <RightSidebar />


    </div>
  )
}

export default Profile
