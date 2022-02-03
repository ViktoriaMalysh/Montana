import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Spinner, Button } from "react-bootstrap";
import { useSelector, connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { DELETE } from "../redux/types";

function ProfileSettings() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);
  const [more, setMore] = useState(false);

  useEffect(() => {
    dispatch(showMyTickets(store.users.userId));
  }, []);

  useEffect(() => {
    if (store.tickets.delete) {
      dispatch(showMyTickets(store.users.userId));
      setTimeout(() => {
        dispatch({ type: DELETE, payload: false });
      }, 600);
    }
  }, [store.tickets.delete]);

  if (loading) {
    return (
      <div className="form1111">
        <Spinner animation="border" variant="danger" role="status"></Spinner>
      </div>
    );
  }

  const cancelBook = (id) => {
    dispatch(deleteTickets(id));
  };

  const handleMore = () => {
    console.log(more);
    if (!more) setMore(true);
    else if (more) setMore(false);
  };

  return (
    <div className="div-page-profile">
      <div className="div-profile">
        <img
          alt="Header"
          className="img-header"
          src="https://fs.tonkosti.ru/sized/c1600x400/0k/5p/0k5pzsquv480ggkckscogwcok.jpg"
        />
        <img
          alt="Avatar"
          className="img-avatar"
          src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        />
        <div className="div-myself">
          <p className="p-profile-name">
            {store.users.userName}
            {"  "}
            {store.users.userSurname}
          </p>
          <input
            type="text"
            name="name"
            defaultValue={store.users.userName}
          ></input>
          <input
            type="text"
            name="surname"
            defaultValue={store.users.userSurname}
          ></input>
          
          <input
            type="text"
            name="country"
            defaultValue={store.users.userCountry}
          ></input>

          <input
            type="text"
            name="country"
            defaultValue={store.users.userGender}
          ></input>

          <input
            type="text"
            name="country"
            defaultValue={store.users.dateOfBirth}
          ></input>

          <input
            type="text"
            name="country"
            defaultValue={store.users.userPhone}
          ></input>


          <Button
            variant="link"
            className="button-more"
            onClick={() => handleMore()}
          >
            {!more ? "More Information..." : "Less Information"}
          </Button>
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
