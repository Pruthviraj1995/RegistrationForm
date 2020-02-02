import React from 'react';
import './popupStyles.scss';

const CSpopup = (props) => {
  return (
    // <div className=""
    <div className="modal">
      <div className="modalcomp">
      <div className="headerr">
        <h2>{props.name} Profile</h2>
        <span className="closeIcon" onClick={props.hidePopup} style={{cursor: 'pointer'}}>X</span>
      </div>
      {
        <div className="details">
          <div>
          <label>ContactDetails </label>
          <span>{props.phone}</span>
          </div>
          <div>
          <label>Email </label>
          <span>{props.email}</span>
          </div>
          <div>
          <label>Skills </label>
          <span>{props.skills}</span>
          </div>
          <div>
          <label>Experience </label>
          <span>{props.experience}</span>
          </div>
        </div>
      }
      
      <button type="button" onClick={props.hidePopup} style={{cursor: 'pointer'}}>
        Close
      </button>
      </div>
    </div>
  );
}

export default CSpopup;