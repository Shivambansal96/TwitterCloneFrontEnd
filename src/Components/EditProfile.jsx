// // // import React, { useState } from 'react';
// // // import './EditProfile.scss';

// // // const EditProfile = () => {
// // //     const [profileImageSrc, setProfileImageSrc] = useState(null);
// // //     const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);
// // //     const [bio, setBio] = useState('');

// // //     const handleProfileImageChange = (event) => {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             const reader = new FileReader();
// // //             reader.onload = (e) => {
// // //                 setProfileImageSrc(e.target.result);
// // //             };
// // //             reader.readAsDataURL(file);
// // //         }
// // //     };

// // //     const handleBackgroundImageChange = (event) => {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             const reader = new FileReader();
// // //             reader.onload = (e) => {
// // //                 setBackgroundImageSrc(e.target.result);
// // //             };
// // //             reader.readAsDataURL(file);
// // //         }
// // //     };

// // //     const handleBioChange = (event) => {
// // //         setBio(event.target.value);
// // //     };

// // //     const handleSave = () => {
// // //         // Handle save logic here
// // //         console.log("Profile Image: ", profileImageSrc);
// // //         console.log("Background Image: ", backgroundImageSrc);
// // //         console.log("Bio: ", bio);
// // //         // Save the data as needed
// // //     };

// // //     return (
// // //         <div className="edit-profile-container">
// // //             <h1>Edit Profile</h1>

// // //             <div className="section background-section">
// // //                 <h2>Background Image</h2>
// // //                 <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
// // //                 <div className="image-preview">
// // //                     {backgroundImageSrc && <img src={backgroundImageSrc} alt="Background Preview" className="image" />}
// // //                 </div>
// // //             </div>

// // //             <div className="section profile-section">
// // //                 <h2>Profile Picture</h2>
// // //                 <input type="file" accept="image/*" onChange={handleProfileImageChange} />
// // //                 <div className="image-preview">
// // //                     {profileImageSrc && <img src={profileImageSrc} alt="Profile Preview" className="image" />}
// // //                 </div>
// // //             </div>

// // //             <div className="section bio-section">
// // //                 <h2>Bio</h2>
// // //                 <textarea
// // //                     value={bio}
// // //                     onChange={handleBioChange}
// // //                     rows="4"
// // //                     className="text-area"
// // //                     placeholder="Write your bio here..."
// // //                 ></textarea>
// // //                 <div className="bio-preview">
// // //                     <h3>Bio Preview:</h3>
// // //                     <p>{bio}</p>
// // //                 </div>
// // //             </div>

// // //             <button onClick={handleSave} className="save-button">Save</button>
// // //         </div>
// // //     );
// // // };

// // // export default EditProfile;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './EditProfile.scss';
// import { USER_API_END_POINT } from '../utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import useGetProfile from '../customHooks/useGetProfile';
// import { useNavigate } from 'react-router-dom';
// import { getUser } from '../redux/userSlice';

// const EditProfile = (id) => {



//     const {user, profile} = useSelector(store=>store.user)

//     const userId = user?._id;


//     const navigate = useNavigate();
//     const dispatch = useDispatch();


//     const [profileImageFile, setProfileImageFile] = useState(null);
//     const [backgroundImageFile, setBackgroundImageFile] = useState(null);
//     const [profileImageSrc, setProfileImageSrc] = useState(null);
//     const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);
//     const [bio, setBio] = useState('');

//     const handleProfileImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setProfileImageFile(file);
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setProfileImageSrc(e.target.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleBackgroundImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setBackgroundImageFile(file);
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setBackgroundImageSrc(e.target.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleBioChange = (event) => {
//         setBio(event.target.value);
//     };


//     const handleSave = async () => {

//         // const updatedData = {
//         //     profileImageSrc:profileImageSrc,
//         //     backgroundImageSrc:backgroundImageSrc,
//         //     bio:bio
//         // };

//         // const updatedData = {
//         //     profileImageSrc,
//         //     backgroundImageSrc,
//         //     bio
//         // };

//         const formData = new FormData();
//         formData.append('profileImage', profileImageSrc);

//     // if (profileImageFile) {
//     // }
//     // if (backgroundImageFile) {
//     //     formData.append('backgroundImage', backgroundImageFile);
//     // }

//     // formData.append('bio', bio);

//             // console.log(updatedData);

//         try {
//             const response = await axios.post(`${USER_API_END_POINT}/updateprofile/${userId}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     // 'Content-Type': 'application/json'
//                 },
//                 withCredentials: true // Send cookies with request
//             });
//             // console.log(response.data);




//             alert('Profile updated successfully!');

//             // dispatch(getUser(response.data.user));
//             // console.log("CHECKING = " , response.data.user);

//             navigate(`/profile/${user._id}`)


//         } catch (error) {
//             console.error('Error updating profile = ', error);
//             alert('Failed to update profile. Please try again.');
//         }


//         // console.log("Profile Image: ", profileImageSrc);
//         // console.log("Background Image: ", backgroundImageSrc);
//         // console.log("Bio: ", bio);
//     };

//     // useEffect(() => {

//     // }, [])
    

//     return (
//         <div className="edit-profile-container">
//             <h1>Edit Profile</h1>

//             <div className="section background-section">
//                 <h2>Background Image</h2>
//                 <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
//                 <div className="image-preview">
//                     {backgroundImageSrc && <img src={backgroundImageSrc} alt="Background Preview" className="image" />}
//                 </div>
//             </div>

//             <div className="section profile-section">
//                 <h2>Profile Picture</h2>
//                 <input type="file" accept="image/*" onChange={handleProfileImageChange} />
//                 <div className="image-preview">
//                     {profileImageSrc && <img src={profileImageSrc} alt="Profile Preview" className="image" />}
//                 </div>
//             </div>

//             <div className="section bio-section">
//                 <h2>Bio</h2>
//                 <textarea
//                     value={bio}
//                     onChange={handleBioChange}
//                     rows="4"
//                     className="text-area"
//                     placeholder="Write your bio here..."
//                 ></textarea>
//                 <div className="bio-preview">
//                     <h3>Bio Preview:</h3>
//                     <p>{bio}</p>
//                 </div>
//             </div>

//             <button onClick={handleSave} className="save-button">Save</button>
//         </div>
//     );
// };

// export default EditProfile;


import React, { useState } from 'react';
import axios from 'axios';
import './EditProfile.scss';
import { USER_API_END_POINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import useGetProfile from '../customHooks/useGetProfile';

const EditProfile = ({ id }) => {
    const { user, profile } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    useGetProfile(id);

    const [profileImageFile, setProfileImageFile] = useState(null);
    const [backgroundImageFile, setBackgroundImageFile] = useState(null);
    const [profileImageSrc, setProfileImageSrc] = useState(null);
    const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);
    const [bio, setBio] = useState('');

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImageFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBackgroundImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBackgroundImageFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setBackgroundImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleSave = async () => {
        const formData = new FormData();
        if (profileImageFile) {
            formData.append('profileImage', profileImageFile);
        }
        if (backgroundImageFile) {
            formData.append('backgroundImage', backgroundImageFile);
        }
        formData.append('bio', bio);

        try {
            const response = await axios.post(`${USER_API_END_POINT}/updateprofile/${user._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true // Send cookies with request
            });

            alert('Profile updated successfully!');
            dispatch(getUser(response.data.user));
            navigate(`/profile/${user._id}`);
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className="edit-profile-container">
            <h1>Edit Profile</h1>
            <div className="section background-section">
                <h2>Background Image</h2>
                <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
                <div className="image-preview">
                    {backgroundImageSrc && <img src={backgroundImageSrc} alt="Background Preview" className="image" />}
                </div>
            </div>
            <div className="section profile-section">
                <h2>Profile Picture</h2>
                <input type="file" accept="image/*" onChange={handleProfileImageChange} />
                <div className="image-preview">
                    {profileImageSrc && <img src={profileImageSrc} alt="Profile Preview" className="image" />}
                </div>
            </div>
            <div className="section bio-section">
                <h2>Bio</h2>
                <textarea
                    value={bio}
                    onChange={handleBioChange}
                    rows="4"
                    className="text-area"
                    placeholder="Write your bio here..."
                ></textarea>
                <div className="bio-preview">
                    <h3>Bio Preview:</h3>
                    <p>{bio}</p>
                </div>
            </div>
            <button onClick={handleSave} className="save-button">Save</button>
        </div>
    );
};

export default EditProfile;

