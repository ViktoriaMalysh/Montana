import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Spinner, Button } from "react-bootstrap";
import { useSelector, connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { DELETE } from "../redux/types";

function Profile() {
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


  const buyTicket = (id) => {
    //payment metod
  }

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
          <p className="p-profile-country">{store.users.userCountry}</p>

          <p className="p-profile-myself">{store.users.userEmail}</p>

          {more ? (
            <div className="div-profile-myself">
              <p className="p-profile-myself">
                Gender:{" "}
                <span className="span-myself" style={{ fontStyle: "italic" }}>
                  {store.users.userGender}
                </span>
              </p>

              <p className="p-profile-myself">
                Date Of Birth:{" "}
                <span className="span-myself" style={{ fontStyle: "italic" }}>
                  {store.users.dateOfBirth}
                </span>
              </p>

              <p className="p-profile-myself">
                Age:{" "}
                <span className="span-myself" style={{ fontStyle: "italic" }}>
                  {store.users.userAge} year
                </span>
              </p>

              <p className="p-profile-myself">
                Phone:{" "}
                <span className="span-myself" style={{ fontStyle: "italic" }}>
                  +380{store.users.userPhone}
                </span>
              </p>
            </div>
          ) : (
            <div></div>
          )}

          <Button
            variant="link"
            className="button-more"
            onClick={() => handleMore()}
          >
            {!more ? "More Information..." : "Less Information"}
          </Button>
        </div>
        <button
          variant="warning"
          className="button-settings"
          onClick={() => navigate("/settings/profile")}
        >
          Profile Settings
        </button>

        <div className="div-profile-tickets">
          <p className="p-profile-ticket">Booked Tickets: </p>
          <Row xs={1} md={2} className="g-4 ">
            {store.tickets.showMyTickets.map((item, key) => (
              <Card className="card-ticket-profile" key={item.id}>
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title>{item.country}</Card.Title>
                  <Card.Text>
                    Address:{" "}
                    <span style={{ fontStyle: "italic" }}>{item.address}</span>
                  </Card.Text>
                  <Card.Text>
                    Locality:{" "}
                    <span style={{ fontStyle: "italic" }}>{item.locality}</span>
                  </Card.Text>
                  <Card.Text>
                    Price:{" "}
                    <span style={{ fontStyle: "italic" }}>
                      {"$" + item.price}
                    </span>
                  </Card.Text>
                  <button
                    className="button-cancel-book"
                    onClick={() => cancelBook(item.id)}
                  >
                    Cancel Book
                  </button>
                  <button
                    className="button-settings"
                    onClick={() => buyTicket(item.id)}
                  >
                    Buy a Ticket
                  </button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </div>
        <div className="div-button-delete">
          <button
            className="button-settings"
            onClick={() => navigate("/settings/profile")}
          >
            Profile Settings
          </button>
          {/* <button
            variant="warning"
            className="button-delete"
            onClick={() => navigate("/deleteAccount")}
          >
            Delete Account
          </button> */}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps)(Profile);
