import React from 'react';
import profileImage from '../../assets/images/developer.jpg';


const AuthoritiesProfileCard = () => {
  return (
    <div className="authoritiesContainer">
        <div className="profileImage">
            <img src={profileImage} alt="profileImage" width="150px"/>
        </div>
        <div className="authoritiesTitle">
            <h6><strong>Senior Frontend</strong></h6>
        </div>
        <div className="name">
        <label><strong>Madan Lal</strong></label> 
        </div>
    </div>
  )
}

export default AuthoritiesProfileCard