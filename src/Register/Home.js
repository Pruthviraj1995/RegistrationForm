import React from 'react';

import './popupStyles.scss';
import {NavLink} from 'react-router-dom';

const Home = () => {
return(
     <div className='Homepage'>
        <div className='RegisterPage'>
        <NavLink exact strict to='/RegistrationPage' className="reghome">RegistrationPage</NavLink>
        </div>
        <div className='AdminDashboard'>
        <NavLink to='/AdminDashboard' className="adminhome">AdminDashboard</NavLink>
        </div>
     </div>
)
}   

export default Home;