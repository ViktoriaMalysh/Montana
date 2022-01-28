// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Spinner, Form, Card } from "react-bootstrap";
// import { useSelector, useDispatch, connect } from "react-redux";
// import {
//   COUNTRY,
//   REQUESTED_SUCCEEDED_CLOSE_TICKET,
//   RESERVED,
//   SHOW_TICKETS,
// } from "../redux/types";
// import { addTicket, showTickets } from "../redux/actionTickets";
// import { Alert } from "../components/Alert";
// import "../App.css";
// import { useHistory } from "react-router";

// function Tickets() {
//   const [search, setSearch] = useState("");

//   const [country, setCountry] = useState("");
//   let history = useHistory();
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [loc, setLoc] = useState("");
//   const [price, setPrice] = useState("");
//   // const [name, set] = useState("");

//   const dispatch = useDispatch();
//   const store = useSelector((state) => state);
//   const loading = useSelector((state) => state.app.loading);

//   useEffect(() => {
//     if (store.tickets.reserved === "reserved") {
//       setTimeout(() => {
//         history.push("/tour/avia/ticket");
//         dispatch({ type: RESERVED, payload: "processed" });
//       }, 400);
//     }
//   }, [store.tickets.reserved]);

//   useEffect(() => {
//     if (country !== "") {
//       dispatch({ type: COUNTRY, payload: country });
//     }
//   }, [country]);

//   useEffect(() => {
//     if (search !== "") {
//       // dispatch({ type: SHOW_TICKETS, payload: [{}] });
//       const options = {
//         method: "GET",
//         url: "https://hotels4.p.rapidapi.com/properties/list",
//         params: {
//           destinationId: "1506246",
//           pageNumber: "1",
//           pageSize: "25",
//           checkIn: "2020-01-08",
//           checkOut: "2020-01-15",
//           adults1: "1",
//           sortOrder: "PRICE",
//           locale: search,
//           currency: "USD",
//         },
//         headers: {
//           "x-rapidapi-host": "hotels4.p.rapidapi.com",
//           "x-rapidapi-key":
//             "41c8a73cc0msh36005253ddf9396p1a020ajsn71ab7eb472c5",
//         },
//       };

//       switch (search) {
//         case "tr_TR":
//           setCountry("Turkey");
//           break;
//         case "it_IT":
//           setCountry("ITALY");
//           break;
//         case "fr_FR":
//           setCountry("FRANCE");
//           break;
//         case "el_GR":
//           setCountry("GREECE");
//           break;
//         case "es_ES":
//           setCountry("SPAIN");
//           break;
//         case "de_DE":
//           setCountry("GERMANY");
//           break;
//         case "pl_PL":
//           setCountry("POLAND");
//           break;
//         case "lv_LV":
//           setCountry("LATVIA");
//           break;
//         case "en_IN":
//           setCountry("INDIA");
//           break;
//         case "ja_JP":
//           setCountry("JAPAN");
//           break;
//       }

//       dispatch(showTickets(options));
//       setTimeout(() => {
//         dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET });
//       }, 1000);
//     }
//   }, [search]);

//   if (loading) {
//     return (
//       <div className="form1111">
//         <Spinner animation="border" variant="danger" role="status"></Spinner>
//       </div>
//     );
//   }

//   const createTicket = (name1, address1, locality1, price1) => {
//     console.log("CreateTicket", name1, address1, locality1, price1);
//     setName(name1);
//     setAddress(address1);
//     setLoc(locality1);
//     setPrice(price1);
//   };

//   if (name !== "") {
//     return (
//       <div className="firstform1">
//         {store.tickets.text && <Alert text={store.tickets.text} />}
//         <div className="form111f">
//           <Form>
//             <Card
//               bg="header"
//               style={{
//                 width: "35em",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 color: "black",
//               }}
//               className="mb-2"
//             >
//               <Card.Header>
//                 STATUS:{" "}
//                 <span style={{ fontStyle: "italic" }}>
//                   {store.tickets.reserved}
//                 </span>
//               </Card.Header>
//               <Card.Body>
//                 <Card.Text>
//                   Hotel: <span style={{ fontStyle: "italic" }}>{name}</span>
//                 </Card.Text>
//                 <Card.Text>
//                   Address:{" "}
//                   <span style={{ fontStyle: "italic" }}>{address}</span>
//                 </Card.Text>
//                 <Card.Text>
//                   Locality: <span style={{ fontStyle: "italic" }}>{loc}</span>
//                 </Card.Text>

//                 <Card.Text>
//                   Price: <span style={{ fontStyle: "italic" }}>{price}</span>
//                 </Card.Text>
//               </Card.Body>

//               <p className="textmmessage">
//                 If all the data is correct, then confirm the reservation:
//               </p>
//               <Button
//                 style={{ width: "12em", margin: "auto", marginBottom: "2em" }}
//                 variant="success"
//                 onClick={() =>
//                   dispatch(
//                     addTicket(store.users.userId, name, address, loc, price.slice(1))
//                   )
//                 }
//               >
//                 Confirm the reservation
//               </Button>
//             </Card>

//             <br></br>
//           </Form>
//         </div>
//       </div>
//     );
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="firstform1">
//       <div className="form111f">
//         <Form onSubmit={handleSubmit}>
//           <Form.Select
//             style={{ width: "20rem", marginLeft: "auto", marginRight: "auto" }}
//             onChange={(e) => setSearch(e.target.value)}
//             aria-label="Default select example"
//           >
//             <option>Chouse the country</option>
//             <option value="tr_TR">TURKEY</option>
//             <option value="it_IT">ITALY</option>
//             <option value="fr_FR">FRANCE</option>
//             <option value="el_GR">GREECE</option>
//             <option value="es_ES">SPAIN</option>
//             <option value="de_DE">GERMANY</option>
//             <option value="pl_PL">POLAND</option>
//             <option value="lv_LV">LATVIA</option>
//             <option value="en_IN">INDIA</option>
//             <option value="ja_JP">JAPAN</option>
//           </Form.Select>
//           <div className="tickcard">
//             {store.tickets.showTickets.map((item, key) => (
//               <Card
//                 bg="header"
//                 text="black"
//                 style={{
//                   width: "30rem",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//                 className="mb-2"
//               >
//                 <Card.Header>{country}</Card.Header>
//                 <Card.Body>
//                   <Card.Text>
//                     Hotel:{" "}
//                     <span style={{ fontStyle: "italic" }}>{item.name}</span>
//                   </Card.Text>
//                   <Card.Text>
//                     Address:{" "}
//                     <span
//                       // className="myselfspan"
//                       style={{ fontStyle: "italic" }}
//                     >
//                       {item.address && item.address.streetAddress}
//                     </span>
//                   </Card.Text>
//                   <Card.Text>
//                     Locality:{" "}
//                     <span
//                       // className="myselfspan"
//                       style={{ fontStyle: "italic" }}
//                     >
//                       {item.address && item.address.locality}
//                     </span>
//                   </Card.Text>
//                   <Card.Text>
//                     Price:{" "}
//                     <span
//                       // className="myselfspan"
//                       style={{ fontStyle: "italic" }}
//                     >
//                       {item.ratePlan &&
//                         item.ratePlan.price &&
//                         item.ratePlan.price.current}
//                     </span>
//                   </Card.Text>
//                   <div className="buttform">
//                     <Button
//                       variant="success"
//                       onClick={() =>
//                         createTicket(
//                           item.name,
//                           item.address && item.address.streetAddress,
//                           item.address && item.address.locality,
//                           item.ratePlan &&
//                             item.ratePlan.price &&
//                             item.ratePlan.price.current
//                         )
//                       }
//                     >
//                       Reserve
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             ))}
//           </div>

//           <br></br>
//         </Form>
//       </div>
//     </div>
//   );
// }

// const mapDispatchToProps = {
//   addTicket,
//   showTickets,
// };

// function mapStateToProps(state) {
//   return { store: state };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
