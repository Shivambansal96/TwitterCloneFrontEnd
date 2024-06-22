import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";



const useGetProfile = (id) => {

    console.log(id);

    const dispatch = useDispatch();

    useEffect(()=> {

        const fetchMyProfile = async() => {

            try {
                console.log("ANDER");
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
                    withCredentials: true
                })

                console.log(res);
    
                dispatch(getMyProfile(res.data.user))
                
            } catch (error) {
                console.log("errror");
                console.log(error);        
            }
            // console.log("ANDER");

        }

        fetchMyProfile();

    }, [id])

    
}

export default useGetProfile;