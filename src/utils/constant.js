

export const USER_API_END_POINT = 'https://twitterclonebackend-trf4.onrender.com/api/v1/user'
// export const USER_API_END_POINT = 'http://localhost:8008/api/v1/user'
// export const TWEET_API_END_POINT = 'http://localhost:8008/api/v1/tweet'
export const TWEET_API_END_POINT = 'https://twitterclonebackend-trf4.onrender.com/api/v1/tweet'

// utils/constant.js
export const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
};
