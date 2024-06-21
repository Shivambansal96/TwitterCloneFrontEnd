import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice.js";



const useOtherUsers = (id) => {

    const dispatch = useDispatch();

    useEffect(()=> {

        const fetchOthersProfile = async() => {

            try {
                const res = await axios.get(`${USER_API_END_POINT}/otherusers/${id}`, {
                    withCredentials: true
                })

                    console.log(res);
    
                dispatch(getOtherUsers(res.data.otherUsers))
                
            } catch (error) {
                
                console.log(error);        
            }
        }

        fetchOthersProfile();

    }, [])

    
}

export default useOtherUsers;