import React, { useState } from 'react';
import './update.css';
import Warning from '../warning/Warning';
import { useDispatch, useSelector } from 'react-redux';
import { remove, update,addHello, updateUser2 } from '../../redux/useSlice';
import { updateUser } from '../../redux/apiCalls';

const Update = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const {userInfo,pending,error} = useSelector(state=>state.user);
    const dispatch = useDispatch();

    const handleUpdate = (e)=>{
        e.preventDefault();
        // dispatch(addHello({name,email}));
        // updateUser({name,email},dispatch);
        dispatch(updateUser2({name,email}));
    };

    const handleDelete = (e)=>{
        e.preventDefault();
        // dispatch(remove());
    };

  return (
    <div className='update'>
        <div className="updateWrapper">
            <h3 className="updateTitle">Update Your Account</h3>
            <Warning/>
            <button className="deleteButton" onClick={handleDelete}>Delete Account</button>
            <div className="updateContainer">
                <form>
                    <div className="formItem">
                        <label>Profile Picture</label>
                        <div className="profilePic">
                            <img src="girl.jpg" alt="" className="avatar" />
                            <span className="change">Change</span>
                        </div>
                    </div>
                    <div className="formItem">
                        <label >Username</label>
                        <input type="text" placeholder={userInfo.name} className="formInput" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="formItem">
                        <label >Email</label>
                        <input type="email" placeholder={userInfo.email} className="formInput" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="formItem">
                        <label>Password</label>
                        <input type="password" className="formInput" />
                    </div>
                    <button disabled={pending} className="updateButton" onClick={handleUpdate}>Update</button>
                    {error && <span className='error'>Something Went Wrong!</span>}
                    {pending === false && <span className='success'>Account has been updated</span>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update
