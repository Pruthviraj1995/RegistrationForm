import React, {useState} from 'react';
import './styles.scss';
import axios from 'axios';

const Regpage = (props) => {
    const [data, setData] = useState({
        name: '', 
        email: '', 
        phone: '', 
        skills: '', 
        jobTitle: '', 
        experience: ''
    });
    
    const handlechange =(e) => {
        let newdata={...data}
        newdata[e.target.name]=e.target.value
        setData(newdata);
        console.log(e.target.value);
    };
    
    const formhandler = (e) => {
        // console.log(data)
          axios
            .post("https://sodiotask.herokuapp.com/User/Registration", data)
            .then(function(response) {
              console.log(response, ">>>>");
              setData({
                name: "",
                email: "",
                phone: "",
                skills: "",
                jobTitle: "",
                experience: ""
              });
              console.log("sdd");
            })
            .catch(function(error) {
              console.log(error);
            });
          
        }

    const handlesubmit = (e) => {
      if(data.name && data.email && data.phone && data.skills && data.jobTitle && data.experience !== ""){
        console.log("submit");
        e.preventDefault();
        formhandler();
        console.log(data);
      }else{
        e.preventDefault();
        console.log("error");
      }
     }

        return (
          <div className="regHeader">
            <div className="header">Apply for job</div>
            <form className="regPage" onSubmit={handlesubmit}>
              <div className="field">
                <span>Full name</span>
                <input
                  type="text"
                  placeholder="Ex. John Doe"
                  value={data.name}
                  name="name"
                  onChange={handlechange}
                />
              </div>
              <div className="field">
                <span>Email address</span>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={data.email}
                  name="email"
                  onChange={handlechange}
                />
              </div>
              <div className="field">
                <span>Contact Number</span>
                <input
                  type="number"
                  placeholder="+91 9876512345"
                  value={data.phone}
                  name="phone"
                  onChange={handlechange}
                />
              </div>
              <div className="field">
                <span>Applying for job</span>
                <select name="jobTitle" onChange={handlechange}>
                  <option>--select--</option>
                  {
                  props.roles.map((el, id)=>(
                      <option key={id} value={el.value}>{el.label}</option>
                  ))
                  } 
                </select>
              </div>
              <div className="field">
                <span>Experience</span>
                <input
                  type="text"
                  placeholder="Experience(2 years, 3 months)"
                  value={data.experience}
                  name="experience"
                  onChange={handlechange}
                />
              </div>
              <div className="field">
                <span>Technical Skills </span>
                <textarea
                  placeholder="Technical Skills"
                  rows="5"
                  cols="40"
                  value={data.skills}
                  name="skills"
                  onChange={handlechange}
                />
              </div>
              <div className="submitBtn">
                <button type="submit" className="sendButton">
                  Send Application
                </button>
              </div>
            </form>
          </div>
        );
};

export default Regpage;