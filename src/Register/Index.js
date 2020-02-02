import React from 'react';
import { BrowserRouter as Router,
Switch, Route} from 'react-router-dom';

import Regpage from './Regpage';
import AdminDash from './AdminDash';
import Home from './Home';

const Index = () => {
    const roles = [
        {
          label:'Front-End Developer',
          value:'frontend_developer'
        },
        {
          label:'Node.js Developer',
          value:'node.js_developer'
        },
        {
          label:'Mean-Stack Developer',
          value:'mean_stack_developer'
        },
        {
          label:'Full-Stack Developer',
          value:'full_stack_developer'
        }
      ]

    return(
    <Router>
       <Switch>
           <Route exact path="/">
               <Home/> 
           </Route>
           <Route path="/RegistrationPage">
               <Regpage roles={roles}/>
           </Route>
           <Route path="/AdminDashboard">
               <AdminDash roles={roles}/>
           </Route>
       </Switch>
   </Router>
    )
}

export default Index;