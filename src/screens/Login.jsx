import React, { useRef, useState } from 'react'
import './Login.scss'
import { RiTwitterXLine } from "react-icons/ri";
import { USER_API_END_POINT } from '../utils/constant'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/userSlice';

const Login = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const loginHandler = async(e) => {

        e.preventDefault();

        // console.log(name, email, username, password);

        try {

                const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    withCredentials: true
                })

                    dispatch(getUser(res?.data?.user))

                // console.log(res);

                navigate('/')

                if(res.data.success) {
                    toast.success(res.data.message)
                }
            
        } catch (error) {
            toast.success(error.response.data.message)
            console.log(error);
        }

    }


    const registerHandler = async(e) => {

        try {

            e.preventDefault();

            const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
                headers: {
                    'Content-type': 'application/json'
                },
                withCredentials: true
            })

            // console.log(res);
            if(res.data.success) {
                toast.success(res.data.message)
            }
            
        } catch (error) {
            toast.success(error.response.data.message)

            console.log(error);
        }

        

    }

  return (
    <div id='login-page'>

        <div id="left-logo">
            <i><RiTwitterXLine /></i>            
        </div>

        <div id="right-form">

            <h1>Happening Now</h1>


            <div className="wrapper">
            <div className="card-switch">
                <label className="switch" >
                <input className="toggle" type="checkbox" />
                <span className="slider"></span>
                <span className="card-side"></span>
                <div className="flip-card__inner">
                    <div className="flip-card__front">
                        <div className="title">Log in</div>
                        <form action="" className="flip-card__form">
                            <input type="email" value={email} onChange={((e) => setEmail(e.target.value))} placeholder="Email" name="email" className="flip-card__input" />
                            <input type="password" value={password}  onChange={((e) => setPassword(e.target.value))} placeholder="Password" name="password" className="flip-card__input" />
                            <button onClick={loginHandler} className="flip-card__btn">Login!</button>
                        </form>
                    </div>
                    <div className="flip-card__back">
                        <div className="title">Sign up</div>
                        <form action=""                      
                            className="flip-card__form">
                            <input type="name" value={name} onChange={((e) => setName(e.target.value))}  placeholder="Name" className="flip-card__input" />
                            <input type="username" value={username} onChange={((e) => setUsername(e.target.value))}  placeholder="Username" className="flip-card__input" />
                            <input type="email" value={email} onChange={((e) => setEmail(e.target.value))}  placeholder="Email" name="email" className="flip-card__input" />
                            <input type="password" value={password} onChange={((e) => setPassword(e.target.value))}  placeholder="Password" name="password" className="flip-card__input" />
                            <button onClick={registerHandler} className="flip-card__btn">Register!</button>
                        </form>
                    </div>
                </div>
                </label>
            </div>   
            </div>


            



        </div>

        
      
    </div>
  )
}

export default Login
