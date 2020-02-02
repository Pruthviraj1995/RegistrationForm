import React, { useState,Fragment } from 'react';
import './styles.scss';
// import axios from 'axios';
import CSpopup from './CSpopup';

import VDpopup from './VDpopup';

const CandidateTable = (props) => {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});

  const showPopup = (obj) =>{
    console.log(obj)
    setDetail(obj)
    setShow(true);
  }

  const hidePopup = () => {
    setShow(false);
  }

    return (
      <Fragment>
        {show && <CSpopup {...detail} showPopup={showPopup} hidePopup={hidePopup}/>}
        <div className="candTable">
        {/* <div className='candDesc'> */}
        <div className="jobTitle">{props.role.label} 
        </div>
        <div className="jobDesc">
          List of candidates applied for Front-end developer job
        </div>
        <div className="listHeader flex-table">
          <div className="flex-row">Name</div>
          <div className="flex-row">Technical Skills</div>
          <div className="flex-row">Experience</div>
          <div className="flex-row">Applied Date</div>
          <div className="flex-row">View Details</div>
          <div className="flex-row">Update Application Status</div>
        </div>
        {props.filteredData.map((cd, id) => (
          <div className="listapplicants flex-table" key={id}>
            <div className="flex-row">{cd.name} </div>
            <div className="flex-row">{cd.skills}</div>
            <div className="flex-row">{cd.experience}</div>
            <div className="flex-row">{cd.appliedDate}</div>
            <div className="viewDetails flex-row"  onClick={() => showPopup(cd)}>
                <span>View Details</span> 
            </div>
            <div className="uAppStat flex-row">
              <div className="Shortlist"
                style={{
                  display:
                    cd.status === "shortlisted" || cd.status === "applied"
                      ? "block"
                      : "none",
                  cursor: "Pointer"
                }}
                onClick={() => props.handleUpdate(cd._id, "shortlisted")}
              >
                {cd.status === "shortlisted" ? "Shortlisted" : "Shortlist"}
              </div>
              <div
                style={{
                  display:
                    cd.status === "rejected" || cd.status === "applied"
                      ? "block"
                      : "none",
                  cursor: "Pointer"
                }}
                onClick={() => props.handleUpdate(cd._id, "rejected")}
              >
                {cd.status === "rejected" ? "Rejected" : "Reject"}
              </div>
            </div>
          </div>
        ))}
      </div>
      </Fragment>
      
    );
}

export default CandidateTable;