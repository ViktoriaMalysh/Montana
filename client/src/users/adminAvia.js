import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner, Form, Card } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET,
  AVIA_SHOW_MY_TICKETS,
} from "../redux/types";
import {
  deleteAviaTickets,
  showMyAviaTickets,
} from "../redux/actionAvia";
import { adminShowMyAviaTickets } from "../redux/actionAdmin";

import "../App.css";
import MyAccounts from "./myAccounts";

function MyTickets() {
  const [deleteT, setDelete] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    if (deleteT) {
      dispatch({ type: AVIA_SHOW_MY_TICKETS, payload: [{}] });

      dispatch(showMyAviaTickets(store.users.userId));
      setTimeout(() => {
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET });
        setDelete(false);
      }, 1000);
    }
  }, [deleteT]);

  useEffect(() => {
    dispatch({ type: AVIA_SHOW_MY_TICKETS, payload: [{}] });
    console.log("useEffect");
    dispatch(adminShowMyAviaTickets(store.users.userId));
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET });
      setDelete(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="form1111">
        <Spinner animation="border" variant="danger" role="status"></Spinner>
      </div>
    );
  }

  if (store.aviaTickets.find) {
    return (
      <div>
        <MyAccounts />
        <div className="form1111">
          <p>You haven`t any tickets</p>
        </div>
      </div>
    );
  }

  const deleteTicket = (id) => {
    dispatch(deleteAviaTickets(id));
    setDelete(true);
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET });
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <MyAccounts />
      <div className="one">
        <Form onSubmit={handleSubmit}>
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
              <Card.Header>Ticket id user: {item.id_user}</Card.Header>
              <Card.Body>
                <Card.Title>Airlines: {item.airlines}</Card.Title>
                <Card.Text>Cabin class: {item.cabin_class}</Card.Text>
                <Card.Title>Departure date: {item.departure_date}</Card.Title>
                <Card.Text>Departure time: {item.departure_time}</Card.Text>
                <Card.Title>Arrival date: {item.arrival_date}</Card.Title>
                <Card.Text>Arrival time: {item.arrival_time}</Card.Text>
                <Card.Text>Trip duration: {item.trip_duration}</Card.Text>
                <Card.Text>Num stops: {item.num_stops}</Card.Text>
                <Button variant="danger" onClick={() => deleteTicket(item.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
          <br></br>
        </Form>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  showMyAviaTickets,
  deleteAviaTickets,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);
