import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner, Form, Card, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  REQUESTED_SUCCEEDED_CLOSE_USER,
} from "../redux/types";
import { useHistory } from "react-router-dom";
import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { Alert } from "../components/Alert";
import "../App.css";
import MyAccounts from "./myAccounts";
import { fetchVerifyToken } from "../redux/actionUsers";

function MyTickets() {
  const [deleteT, setDelete] = useState(false);
  const [role, setRole] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    if (store.users.userRole === 1) {
      setRole("user");
    } else if (store.users.userRole === 2) {
      setRole("admin");
    }
  }, []);

  if (loading) {
    return (
      <div className="form1111">
        <Spinner animation="border" variant="danger" role="status"></Spinner>
      </div>
    );
  }

  // if (store.tickets.find) {
  //   return (
  //     <div>
  //       <MyAccounts />
  //       <div className="form1111">
  //         <p>You haven`t any tickets</p>
  //       </div>
  //     </div>
  //   );
  // }

  const changeProfile = (id) => {
    history.push("/users/checkPass");
  };

  return (
    <div className="firstform9">
      <div className="form119">
        <div className="image9">
          <img
            alt="Avatar"
            class="avatar"
            src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
          />
        </div>
        <div className="nameAndSurname">
          <p className="name">
            {store.users.userName}
            {"  "}
            {store.users.userSurname}
          </p>
          <p className="country">{store.users.userCountry}</p>

          <Button
            variant="success"
            onClick={() => history.push("/users/checkPass")}
          >
            Profile Settings
          </Button>
        </div>
        <div className="myself">
          <p>
            Gender:{" "}
            <span className="myselfspan" style={{ fontStyle: "italic" }}>
              {store.users.userGender}
            </span>
          </p>

          <p>
            Age:{" "}
            <span className="myselfspan" style={{ fontStyle: "italic" }}>
              {store.users.userAge} year
            </span>
          </p>

          <p>
            Email:{" "}
            <span className="myselfspan" style={{ fontStyle: "italic" }}>
              {store.users.userEmail}
            </span>
          </p>

          <p>
            Phone:{" "}
            <span className="myselfspan" style={{ fontStyle: "italic" }}>
              +380{store.users.userPhone}
            </span>
          </p>

          <Button
            variant="warning"
            onClick={() => history.push("/users/logout")}
          >
            Logout
          </Button>
          <br />
          <Button
            variant="danger"
            onClick={() => history.push("/users/deleteAccount")}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  showMyTickets,
  deleteTickets,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);
