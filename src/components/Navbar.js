// import {React, useState } from 'react';

// // import '../CssFolder/wave.css'
// import { MdLogout } from "react-icons/md";
// import { useLocation, useNavigate } from 'react-router-dom'
// import { useToast } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import Logo from "../assets/logo.png"
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';

// const Navbar = () => {
//     const location = useLocation();
//     const toast = useToast();
//     const navigate = useNavigate();
//     const {user, isAuthenticated} = useAuth0();


//     const generateUserImgUrl = (firstName) => {
//         return `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} &backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600`;
//     };


   

//     const logOutUser = () => {
//         toast({
//             title: 'Logged Out Successfully',
//             status: 'success',
//             duration: 5000,
//             isClosable: true,
//             position: 'bottom',
//         });
//         localStorage.removeItem('token');
//         navigate('/login');

//     }

//     return (
//         <>
//         <div className='d-flex justify-content-center align-items-center' id='main-nav-box' style={{ height: '95px', width: '100%' }}>
//             <div className="fog" />
//             {location.pathname === '/posts' && (
//                 <div style={{ flex: 1 }}></div>
//             )}
//             {/* <div className='heading-title' style={{ flex: 3, textAlign: 'center' }}>Banao-Mern-Task2</div> */}
//             <div className="d-flex  w-100 max-w-100 align-items-center justify-content-between">
//                 <Link to="/Posts">
//                     <img src={Logo} alt="Logo" style={{ "height": "4rem", "padding": "1rem", "marginLeft": "17%" }} />
//                 </Link>
//             </div>

         

//             {location.pathname === '/posts' && (
//                 <div className='d-flex justify-content-center align-items-center logout-icon' style={{"flex":"1","marginRight":"10%","justifyContent":"space-between"}}>
//                     <MdLogout style={{ cursor: 'pointer' }} onClick={logOutUser} />
//                     Logout
//                 </div>
//             )}
//         </div >
//         </>
//     )
// }

// export default Navbar




import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({ username }) => {
    const navigate = useNavigate();
    const toast = useToast();

   
    const token = localStorage.getItem('token');
    if (token) {
    const tokenParts = token.split('.');    
    const encodedPayload = tokenParts[1];
    const decodedPayload = atob(encodedPayload); 
    const { username, userId } = JSON.parse(decodedPayload);
    console.log('Username:', username);
    console.log('User ID:', userId);
} else {
    console.log('Token not found in localStorage');
}


    const logOutUser = () => {
        toast({
            title: 'Logged Out Successfully',
            status: 'success',
            duration: 500,
            isClosable: true,
            position: 'top',
        });
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' id='main-nav-box' style={{ height: '95px', width: '100%' }}>
                <div className="fog" />
                <div className="d-flex  w-100 max-w-100 align-items-center justify-content-between">
                    <Link to="/Posts">
                        <img src={Logo} alt="Logo" style={{ "height": "4rem", "padding": "1rem", "marginLeft": "17%" }} />
                    </Link>
                </div>

                <div className='d-flex justify-content-center align-items-center logout-icon' style={{ "flex": "1", "marginRight": "10%", "justifyContent": "space-between" }}>
                    <MdLogout style={{ cursor: 'pointer',fontSize:'2rem',marginRight:'1rem' }} onClick={logOutUser} />
                    Logout
                </div>
                
            </div >
        </>
    )
}

export default Navbar;


