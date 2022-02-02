import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner, Form, Card, Row, CardGroup } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  COUNTRY,
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  RESERVED,
  SHOW_TICKETS,
} from "../redux/types";
import { addTicket, showTickets } from "../redux/actionTickets";
// import { Alert } from "../components/Alert";
import "./bookTicket.css";
import { useNavigate } from "react-router";
import { Modal } from "bootstrap";

function BookTicket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (store.tickets.reserved === "reserved") {
      setTimeout(() => {
        dispatch({ type: RESERVED, payload: "processed" });
      }, 400);
    }
  }, [store.tickets.reserved]);

  const handleBack = () => {
    navigate("/tickets");
  };

  return (
    <div className="div-book-ticket">
      {/* {store.tickets.text && <Alert text={store.tickets.text} />} */}
      <div className="div-block-form">
        <img
          alt="Header"
          className="img-book-header "
          src="https://fs.tonkosti.ru/sized/c1600x400/0k/5p/0k5pzsquv480ggkckscogwcok.jpg"
        />

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>


        <div className="div-book-form">
          <button
            className='button-book-back'
            onClick={() => handleBack}
          >
            &#8592;
          </button>
          
          <Form>
            <Card bg="header" className="card-book" className="mb-2">
              <Card.Img
                className="img-book-url"
                variant="top"
                src={
                  store.tickets.url
                }
              />
              <Card.Header>
                STATUS:{" "}
                <span style={{ fontStyle: "italic" }}>
                  {store.tickets.reserved}
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Hotel:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {store.tickets.ticketName}
                  </span>
                </Card.Text>
                <Card.Text>
                  Address:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {store.tickets.address}
                  </span>
                </Card.Text>
                <Card.Text>
                  Locality:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {store.tickets.locality}
                  </span>
                </Card.Text>

                <Card.Text>
                  Price:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {store.tickets.price}
                  </span>
                </Card.Text>
              </Card.Body>

              <p className="textmmessage">
                If all the data is correct, then confirm the reservation:
              </p>
              <Button
                className="button-book-ticket"
                variant="success"
                onClick={() =>
                  dispatch(
                    addTicket(
                      store.users.userId,
                      store.tickets.ticketName,
                      store.tickets.address,
                      store.tickets.locality,
                      store.tickets.price.slice(1),
                      store.tickets.url
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
    </div>
  );
}

export default BookTicket;
