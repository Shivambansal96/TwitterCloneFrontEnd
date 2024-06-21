import React from 'react'
import './RightSidebar.scss'
import { IoSearchOutline } from "react-icons/io5";
import my_pic from '../assets/me.png'
import { useSelector } from 'react-redux'
import useOtherUsers from '../customHooks/useOtherUsers.js';
import { Link } from 'react-router-dom';


const RightSidebar = () => {


  const {user, otherUsers} = useSelector(store=>store.user)
  useOtherUsers(user?._id)

  return (
    <div id='right-sidebar'>
      {/* right-sidebar */}

      <div className="top">
        <i><IoSearchOutline /></i>
        {/* <i>🔍</i> */}
        <input type="text" placeholder='Search' />
      </div>

      <div className="bottom">

        <div className="up">          
          <h2>People you might know</h2>
        </div>

        <div className="low">

          {
            otherUsers?.map((user)=> {
              return (
                <div key={user._id} className="down">

                  <div className="left">
                    <img className='avatar' src={my_pic} alt="" />
                  </div>

                  <div className="mid">
                    {/* <p>Shivam</p> */}
                    <p>{user?.name}</p>
                    <p>{`@${user?.username}`}</p>
                  </div>

                  <div className="right">
                  <Link to={`/profile/${user?._id}`}>
                    <button>Profile</button>
                  </Link>
                  </div>

                </div>
              )
            })
          }
        </div>
     
      </div>


    </div>
  )
}

export default RightSidebar
