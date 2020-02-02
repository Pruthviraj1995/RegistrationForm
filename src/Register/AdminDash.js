import React,{useState, useEffect} from 'react';
import CandidateTable from './CandidateTable';
import './styles.scss';
import axios from 'axios';

const AdminDash = (props) => {

    const [list, setList] = useState([]);
    const [role, setRole] = useState({});
    // const [bool, setBool] = useState(true);

    // const currentdate = () => {
    //     var date = new Date();
    //     var day = date.getDate();
    //     var month = date.getMonth() + 1;
    //     var year = date.getFullYear();
    //     var today = day + '/' + month + '/' + year;
    //     return today;
    // }

    const getdata = () => {
      axios
        .get("https://sodiotask.herokuapp.com/User/UsersDetails")
        .then(response => {
          console.log(response.data.data, "get>>>");
          setList(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const handleUpdate = (id, status) => {
      const statuschange = {
        status: status
      };
      axios
        .put(
          "https://sodiotask.herokuapp.com/User/Update/UserDetails/" + id,
          statuschange
        )
        .then(()=>getdata())
        .catch(error => {
          console.log(error);
        });
    };

    useEffect(() => {
      getdata();
    }, []); 

    const handleFilter = (list, role) => {
        var listdata = list.filter(lst => {
          if(role.value){
            return lst.jobTitle === role.value
          }else{
            return true
          }
          
        });
        return listdata;
    }

    return (
      <div className="adminDash">
        <div className="admboard">
          <div className="admHeader">Admin Dashboard</div>
          <div className="filter">
            {
              props.roles.map((el, id)=>(
                <div key={id} onClick={()=>setRole(el)} className={role.value === el.value?'filtered':''}>{el.label}</div>
              ))
            }
          </div>
        </div>
        <div>
          <CandidateTable
            // DeveloperRole={DeveloperRole}
            role={role}
            list={list}
            handleUpdate={handleUpdate}
            // handleFilter={list.filter(lst => lst.jobTitle === role)}
            filteredData={handleFilter(list, role)}
          />
        </div>
      </div>
    );
}

export default AdminDash;