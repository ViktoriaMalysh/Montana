import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import CountryItaly from "./pages/countries/italy";
import CountryTurkey from "./pages/countries/turkey";
import CountryGermany from "./pages/countries/germany";
import CountryFrance from "./pages/countries/france";
import CountryEgypt from "./pages/countries/egypt";
import CountryGreece from "./pages/countries/greece";
import CountrySpain from "./pages/countries/spain";
import Login from "./pages/Login";
import Logout from "./pages/Login";
import Auth from "./pages/Auth";
import Tickets from "./pages/HotelTicket";

// import HotelTicket from "./pages/tickets/HotelTicket";
// import AviaTicket from "./pages/tickets/AviaTicket";


import FirstPage from "./pages/FirstPage";
import HomePage from "./pages/HomePage";

export default function AppNav() {
  const store = useSelector((state) => state);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (flag) {
      setTimeout(() => {
        setFlag(false);
      }, 1500);
    }
  }, [flag]);

  if (flag) {
    return <FirstPage />;
  }

  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/country/turkey" element={<CountryTurkey />} />
        <Route path="/country/italy" element={<CountryItaly />} />
        <Route path="/country/france" element={<CountryFrance />} />
        <Route path="/country/egypt" element={<CountryEgypt />} />
        <Route path="/country/greece" element={<CountryGreece />} />
        <Route path="/country/spain" element={<CountrySpain />} />
        <Route path="/country/germany" element={<CountryGermany />} />


        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/ticket/hotelTicket" element={<HotelTicket />} /> */}
        {/* <Route path="/ticket/aviaTicket" element={<AviaTicket />} /> */}

        <Route path="/tickets" element={<Tickets />} />

        
        <Route path="/" element={<HomePage />} />
        
        
  
        {/* 
          <GuardedRoute path='/projects/newProject' component={ NewProject } auth={store.users.isAuth}/>
          <GuardedRoute path='/projects/showProjects' component={ ShowProjects } auth={store.users.isAuth}/> */}
        {/* <Route path="/" component={ Home }/> */}
      </Routes>
    </BrowserRouter>
  );
}
