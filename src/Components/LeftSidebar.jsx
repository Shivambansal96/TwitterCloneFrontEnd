import React from 'react'
import './LeftSidebar.scss'
import { RiTwitterXLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { getAllTweets } from '../redux/tweetSlice';


const LeftSidebar = () => {


  const {user} = useSelector(store=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async() => {

    try {

      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      navigate('/login');
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      dispatch(getAllTweets(null));
      // dispatch(getMyProfile(null));

      toast.success(res.data.message);
      
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
  }


  return (
    <div id='left-sidebar'>
      {/* <p>LeftSide</p> */}

      <NavLink to={'/'}>
        <div id="logo"><RiTwitterXLine /></div>
      </NavLink>


      <NavLink to={'/'}>
        <div id="home">
          <i><IoHomeOutline /></i>
          <p>Home</p>
        </div>
      </NavLink>

      <div id="explore">
        <i><IoSearchOutline /></i>        
        <p>Explore</p>
      </div>

      <NavLink to={'/notifications'}>
        <div id="notifications">
          <i><FaRegBell /></i>
          <p>Notifications</p>
        </div>
      </NavLink>

      <NavLink to={`/profile/${user?._id}`}>
        <div id="proile">
          <i><FaRegUser /></i>
          <p>Profile</p>
        </div>
      </NavLink>

      <div id="bookmark">
        <i><IoBookmarkOutline /></i>
        <p>Bookmark</p>
      </div>

      <div onClick={logoutHandler} id="logout">
        <i><IoLogOutOutline /></i>
        <p>Logout</p>
      </div>

      <div className="buttonContainer">
        <button className='button'>Tweet</button>
      </div>

    </div>
  )
}


export default LeftSidebar
