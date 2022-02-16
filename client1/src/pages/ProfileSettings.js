import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Spinner, Button, Form, Col } from "react-bootstrap";
import { useSelector, connect, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./profileSettings.css";
import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { DELETE } from "../redux/types";

import NavBar from "../components/NavBar";
import PublicProfile from "../components/PublicProfile";
import { Modal } from "bootstrap";
import { Link } from "react-router-dom";
import PublicEmail from "../components/PublicEmail";
import PublicPassword from "../components/PublicPassword";

function ProfileSettings() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleChange = () => {
    setShow(false);
  };

  return (
    <div className="div-change-profile">
      <div className="div-prof-sett-block1">
        <img
          alt="Avatar"
          className="img-avatar-block1"
          src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        />
        <div className="div-block1-title">
          <p className="p-block1-title">
            {store.users.userName} {store.users.userSurname}
          </p>
          <p className="p-block1-text">Your personal account</p>
        </div>
      </div>

      <button
        className="button-prof-sett-block1"
        onClick={() => navigate("/profile")}
      >
        Go to your personal profile
      </button>
      <div className="div-profile-settings">
        <nav className="nav-change-profile">
          <NavBar />
        </nav>
        <Routes>
          <Route path="profile" element={<PublicProfile />} />
          <Route path="email" element={<PublicEmail />} />
          <Route path="password" element={<PublicPassword />} />
        </Routes>
        {/* <PublicProfile /> */}

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps)(ProfileSettings);
