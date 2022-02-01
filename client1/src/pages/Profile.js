import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Spinner, Button } from "react-bootstrap";
import { useSelector, connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);
  const [more, setMore] = useState(false);

  useEffect(() => {
    // dispatch({ type: SHOW_PROJECT, payload: [{}] });
    // dispatch(fetchShowProject(store.users.userId));
    // dispatch({
    //   type: USER_COUNT_PROJECT,
    //   payload: store.projects.showProject.length,
    // });
  }, []);

  if (loading) {
    return (
      <div className="form1111">
        <Spinner animation="border" variant="danger" role="status"></Spinner>
      </div>
    );
  }

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
            {store.users.userName}Name
            {"  "}
            {store.users.userSurname}Surname
          </p>
          <p className="p-profile-country">{store.users.userCountry} Ukraine</p>

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
            More Information...
          </Button>
        </div>
        <button
          variant="warning"
          className="button-settings"
          // onClick={() => navigate("/users/checkPass")}
        >
          Profile Settings
        </button>

        <div className="div-profile-tickets">
          <p className="p-profile-ticket">Booked Tickets: </p>
          <Row xs={1} md={2} className="g-4 ">
            {store.tickets.showTickets.map((item, key) => (
              <Card className='card-ticket' style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    item.optimizedThumbUrls &&
                    item.optimizedThumbUrls.srpDesktop
                  }
                />
                <Card.Body>
                  <Card.Title>name</Card.Title>
                  <Card.Text>
                    Address:{" "}
                    <span style={{ fontStyle: "italic" }}>Address</span>
                  </Card.Text>
                  <Card.Text>
                    Locality:{" "}
                    <span style={{ fontStyle: "italic" }}>locality</span>
                  </Card.Text>
                  <Card.Text>
                    Price: <span style={{ fontStyle: "italic" }}>price</span>
                  </Card.Text>
                  <Button
                    variant="primary"
                    // onClick={() =>
                    //   createTicket(
                    //     item.name,
                    //     item.address && item.address.streetAddress,
                    //     item.address && item.address.locality,
                    //     item.ratePlan &&
                    //       item.ratePlan.price &&
                    //       item.ratePlan.price.current
                    //   )
                    // }
                  >
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </div>
        {/* <div className="div-button-delete">
        <button
          variant="warning"
          // onClick={() => navigate("/users/deleteAccount")}
        >
          Delete Account
        </button>
      </div> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps)(Profile);
