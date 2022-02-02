import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner, Form, Card, Button, Modal, Row } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  ADDRESS,
  COUNTRY,
  LOCALITY,
  PHOTO_URL,
  PRICE,
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  RESERVED,
  TICKET_NAME,
} from "../redux/types";
import { addTicket, showTickets } from "../redux/actionTickets";
import "./tickets.css";
import { useNavigate } from "react-router";

function Tickets() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (country !== "") {
      dispatch({ type: COUNTRY, payload: country });
    }
  }, [country]);

  useEffect(() => {
    if (store.tickets.ticketName !== "") {
      // navigate("/bookTicket");
    }
  }, [store.tickets.ticketName]);

  useEffect(() => {
    if (search !== "") {
      const options = {
        method: "GET",
        url: "https://hotels4.p.rapidapi.com/properties/list",
        params: {
          destinationId: "1506246",
          pageNumber: "1",
          pageSize: "25",
          checkIn: "2020-01-08",
          checkOut: "2020-01-15",
          adults1: "1",
          sortOrder: "PRICE",
          locale: search,
          currency: "USD",
        },
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key":
            "41c8a73cc0msh36005253ddf9396p1a020ajsn71ab7eb472c5",
        },
      };

      switch (search) {
        case "tr_TR":
          setCountry("Turkey");
          break;
        case "it_IT":
          setCountry("ITALY");
          break;
        case "fr_FR":
          setCountry("FRANCE");
          break;
        case "el_GR":
          setCountry("GREECE");
          break;
        case "es_ES":
          setCountry("SPAIN");
          break;
        case "de_DE":
          setCountry("GERMANY");
          break;
        case "pl_PL":
          setCountry("POLAND");
          break;
        case "lv_LV":
          setCountry("LATVIA");
          break;
        case "en_IN":
          setCountry("INDIA");
          break;
        case "ja_JP":
          setCountry("JAPAN");
          break;
      }

      dispatch(showTickets(options));
      setTimeout(() => {
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
      }, 1000);
    }
  }, [search]);

  if (loading) {
    return (
      <div className="form1111">
        <Spinner animation="border" variant="danger" role="status"></Spinner>
      </div>
    );
  }

  const createTicket = (name, address, locality, price, url) => {
    dispatch({ type: TICKET_NAME, payload: name });
    dispatch({ type: ADDRESS, payload: address });
    dispatch({ type: LOCALITY, payload: locality });
    dispatch({ type: PRICE, payload: price });
    dispatch({ type: PHOTO_URL, payload: url });
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="div-tickets-block">
      <div className="div-tickets">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{store.tickets.ticketName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img alt="Header" className="img-hotel" src={store.tickets.url} />
            <p className="p-book-hotel">
              Address:{" "}
              <span style={{ fontStyle: "italic" }}>
                {store.tickets.address}
              </span>
            </p>
            <p className="p-book-hotel">
              Locality:{" "}
              <span style={{ fontStyle: "italic" }}>
                {store.tickets.locality}
              </span>
            </p>
            <p className="p-book-hotel">
              Price:{" "}
              <span style={{ fontStyle: "italic" }}>{store.tickets.price}</span>
            </p>
            <p className="text-message">
                If all the data is correct, then confirm the reservation:
              </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Book</Button>
          </Modal.Footer>
        </Modal>
        <img
          alt="Header"
          className="img-ticket-header"
          src="https://fs.tonkosti.ru/sized/c1600x400/0k/5p/0k5pzsquv480ggkckscogwcok.jpg"
        />
        <div className="div-tickets-cards">
          <Form onSubmit={handleSubmit}>
            <div className="div-tickets-title">
              <Form.Select
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Default select example"
              >
                <option>Chouse the country</option>
                <option value="tr_TR">TURKEY</option>
                <option value="it_IT">ITALY</option>
                <option value="fr_FR">FRANCE</option>
                <option value="el_GR">GREECE</option>
                <option value="es_ES">SPAIN</option>
                <option value="de_DE">GERMANY</option>
                <option value="pl_PL">POLAND</option>
                <option value="lv_LV">LATVIA</option>
                <option value="en_IN">INDIA</option>
                <option value="ja_JP">JAPAN</option>
              </Form.Select>
            </div>
            <div className="tickcard">
              {search !== "" ? (
                <>
                  <p className="p-ticket-country">
                    Selected Country:{" "}
                    <span className="span-ticket-country">{country}</span>
                  </p>
                  <Row xs={1} md={2} className="g-4">
                    {store.tickets.showTickets.map((item, key) => (
                      <Card className="card-tickets">
                        <Card.Img
                          className="img-url"
                          variant="top"
                          src={
                            item.optimizedThumbUrls &&
                            item.optimizedThumbUrls.srpDesktop
                          }
                        />
                        <Card.Body>
                          <Card.Title className="card-title">
                            {item.name}
                          </Card.Title>
                          <Card.Text className="card-text">
                            Address:{" "}
                            <span style={{ fontStyle: "italic" }}>
                              {item.address && item.address.streetAddress}
                            </span>
                          </Card.Text>
                          <Card.Text>
                            Locality:{" "}
                            <span style={{ fontStyle: "italic" }}>
                              {item.address && item.address.locality}
                            </span>
                          </Card.Text>
                          <Card.Text>
                            Price:{" "}
                            <span style={{ fontStyle: "italic" }}>
                              {item.ratePlan &&
                                item.ratePlan.price &&
                                item.ratePlan.price.current}
                            </span>
                          </Card.Text>
                          <button
                            className="button-book-now"
                            variant="primary"
                            onClick={() =>
                              createTicket(
                                item.name,
                                item.address && item.address.streetAddress,
                                item.address && item.address.locality,
                                item.ratePlan &&
                                  item.ratePlan.price &&
                                  item.ratePlan.price.current,
                                item.optimizedThumbUrls &&
                                  item.optimizedThumbUrls.srpDesktop
                              )
                            }
                          >
                            Book Now
                          </button>
                        </Card.Body>
                      </Card>
                    ))}
                  </Row>{" "}
                </>
              ) : (
                <div></div>
              )}
            </div>

            <br></br>
          </Form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addTicket,
  showTickets,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
