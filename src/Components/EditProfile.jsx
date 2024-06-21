// import React, { useState } from 'react';
// import './EditProfile.scss';

// const EditProfile = () => {
//     const [profileImageSrc, setProfileImageSrc] = useState(null);
//     const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);
//     const [bio, setBio] = useState('');

//     const handleProfileImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
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

//     const handleSave = () => {
//         // Handle save logic here
//         console.log("Profile Image: ", profileImageSrc);
//         console.log("Background Image: ", backgroundImageSrc);
//         console.log("Bio: ", bio);
//         // Save the data as needed
//     };

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

const EditProfile = () => {
    const [profileImageSrc, setProfileImageSrc] = useState(null);
    const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);
    const [bio, setBio] = useState('');

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
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
        if (profileImageSrc) {
            formData.append('profileImage', profileImageSrc);
        }
        if (backgroundImageSrc) {
            formData.append('backgroundImage', backgroundImageSrc);
        }
        formData.append('bio', bio);

        try {
            const response = await axios.put('/api/update-profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true // Send cookies with request
            });
            console.log(response.data);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className="profile-page-container">
            <h1>Edit Profile</h1>

            <div className="section">
                <h2>Background Image</h2>
                <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
                <div className="image-preview">
                    {backgroundImageSrc && <img src={backgroundImageSrc} alt="Background Preview" className="image" />}
                </div>
            </div>

            <div className="section">
                <h2>Profile Picture</h2>
                <input type="file" accept="image/*" onChange={handleProfileImageChange} />
                <div className="image-preview">
                    {profileImageSrc && <img src={profileImageSrc} alt="Profile Preview" className="image" />}
                </div>
            </div>

            <div className="section">
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
