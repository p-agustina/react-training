import React from 'react';

function IdCard(props) {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <div className='profileCont'>
      <div className="profilePic">
        <img src={props.picture} alt="profile image" />
      </div>
      <div className="profileInfo">
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lasName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height / 100}m</p>
        <p>Birth: {props.birth.toLocaleDateString('en-US', options)}</p>
      </div>
    </div>
  );
}

export default IdCard;
