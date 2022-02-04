import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Spinner, Button, Form, Col } from "react-bootstrap";
import { useSelector, connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profileSettings.css";
import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { DELETE } from "../redux/types";
import { Modal } from "bootstrap";
import { Link } from "react-router-dom";

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
      <button className='button7'>button1</button>
      <button className='button8'>button2</button>
      <div className="div-profile-settings">
        <nav className="nav-change-profile">
          <Link
            className='nav-link-profile'
            style={{ textDecoration: "none", color: "black" }}
            to={"/country/italy"}
          >
            <div className='div-nav-link'>Profile</div>
          </Link>
        </nav>
        <img
          alt="Avatar"
          className="img-avatar-change"
          src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        />
        <div className="div-change-myself">
          <p className="p-change-myself">
            Name:{" "}
            <input
              type="text"
              name="name"
              defaultValue={store.users.userName}
            ></input>
          </p>

          <p className="p-change-myself">
            Surname:{" "}
            <input
              type="text"
              name="surname"
              defaultValue={store.users.userSurname}
            ></input>
          </p>

          <p className="p-change-myself">
            Country:{" "}
            <input
              type="text"
              name="email"
              defaultValue={store.users.userCountry}
            ></input>
          </p>

          <p className="p-change-myself">
            Email:{" "}
            <input
              type="text"
              name="email"
              defaultValue={store.users.userEmail}
            ></input>
          </p>

          <Row className="align-items-center">
            <Col xs="auto" className="my-1">
              <Form.Label>
                <h4 className="p-change-myself">Date of Birth</h4>
              </Form.Label>
            </Col>
            <Col xs="auto" className="my-1">
              <input
                type="date"
                id="start"
                name="trip-start"
                defaultValue="2020-07-22"
                min="1960-01-01"
                max="2018-12-31"
              ></input>{" "}
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs="auto" className="my-1">
              <Form.Label>
                <h4 className="p-change-myself">Choose Gender</h4>
              </Form.Label>
            </Col>
            <Col xs="auto" className="my-1">
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                defaultValue={store.users.userGender}
                // onChange={(e) => setGender(e.target.value)}
              >
                <option className="option-style" value="male">
                  Mele
                </option>
                <option className="option-style" value="femele">
                  Femele
                </option>
              </Form.Select>
            </Col>
          </Row>

          <p className="p-change-myself">
            Phone:{" "}
            <input
              className="input-change-profile"
              type="text"
              name="phone"
              defaultValue={store.users.userPhone}
            ></input>
          </p>
        </div>

        {/* <button
          variant="warning"
          className="button-settings"
          // onClick={() => navigate("/users/checkPass")}
        >
          Profile Settings
        </button> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps)(ProfileSettings);
