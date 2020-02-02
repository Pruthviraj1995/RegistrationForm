import React from 'react';
import Popup from 'reactjs-popup';
import './styles.scss'; 

const VDpopup = (props) => (
    <Popup trigger={<button className='popupbtn1' style={{cursor: 'Pointer'}}> View Details </button>} modal>
        {
            close => (
                <div className='modal'>
                    <a className='close' href="/" onClick={close}>
                        &times;
                    </a>
                    <div className='header'>{props.llist.name} Profile</div>
                    <div className='content'>
                        <br />
                        <div className='contNUm'>
                            <span>Contact number</span>
                            <div>{props.llist.phone}</div>
                        </div>
                        <div className='email'>
                            <span>Email</span>
                            <div>{props.llist.email}</div>
                        </div>
                        <div className='skills'>
                            <span>Skills</span>
                            <div>{props.llist.skills}</div>
                        </div>
                        <div className='exp'>
                            <span>Experience</span>
                            <div>{props.llist.experience}</div>
                        </div>
                    </div>
                    <div className='footer'>
                            <button className='popupbtn2' onClick={() => {close();}}>close</button>
                    </div>
                </div>
            )
        }
    </Popup>
);

export default VDpopup;