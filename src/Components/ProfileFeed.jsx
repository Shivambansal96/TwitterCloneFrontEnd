import React from 'react'
import './ProfileFeed.scss'
import { IoArrowBack } from "react-icons/io5";
import Tweet from './Tweet';
import ProfileComp from './ProfileComp';


const ProfileFeed = ( ) => {
  return (
    <div id='profile-feed'>


        <ProfileComp />

        {/* <Tweet /> */}
      
    </div>

  )
}

export default ProfileFeed
