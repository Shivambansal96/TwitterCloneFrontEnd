import React, { useEffect, useState } from 'react'
import './ProfileComp.scss'
import { IoArrowBack } from "react-icons/io5";
import bg from '../assets/bg.jpg'
import my_pic from '../assets/me.png'
import { useDispatch, useSelector } from 'react-redux';
import useGetProfile from '../customHooks/useGetProfile';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { getRefresh } from '../redux/tweetSlice';
import { followingUpdate } from '../redux/userSlice';
import { FaCheck } from "react-icons/fa6";


const ProfileComp = () => {

    const {user, profile} = useSelector(store=>store.user)
    const {id} = useParams();
    const dispatch = useDispatch();
    
    useGetProfile(id)  
    // extra 
    // const [isEditing, setIsEditing] = useState(false);
    // const [bio, setBio] = useState(profile?.bio || "");
    // const [profilePicture, setProfilePicture] = useState(profile?.profilePicture || "");
    // const [backgroundImage, setBackgroundImage] = useState(profile?.backgroundImage || "");

    
    // useEffect(() => {
    //     if (profile) {
    //         setBio(profile.bio);
    //         setProfilePicture(profile.profilePicture);
    //         setBackgroundImage(profile.backgroundImage);
    //     }
    // }, [profile]);
    // extra 


    
    const followerHandler = async() => {
        if(user.following.includes(id)) {

            try {

                const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {id:user?._id}, {
                    withCredential: true
                })

                dispatch(followingUpdate(id));
                dispatch(getRefresh());
                toast.success(res.data.message);
                
            } catch (error) {

                toast.error(error.response.data.message);
                console.log(error);
            }

        } else {

            try {

                const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {id:user?._id}, {
                    withCredential: true
                })

                dispatch(followingUpdate(id));
                dispatch(getRefresh());
                toast.success(res.data.message);
                
            } catch (error) {

                toast.error(error.response.data.message);
                console.log(error);
            }
        }

    }

    const editProfileHandler = () => {

    }


    // extra 

    // const handleProfileUpdate = async () => {
    //     try {
    //         const res = await axios.put(`${USER_API_END_POINT}/updateProfile`, {
    //             userId: user._id,
    //             bio,
    //             profilePicture,
    //             backgroundImage
    //         }, {
    //             withCredentials: true
    //         });
    //         dispatch(getRefresh());
    //         toast.success(res.data.message);

    //         // extra 
    //         setIsEditing(false); 
    //         // extra 

    //     } catch (error) {
    //         toast.error(error.response.data.message);
    //         console.log(error);
    //     }
    // };

    // const handleImageUpload = async (e, setImage) => {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         const res = await axios.post(`${USER_API_END_POINT}/upload`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         setImage(res.data.imageUrl);
    //     } catch (error) {
    //         toast.error('Failed to upload image');
    //         console.log(error);
    //     }
    // };

    // const toggleEditMode = () => {
    //     setIsEditing(prev => !prev); 
    // };

    // extra 
     
  return (
    <div id='profile-comp'>

        <div className="top">
            <div className="left">
                <i><IoArrowBack /></i>
            </div>

            <div className="right">
                <p>{profile?.name}</p>
                {/* <p>Shivam</p> */}
                <p>10 post</p>
            </div>

        </div>

        <div className="mid">

            <div className="up">
                <img src={bg} alt="profile_bg" />
                {/* <img src={backgroundImage || "default-bg-image.jpg"} alt="profile_bg" />
                    {(profile?._id === user?._id) && (
                        <input type="file" onChange={(e) => handleImageUpload(e, setBackgroundImage)} />
                    )} */}

            </div>

            <div className="down">
                <div className="left">
                    <img className='avatar' src={my_pic} alt="" />
                    {/* <img className='avatar' src={profilePicture || "default-profile-pic.jpg"} alt="profile" />
                        {(profile?._id === user?._id) && (
                            <input type="file" onChange={(e) => handleImageUpload(e, setProfilePicture)} />
                        )} */}
                </div>

                <div className="buttonContainer">
                    {
                        (profile?._id === user?._id) ? (
                            <button><Link to={'/editprofile'}>Edit Profile</Link></button>
                            // <button onClick={editProfileHandler}>Edit Profile</button>
                        ) : (
                            <button onClick={followerHandler}>{user.following.includes(id) ? (
                            <div style={{display:'flex', justifyContent:'center',alignContent:'center', gap:'8%'}}>
                                <i><FaCheck /></i>
                                <p>Following</p>
                            </div>
                        ) : (
                            <p>Follow</p>
                        )}</button>
                        )
                    }
                </div>
            </div>

        </div>

        <div className="bottom">

            <div className="up">
                <p>{profile?.name}</p>
                <p>{`@${profile?.username}`}</p>

                {/* <p>{profile?.name || 'Name not available'}</p> */}
                {/* <p>{profile ? `@${profile.username}` : 'Username not available'}</p> */}
            </div>

            <div className="down">
                <p>The Creative Catalyst behind tomorrow's innovations</p>
                {/* <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Add your bio"
                    /> */}
            </div>

        </div>
      
    </div>
  )
}

export default ProfileComp
