import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner, Form, Card } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  SHOW_MY_TICKETS,
} from "../redux/types";
import {
  deleteTickets,
  showMyTickets,
} from "../redux/actionTickets";
import { Alert } from "../components/Alert";
import "../App.css";
import MyAccounts from "./myAccounts";

function MyTickets() {
  const [deleteT, setDelete] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    if (deleteT) {
      dispatch({ type: SHOW_MY_TICKETS, payload: [{}] });

      dispatch(showMyTickets(store.users.userId));
      setTimeout(() => {
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
        setDelete(false);
      }, 1000);
    }
  }, [deleteT]);

  useEffect(() => {
    dispatch({ type: SHOW_MY_TICKETS, payload: [{}] });
    console.log("useEffect");
    dispatch(showMyTickets(store.users.userId));
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
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

  if (store.tickets.find) {
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
    dispatch(deleteTickets(id));
    setDelete(true);
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* <MyAccounts /> */}
      <div className="one">
        <Form onSubmit={handleSubmit}>
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
                <Card.Title>{item.country}</Card.Title>
                <Card.Text>{item.address}</Card.Text>
                <Card.Text>{item.locality}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
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
  showMyTickets,
  deleteTickets,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);
