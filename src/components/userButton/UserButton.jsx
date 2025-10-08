import { useState } from 'react';
import './userButton.css'
import Image from '../image/Image';
import apiRequest from '../../utils/apiRequest';
import { useNavigate } from 'react-router';

const UserButton = () => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    //TEMP
    const currentUser = true;

    const handleLogout = async () => {
        try{
            await apiRequest.post("/users/auth/logout", {});
            navigate("/auth");
        }catch(err){
            console.log(err);
        }
    }

    return currentUser ? (
        <div className="userButton">
            <Image path="/general/noAvatar.png" alt="" />
            <div onClick={() => setOpen((prev) => !prev)}>
                <Image path="/general/arrow.svg" alt="" className='arrow' />
            </div>
            {open && (
                <div className="userOptions">
                    <div className="userOption">Profile</div>
                    <div className="userOption">Setting</div>
                    <div className="userOption" onClick={handleLogout}>Logout</div>
                </div>
            )}
        </div>
    ) : (
        <a href="/" className="loginLink">
            Login / Sign Up
        </a>
    );
}

export default UserButton
