import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Tabs, Tab } from "react-bootstrap";
import "../App.css";
import { Link, StaticRouter, useHistory } from "react-router-dom";
import MyTickets from "../users/myTickets";
import MyAviaTickets from "../users/myAviaTickets";

import { Button, Spinner, Form, Card } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  AVIA_FIND,
  AVIA_SHOW_MY_TICKETS,
  COUNT_AVIA_TICKET,
  COUNT_HOTEL_TICKET,
  COUNT_TICKET,
  REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET,
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  SHOW_MY_TICKETS,
} from "../redux/types";
import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { deleteAviaTickets, showMyAviaTickets } from "../redux/actionAvia";

function MyAccounts() {
  const dispatch = useDispatch();
  let history = useHistory();

  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);
  const [deleteAviaTicket, setDeleteAviaTicket] = useState(false);
  const [deleteHotelTicket, setDeleteHotelTicket] = useState(false);

  const [key, setKey] = useState("home");

  useEffect(() => {
    dispatch({ type: AVIA_FIND, payload: false });
    dispatch({ type: SHOW_MY_TICKETS, payload: [{}] });
    dispatch({ type: AVIA_SHOW_MY_TICKETS, payload: [{}] });
    console.log("useEffect");
    dispatch(showMyTickets(store.users.userId));
    dispatch(showMyAviaTickets(store.users.userId));
    dispatch({
      type: COUNT_HOTEL_TICKET,
      payload: store.aviaTickets.showMyTickets.length,
    });
    dispatch({
      type: COUNT_AVIA_TICKET,
      payload: store.tickets.showMyTickets.length,
    });
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
      // setDelete(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (deleteHotelTicket) {
      dispatch({ type: SHOW_MY_TICKETS, payload: [{}] });

      dispatch(showMyTickets(store.users.userId));
      setTimeout(() => {
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
        setDeleteHotelTicket(false);
      }, 1000);
    }
  }, [deleteHotelTicket]);

  useEffect(() => {
    if (deleteAviaTicket) {
      dispatch({ type: AVIA_SHOW_MY_TICKETS, payload: [{}] });

      dispatch(showMyAviaTickets(store.users.userId));
      setTimeout(() => {
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET });
        setDeleteAviaTicket(false);
      }, 1000);
    }
  }, [deleteAviaTicket]);

  const handleDeleteAviaTicket = (id) => {
    dispatch(deleteAviaTickets(id));
    setDeleteAviaTicket(true);
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET });
    }, 1000);
  };

  const handleDeleteHotelTicket = (id) => {
    dispatch(deleteTickets(id));
    setDeleteHotelTicket(true);
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
    }, 1000);
  };

  return (
    <div className="tabsdiv">
      <Tabs
        justify
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        variant="tabs"
        style={{ marginLeft: "25em", marginRight: "25em" }}
      >
        <Tab
          eventKey="home"
          title="My Avia Tickets"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {store.aviaTickets.find ? (
            <div className="one">
              <div className="form71">
                <p className="pMessage">You have`t any tickets...</p>
                <br />
                <p className="pMessage2">Go to avia ticket search?</p>

                <Button
                  variant="success"
                  onClick={() => history.push("/tour/avia/ticket")}
                >
                  Search avia ticket
                </Button>
              </div>
            </div>
          ) : (
            <div className="one">
              <p className="countTickets">
                Number of booked tickets:{" "}
                <span style={{ fontStyle: "italic" }}>
                  {store.users.countHotelTickets}
                </span>
              </p>
              <Form>
                {store.aviaTickets.showMyTickets.map((item, key) => (
                  <Card
                    bg="header"
                    text="black"
                    style={{
                      width: "50rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    className="mb-2"
                  >
                    <Card.Header>Ticket id: {item.id}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Airlines:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.airlines}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        Cabin class:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.cabin_class}
                        </span>
                      </Card.Text>
                      <Card.Title>
                        Departure date:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.departure_date}
                        </span>
                      </Card.Title>
                      <Card.Text>
                        Departure time:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.departure_time}
                        </span>
                      </Card.Text>
                      <Card.Title>
                        Arrival date:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.arrival_date}
                        </span>
                      </Card.Title>
                      <Card.Text>
                        Arrival time:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.arrival_time}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        Trip duration:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.trip_duration}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        Num stops:{" "}
                        {item.num_stops === 0 ? (
                          <span style={{ fontStyle: "italic" }}>
                            without stops
                          </span>
                        ) : (
                          <span style={{ fontStyle: "italic" }}>
                            {item.num_stops}
                          </span>
                        )}
                      </Card.Text>
                      <Card.Text>
                        Price:{" $"}
                        <span style={{ fontStyle: "italic" }}>
                          {item.price}
                        </span>
                      </Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteAviaTicket(item.id)}
                      >
                        Cancel Booking
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
                <br></br>
              </Form>
            </div>
          )}
        </Tab>
        <Tab eventKey="profile" title="My Hotel Tickets">
          {store.tickets.find ? (
            <div className="one">
              <div className="form71">
                <p className="pMessage">You have`t any avia tickets...</p>
                <br />
                <p className="pMessage2">Go to ticket search?</p>

                <Button
                  variant="success"
                  onClick={() => history.push("/tour/tours")}
                >
                  Search ticket
                </Button>
              </div>
            </div>
          ) : (
            <div className="one">
              <p className="countTickets">
                Number of booked tickets: {store.users.countAviaTickets}
              </p>
              <Form
              // onSubmit={handleSubmit}
              >
                {store.tickets.showMyTickets.map((item, key) => (
                  <Card
                    bg="header"
                    text="black"
                    style={{
                      width: "50rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    className="mb-2"
                  >
                    <Card.Header>Ticket id: {item.id}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Country:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.country}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        Address:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.address}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        Locality:{" "}
                        <span style={{ fontStyle: "italic" }}>
                          {item.locality}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        Price: $
                        <span style={{ fontStyle: "italic" }}>
                          {item.price}
                        </span>
                      </Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteHotelTicket(item.id)}
                      >
                        Cancel Booking
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
                <br></br>
              </Form>
            </div>
          )}
        </Tab>
      </Tabs>
    </div>
  );
}

export default MyAccounts;
