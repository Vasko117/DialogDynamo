import React, {useContext} from 'react';
import {auth} from "./firebase";
import {signOut} from 'firebase/auth'
import {AuthContext} from "./context/AuthContext";
import {useNavigate} from "react-router-dom";

function Navbar(props) {
    const {curruser}= useContext(AuthContext);
    const nav=useNavigate()
    const handlesubmit=()=>{
        nav('/profile')
    }
    return (
        <div className='navbar'>
            <span className='navbarot' onClick={()=>{nav('/')}}>DialogDynamo</span>
            <div className='user'>
                <img src={curruser.photoURL} alt='' className='imageuser' onClick={handlesubmit}/>
                <span>{curruser.displayName}</span>
                <button onClick={()=>signOut(auth)} className='logoutbutton'>Log out</button>
            </div>
        </div>
    );
}

export default Navbar;