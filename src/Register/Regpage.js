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
    const [error, setError] = useState(false);
    
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
      if(!data.name){
        e.preventDefault();
        alert("Name is Required")
        return;
      }

      if(!data.email || !data.email.includes('@') || !data.email.includes('.')){
        e.preventDefault();
        alert("Enter valid email")
        return;
      }

      if(!data.phone || !(data.phone.length === 10)){
        e.preventDefault();
        alert("Phone Length should be 10 digits")
        return;
      }

      if(!data.jobTitle){
        e.preventDefault();
        alert("Jobtitle is Required")
        return;
      }

      if(!data.experience){
        e.preventDefault();
        alert("Experience is Required")
        return;
      }

      if(!data.skills){
        e.preventDefault();
        alert("Skills are Required")
        return;
      }

      console.log("submit");
      e.preventDefault();
      formhandler();
      console.log(data);


     }

        return (
          <div className="regHeader">
            <div className="header">Apply for job</div>
            <form className="regPage" onSubmit={handlesubmit}>
              <div className="field">
                <span>Full name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={data.name}
                  name="name"
                  onChange={handlechange}
                />
              </div>
              <div className="field">
                <span>Email address</span>
                <input
                  type="text"
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
                  placeholder="9876512345"
                  value={data.phone}
                  name="phone"
                  onChange={handlechange}
                />
              </div>
              <div className="field">
                <span>Applying for job</span>
                <select name="jobTitle" value={data.jobTitle} onChange={handlechange}>
                  <option value="">--select--</option>
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
                  placeholder="2 years, 3 months"
                  value={data.experience}
                  name="experience"
                  onChange={handlechange}
                />
              </div>
              <div className="field">
                <span>Technical Skills </span>
                <textarea
                  placeholder="HTML, CSS, Javascript"
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