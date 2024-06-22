import React, { useState } from 'react'
import './CreatePost.scss'
import my_pic from "../assets/me.png"
import { GrGallery } from "react-icons/gr";
import axios from 'axios';
import { TWEET_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';

const CreatePost = () => {

  const [description, setDescription] = useState('');
  const {user} = useSelector(store=>store.user);
  const {isActive} = useSelector(store=>store.tweet);
  const dispatch = useDispatch();
 
  const submitHandler = async() => {

    try {

      const res = await axios.post(`${TWEET_API_END_POINT}/create`, {description, id:user?._id}, {
        withCredentials: true,
      });

      dispatch(getRefresh())

      if(res.data.success) {
        toast.success(res.data.message)
      }      
    } 
    
    catch (error) {
      
      toast.error(error.response.data.message)
      console.log(error);  
    }

    setDescription('');

  }

  const followingTweetHandler = async() => {
    dispatch(getIsActive(true))
    // alert('following')

  }

  const forYouHandler = async() => {
    dispatch(getIsActive(false))
    // alert('follow')
  }

  // const check = `left ${isActive ? 'active' : 'inactive'}`;

  return (
    <div id='create-post'>

      <div className="top">
        <div onClick={forYouHandler} className={`left ${!isActive ? 'active' : 'inactive'}`}>
          <p>For you</p>
        </div>

        <div onClick={followingTweetHandler} className={`right ${isActive ? 'active' : 'inactive'}`}>
          <p>Following</p>
        </div>
      </div>

      <div className="bottom">

        <div className="up">
          <div id="imageContainer">
            <img src={my_pic} alt="DP" />
          </div>

          <div id="create-post-field">
            {/* <input type="text" placeholder='What is happening?' /> */}
            <textarea value={description} onChange={((e)=> setDescription(e.target.value))} placeholder='What is happening?' name="" id=""></textarea>
          </div>
        </div>

        <div className="down">
            <div id="icons">
              <GrGallery />
            </div>

            <div className="buttonContainer">
              <button onClick={submitHandler} className='button'>Post</button>
            </div>

        </div>
      </div>

      
    </div>
  )
}

export default CreatePost;
