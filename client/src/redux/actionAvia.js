import axios from "axios";
import {
  AVIA_FIND,
  AVIA_RESERVED,
  AVIA_SHOW_MY_TICKETS,
  FIND,
  HIDE_LOADER,
  REQUESTED_AVIA_TICKET,
  REQUESTED_FAILED_AVIA_TICKET,
  REQUESTED_SUCCEEDED_AVIA_TICKET,
  REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

const requestAviaTickets = () => {
  return { type: REQUESTED_AVIA_TICKET };
};

const requestSuccessAviaTickets = () => {
  return (dispatch) => {
    dispatch({ type: REQUESTED_SUCCEEDED_AVIA_TICKET });
  };
};

const requestErrorAviaTickets = (err, message) => {
  return (dispatch) => {
    console.log("Error:", err);
    dispatch({ type: REQUESTED_FAILED_AVIA_TICKET });
    dispatch(alert(message));
  };
};

export const alert = (message) => {
  console.log('message', message)
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: SHOW_ALERT, payload: false });
    }, 1200);
  };
};

export const addAviaTicket = (id, airlines, cabin_class, departure_date, departure_time, arrival_date, arrival_time, trip_duration, num_stops, price) => {

  const message='Success'
  return (dispatch) => {
    dispatch(requestAviaTickets());
    axios({
      method: "POST",
      url: "http://localhost:8000/aviaTickets/booking",
      data: {
        id_user: id,
        airlines: airlines,
        cabin_class: cabin_class,
        departure_date: departure_date,
        departure_time: departure_time,
        arrival_date: arrival_date,
        arrival_time: arrival_time,
        trip_duration: trip_duration,
        num_stops: num_stops,
        price: price,
      },
    }).then(
  
      (data) => dispatch(requestSuccessAviaTickets()),
      dispatch(alert(message)),
      setTimeout(() => {
        dispatch({ type: AVIA_RESERVED, payload: "reserved" });
      }, 600),

      (err) => dispatch(requestErrorAviaTickets(err))
    );
  };
};

export const showMyAviaTickets = (id) => {
  return (dispatch) => {
    dispatch(requestAviaTickets());
    dispatch({ type: FIND, payload: false })
    axios
      .post(`http://localhost:8000/aviaTickets/showMyBookingAviaTicket`, {
        id: id,
      })
      .then((res) => {
        if(res.data.length===0) dispatch({ type: AVIA_FIND, payload: true })
        else dispatch({ type: AVIA_SHOW_MY_TICKETS, payload: res.data })
    })
      .then(
        (data) => dispatch(requestSuccessAviaTickets()),
        dispatch({ type: SHOW_LOADER }),
        setTimeout(() => {
          dispatch({ type: HIDE_LOADER });
        }, 300),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET }),
        (err) => dispatch(requestErrorAviaTickets(err, 'Project not found'))
      );
  };
};



export const deleteAviaTickets = (id) => {
  return (dispatch) => {
    dispatch(requestAviaTickets());
    axios
      .post(`http://localhost:8000/aviaTickets/cancelBooking`, {
        id: id,
      })
      .then((res) => res.data.delete)
      .then(
        (data) => dispatch(requestSuccessAviaTickets(data)),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET }),
        (err) => dispatch(requestErrorAviaTickets(err, 'Error. Try again'))
      );
  };
};