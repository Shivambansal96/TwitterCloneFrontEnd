import React, { useState } from 'react';
import './Notifications.scss';

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

    const handleSave = () => {
        // Handle save logic here
        console.log("Profile Image: ", profileImageSrc);
        console.log("Background Image: ", backgroundImageSrc);
        console.log("Bio: ", bio);
        // Save the data as needed
    };

    return (
        <div className="profile-page-container">
            <h1>Profile Page</h1>

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
