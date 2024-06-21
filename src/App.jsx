import React from 'react'
import './App.scss'
import { Routes, Route } from "react-router-dom";
import Homepage from './screens/Homepage'
import Profile from './screens/Profile';
import Feed from './Components/Feed';
import Notifications from './screens/Notifications';
import Login from './screens/Login';
import { Toaster } from 'react-hot-toast';
import EditProfile from './Components/EditProfile';


const App = () => {



  return (
    <div id='App'>

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/login' element={<Login />}/>
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
        {/* <Route path='/notifications' element={<Notifications inputs={userInputs}  />} /> */}
        <Route path='/notifications' element={<Notifications  />} />
      </Routes>


      <Toaster />

    </div>
  )
}

export default App
