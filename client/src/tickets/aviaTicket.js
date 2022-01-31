import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner, Form, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  AVIA_RESERVED,
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  SHOW_TICKETS,
} from "../redux/types";
import { addAviaTicket } from "../redux/actionAvia";
import { Alert } from "../components/Alert";
import { useHistory } from "react-router";
import "../App.css";

function Tickets() {
  const [way, setWay] = useState("");
  const [airlines, setAirlines] = useState("");
  const [date, setDate] = useState("");
  const [cabinClass, setClass] = useState("");

  let history = useHistory();
  const [ticket, setTicket] = useState({
    num_stops: 0,
    price: 0,
    trip_duration: "",
    departure_date: "mm/dd/yyyy",
    departure_time: "00:00 AM",
    arrival_time: "00:00 AM",
    cabin_class: "",
    airlines: "",
    arrival_date: "mm/dd/yyyy",
  });

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    if (store.aviaTickets.reserved === "reserved") {
      setTimeout(() => {
        history.push("/tour/tours");
        dispatch({ type: AVIA_RESERVED, payload: "processed" });
      }, 400);
    }
  }, [store.aviaTickets.reserved]);

  const data = [
    {
      num_stops: 0,
      price: 160,
      trip_duration: "1 hr 36 min",
      departure_date: date,
      departure_time: "10:15 AM",
      arrival_time: "11:51 AM",
      cabin_class: cabinClass,
      airlines: airlines,
      arrival_date: date,
    },
    {
      num_stops: 1,
      price: 145,
      trip_duration: "2 hr 10 min",
      departure_date: date,
      departure_time: "03:10 AM",
      arrival_time: "05:20 AM",
      cabin_class: cabinClass,
      airlines: airlines,
      arrival_date: date,
    },
    {
      num_stops: 0,
      price: 180,
      trip_duration: "1 hr 25 min",
      departure_date: date,
      departure_time: "02:35 PM",
      arrival_time: "04:00 PM",
      cabin_class: cabinClass,
      airlines: airlines,
      arrival_date: date,
    },
    {
      num_stops: 1,
      price: 178,
      trip_duration: "1 hr 45 min",
      departure_date: date,
      departure_time: "06:05 PM",
      arrival_time: "07:50 PM",
      cabin_class: cabinClass,
      airlines: airlines,
      arrival_date: date,
    },
    {
      num_stops: 2,
      price: 125,
      trip_duration: "2 hr 25 min",
      departure_date: date,
      departure_time: "09:55 AM",
      arrival_time: "12:20 AM",
      cabin_class: cabinClass,
      airlines: airlines,
      arrival_date: date,
    },
    {
      num_stops: 0,
      price: 165,
      trip_duration: "1 hr 40 min",
      departure_date: date,
      departure_time: "01:15 AM",
      arrival_time: "02:55 AM",
      cabin_class: cabinClass,
      airlines: airlines,
      arrival_date: date,
    },
  ];

  if (loading) {
    return (
      <div className="form1111">
        <Spinner animation="border" variant="danger" role="status"></Spinner>
      </div>
    );
  }

  const createTicket = (
    airlines,
    cabin_class,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    trip_duration,
    num_stops,
    price
  ) => {
    setTicket({
      airlines: airlines,
      cabin_class: cabin_class,
      departure_date: departure_date,
      departure_time: departure_time,
      arrival_date: arrival_date,
      arrival_time: arrival_time,
      trip_duration: trip_duration,
      num_stops: num_stops,
      price: price,
    });
  };

  if (ticket.price != 0) {
    return (
      <div className="firstform1">
        {store.tickets.text && <Alert text={store.tickets.text} />}
        <div className="form111f">
          <Form>
            <Card
              bg="header"
              style={{
                width: "50rem",
                marginLeft: "auto",
                marginRight: "auto",
                color: "black",
              }}
            >
              <Card.Header>STATUS: {store.aviaTickets.reserved}</Card.Header>
              <Card.Body>
                <Card.Title>Airlines: {ticket.airlines}</Card.Title>
                <Card.Text>Cabin class: {ticket.cabin_class}</Card.Text>
                <Card.Title>Departure date: {ticket.departure_date}</Card.Title>
                <Card.Text>Departure time: {ticket.departure_time}</Card.Text>
                <Card.Title>Arrival date: {ticket.arrival_date}</Card.Title>
                <Card.Text>Arrival time: {ticket.arrival_time}</Card.Text>
                <Card.Text>Trip duration: {ticket.trip_duration}</Card.Text>
                <Card.Text>Num stops: {ticket.num_stops}</Card.Text>

                <br></br>
                <br></br>
                <Card.Title>Price: {ticket.price}</Card.Title>
              </Card.Body>
              <br></br>

              <p> If all the data is correct, then confirm the reservation</p>
              <Button
                variant="info"
                onClick={() =>
                  dispatch(
                    addAviaTicket(
                      store.users.userId,
                      ticket.airlines,
                      ticket.cabin_class,
                      ticket.departure_date,
                      ticket.departure_time,
                      ticket.arrival_date,
                      ticket.arrival_time,
                      ticket.trip_duration,
                      ticket.num_stops,
                      ticket.price
                    )
                  )
                }
              >
                Confirm the reservation
              </Button>
            </Card>

            <br></br>
          </Form>
        </div>
      </div>
    );
  }

  if (date != "") {
    return (
      <div className="firstform1">
        {data.map((item, key) => (
          <div className="form111f">
            <Card
              bg="header"
              text="black"
              style={{
                width: "30rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="mb-2"
            >
              <Card.Header>{store.tickets.country}</Card.Header>
              <Card.Body>
                <Card.Text>
                  Airlines:{" "}
                  <span style={{ fontStyle: "italic" }}>{item.airlines}</span>
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
                    <span style={{ fontStyle: "italic" }}>without stops</span>
                  ) : (
                    <span style={{ fontStyle: "italic" }}>
                      {item.num_stops}
                    </span>
                  )}
                </Card.Text>
                <Card.Text>
                  Price:{" $"}
                  <span style={{ fontStyle: "italic" }}>{item.price}</span>
                </Card.Text>
                <div className="buttform">
                  <p className="textmmessage1">
                    If all the data is correct, then confirm the reservation:
                  </p>
                  <Button
                    variant="success"
                    onClick={() =>
                      createTicket(
                        item.airlines,
                        item.cabin_class,
                        item.departure_date,
                        item.departure_time,
                        item.arrival_date,
                        item.arrival_time,
                        item.trip_duration,
                        item.num_stops,
                        item.price
                      )
                    }
                  >
                    Reserve
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="firstform1">
      <div className="form111f">
        <h3 className="textBook">Book a flight for your trip</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Select
            style={{ width: "30rem", marginLeft: "auto", marginRight: "auto" }}
            onChange={(e) => setAirlines(e.target.value)}
            aria-label="Default select example"
          >
            <option style={{ fontStyle: "italic" }}>Choose an airlines</option>
            <option value="Delta">Delta</option>
            <option value="American">American</option>
            <option value="United">United</option>
            <option value="Alaska">Alaska</option>
            <option value="JetBlue">JetBlue</option>
          </Form.Select>

          <Form.Select
            style={{ width: "30rem", marginLeft: "auto", marginRight: "auto" }}
            onChange={(e) => setClass(e.target.value)}
            aria-label="Default select example"
          >
            <option style={{ fontStyle: "italic" }}>Choose cabin class</option>
            <option value="Economy">Economy</option>
            <option value="Premium_economy">Premium economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </Form.Select>

          <Form.Control
            style={{ width: "30rem", marginLeft: "auto", marginRight: "auto" }}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Default select example"
            type="date"
            name="date_of_birth"
          />

          <br></br>
        </Form>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addAviaTicket,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
