import React from "react";
import Auth from "./users/auth";
import Login from "./users/login";
import Logout from "./users/logout";
import Home from "./home";
import Turkey from "./countries/turkey";
import Germany from "./countries/germany";
import ContainedButtons from './App';
import Ticket from './tickets/ticket';
import AviaTicket from './tickets/aviaTicket';
import DeleteAccount from "./users/deleteAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import GuardedRoute from "./guardedRoute";
import { useSelector } from 'react-redux'
import Italy from "./countries/italy";
import France from "./countries/france";
import Egypt from "./countries/egypt";
import Greece from "./countries/greece";
import Spain from "./countries/spain";
import MyTickets from "./users/myTickets";
import MyAccounts from "./users/myAccounts";
import MyProfile from "./users/myProfile";
import ChangeProfile from "./users/changeProfile";
import CheckPassword from "./users/checkPass";
import Sale from "./tickets/sale";

import SaleAdmin from "./admin/saleTicket";
import MyAviaTickets from "./users/myAviaTickets";
import AdminTicket from "./users/admin"
import AdminAviaTicket from "./users/adminAvia";

export default function App() {

  const store = useSelector((state) => state)

  return (
      
    <Router>
      <ContainedButtons />
        <Switch>

//----------------------------------------users---------------------------------------------

          <Route path="/users/auth" component={ Auth }/>
          <Route path="/users/login" component={ Login }/>
          <Route path="/users/logout" component={ Logout }/>
          <Route path="/users/deleteAccount" component={ DeleteAccount }/>

//----------------------------------------profile---------------------------------------------

          <Route path="/users/myAccounts/myTickets" component={ MyTickets }/>
          <Route path="/users/myAccounts/myAviaTickets" component={ MyAviaTickets }/>
          <Route path="/users/myProfile" component={ MyProfile }/>
          <Route path="/users/myAccounts" component={ MyAccounts }/>
          <Route path="/users/changeProfile" component={ ChangeProfile }/>
          <Route path="/users/checkPass" component={ CheckPassword }/>
          <Route path="/users/myTickets" component={ MyTickets }/>


//----------------------------------------admin---------------------------------------------

          <Route path="/admin/avia" component={ AdminAviaTicket }/>
          <Route path="/admin/ticket" component={ AdminTicket }/>

//---------------------------------------country---------------------------------------------

          <Route path="/tour/country/turkey" component={ Turkey }/>
          <Route path="/tour/country/italy" component={ Italy }/>
          <Route path="/tour/country/france" component={ France }/>
          <Route path="/tour/country/egypt" component={ Egypt }/>
          <Route path="/tour/country/greece" component={ Greece }/>
          <Route path="/tour/country/spain" component={ Spain }/>
          <Route path="/tour/country/germany" component={ Germany }/>

//---------------------------------------tickets---------------------------------------------

          <Route path="/tour/avia/ticket" component={ AviaTicket }/>  
          <Route path="/tour/tours" component={ Ticket }/>
          <Route path="/tour/sale" component={ Sale }/>

          <Route path="/admin/saleAdmin" component={ SaleAdmin }/>
{/* 
          <GuardedRoute path='/projects/newProject' component={ NewProject } auth={store.users.isAuth}/>
          <GuardedRoute path='/projects/showProjects' component={ ShowProjects } auth={store.users.isAuth}/> */}

//----------------------------------------home---------------------------------------------

          <Route path="/" component={ Home }/>
        </Switch>
    </Router>      
  );
}
 