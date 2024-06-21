
npm i react-icons






npm i axios react-hot-toast

npm i @reduxjs/toolkit react-redux

npm i redux-persist


# Twitter Clone

## Overview

This project is a full-stack Twitter clone that replicates core functionalities of Twitter. Users can sign up, create tweets, follow/unfollow other users, and explore a feed of tweets from users they follow.

## Features

- **User Authentication**: Sign up, log in, and log out securely.
- **Posting Tweets**: Create new tweets (limited to a certain character count).
- **Following/Unfollowing**: Follow and unfollow other users.
- **Timeline**: View a timeline of tweets from users you follow.
- **Profile Pages**: View user profile pages displaying their tweets and follower/following counts.
- **Search Functionality**: Basic search to find users or tweets.
- **Responsive Design**: Usable on both desktop and mobile devices.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management tool.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React Hot Toast**: Notifications for React.
- **React Icons**: Popular icons as React components.
- **Redux Persist**: Persist and rehydrate Redux stores.

### Backend

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Bcryptjs**: Password hashing.
- **Jsonwebtoken**: JSON Web Token implementation.
- **Cookie-Parser**: Parse cookies.
- **Cors**: Enable cross-origin resource sharing.

## Project Structure

```
twitter-clone/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── redux/
    │   ├── App.js
    │   └── index.js
    └── public/
```


## Installation and Setup

### Prerequisites

- Node.js
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/twitter-clone.git
cd twitter-clone
```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install express mongoose dotenv bcryptjs jsonwebtoken cookies-parser cors
   ```

3. Create a `.env` file in the `backend` directory and add your environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install react-icons axios react-hot-toast @reduxjs/toolkit react-redux redux-persist
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

### Running the Application

- Ensure both frontend and backend servers are running.
- Open your browser and navigate to `http://localhost:3000`.


## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


## Contact

For any inquiries or feedback, feel free to open an issue or reach out to me at your-bansal.shivam1216.com.

---

By following this README, you should be able to set up and run the Twitter clone locally on your machine. Enjoy building and contributing to this project!