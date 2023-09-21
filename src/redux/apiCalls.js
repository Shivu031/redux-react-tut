import axios from "axios";
import { updateFailure, updateStart, updateSuccess } from "./useSlice"


export const updateUser = async(user,dispatch)=>{
    dispatch(updateStart());
    try{
        const res = await axios.post("http://localhost:8800/api/users/123/update",user);
        dispatch(updateSuccess(res.data));
    }catch(err){
        dispatch(updateFailure());
    }
}