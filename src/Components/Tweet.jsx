import React, { useRef, useState } from 'react'
import './Tweet.scss'
import my_pic from '../assets/me.png'
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa"; // outline
import { FaRegBookmark } from "react-icons/fa";
import { TWEET_API_END_POINT, USER_API_END_POINT, timeSince } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getRefresh } from '../redux/tweetSlice';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md"; // outline
import { MdDelete } from "react-icons/md";




const Tweet = ({tweet}) => {

    const like_icon = useRef();

    const {user} = useSelector(store=>store.user);
    const dispatch = useDispatch();


    const likeHandler = async(id) => {

        like_icon.current.style.color = like_icon.current.style.color === 'black' ? 'red' : 'black'; 

        try {

            const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`, {id:user?._id}, {
                withCredentials: true

            })

            toast.success(res.data.message);    

            dispatch(getRefresh());

            
        } catch (error) {

            toast.error(error.response.data.message);
            console.log(error);
        }

    }

    const bookmarkHandler = async(id) => {

        try {

            axios.defaults.withCredentials = true;
            const res = await axios.put(`${USER_API_END_POINT}/bookmark/${id}`, {id: user?._id})

            console.log(res);
            toast.success(res.data.message);    

            dispatch(getRefresh());

            
        } catch (error) {

           toast.error(error?.response?.data?.message) 
            console.log(error);
        }

    }

    const deleteHandler = async(id) => {

        // like_icon.current.style.color = 'blue';

        try {
            
            axios.defaults.withCredentials = true;
            const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`);
            console.log("Working", res);

            toast.success(res.data.message)
            dispatch(getRefresh())

            
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
        }

    }

  return (

    <>

    <br />
    <div id='tweet'>

        <div className="top">
            <div className="left">
                <img src={my_pic} alt="profile_pic" />
            </div> 

            <div className="right">

                <div className="up">
                    {/* <p>{name}</p> */}
                    <p style={{fontWeight:'600'}}>{tweet?.userDetails[0]?.name}</p>
                    {/* <p>{username}</p> */}
                    <p style={{color:'gray'}}>{`@${tweet?.userDetails[0]?.username}`}</p>
                    <p style={{ color: 'gray' }}>{timeSince(new Date(tweet?.createdAt))}</p>
                    {/* <p>{time}</p> */}

                    {/* line 120    <p style={{color:'gray'}}>{new Date(Date.now([]))}</p>      */}
                    {/* change this  */}
                    {/* <p>1m</p> */}
                </div>

                <div className="down">
                    <p>{tweet?.description}</p>
                </div>

            </div>
        </div>

        <div className="bottom">

            <div className="left">
                <i><FaRegComment /></i>
                <p>0</p>
            </div>

            <div onClick={()=>likeHandler(tweet?._id)} className="mid">
                {/* <i><FaRegHeart /></i> */}
                <i ref={like_icon}><FaHeart /></i>
                <p>{tweet?.like?.length}</p>
            </div>

            <div onClick={()=>bookmarkHandler(tweet?._id)} className="right">
                <i><FaRegBookmark /></i>
                {
                    console.log(tweet)
                }
                <p>{user?.bookmark?.length}</p>
            </div>

            {
                user?._id === tweet?.userId && (
                    <div onClick={()=>deleteHandler(tweet?._id)} className="end">
                        <i><MdDelete /></i>
                    </div>
                )
            }



        </div>

    </div>

    </>
  )
}

export default Tweet
