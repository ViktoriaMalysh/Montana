import axios from "axios";
import {
  DELETE,
  FIND,
  HIDE_LOADER,
  REQUESTED_FAILED_TICKET,
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  REQUESTED_SUCCEEDED_TICKET,
  REQUESTED_TICKET,
  RESERVED,
  SHOW_ALERT,
  SHOW_LOADER,
  SHOW_MY_TICKETS,
  SHOW_TICKETS,
  SHOW_SALE
} from "./types";

const requestTickets = () => {
  return { type: REQUESTED_TICKET };
};

const requestSuccessTickets = () => {
  return (dispatch) => {
    dispatch({ type: REQUESTED_SUCCEEDED_TICKET });
  };
};

const requestErrorTickets = (err, message) => {
  return (dispatch) => {
    console.log("Error:", err);
    dispatch({ type: REQUESTED_FAILED_TICKET });
    dispatch(alert(message));
  };
};

export const alert = (message) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: SHOW_ALERT, payload: false });
    }, 1200);
  };
};

export const addTicket = (id, name, address, locality, price, url) => {
  console.log(id,name )
  const message = 'Success'
  return (dispatch) => {
    dispatch(requestTickets());
    axios
    .post(`http://localhost:8000/tickets/booking`, {
      id_user: id,
      name: name,
      address: address,
      locality: locality,
      price: price,
      url: url
    })
    .then(
      (data) => dispatch(requestSuccessTickets()),
      dispatch(alert(message)),
      setTimeout(() => {
        dispatch({ type: RESERVED, payload: "reserved" });
      }, 600),
      (err) => dispatch(requestErrorTickets(err))
    );
  };
};



export const showTickets = (options) => {
  return (dispatch) => {
    dispatch(requestTickets());
    axios
      .request(options)
      .then((res) =>
        dispatch({
          type: SHOW_TICKETS,
          payload: res.data.data.body.searchResults.results,
        })
      )
      .then(
        (data) => dispatch(requestSuccessTickets()),
        dispatch({ type: SHOW_LOADER }),
        setTimeout(() => {
          dispatch({ type: HIDE_LOADER });
        }, 1500),
        (err) => dispatch(requestErrorTickets(err))
      );
  };
};

export const showMyTickets = (id) => {
  return (dispatch) => {
    dispatch(requestTickets());
    dispatch({ type: FIND, payload: false })
    axios
      .post(`http://localhost:8000/tickets/showMyBookingTicket`, {
        id: id,
      })
      .then((res) => {
        if(res.data.length===0) dispatch({ type: FIND, payload: true })   
        else {
          dispatch({ type: SHOW_MY_TICKETS, payload: res.data })
          console.log('res', res.data)
        }
      })
      .then(
        (data) => dispatch(requestSuccessTickets()),
        dispatch({ type: SHOW_LOADER }),
        setTimeout(() => {
          dispatch({ type: HIDE_LOADER });
        }, 300),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET }),
        (err) => dispatch(requestErrorTickets(err, 'Project not found'))
      );
  };
};

export const showSaleTickets = () => {
  return (dispatch) => {
    dispatch(requestTickets());
    axios
      .post(`http://localhost:8000/tickets/showSaleTicket`, {})
      .then((res) => {
        dispatch({ type: SHOW_SALE, payload: res.data })
      })
      .then(
        (data) => dispatch(requestSuccessTickets()),
        dispatch({ type: SHOW_LOADER }),
        setTimeout(() => {
          dispatch({ type: HIDE_LOADER });
        }, 300),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET }),
        (err) => dispatch(requestErrorTickets(err, 'Project not found'))
      );
  };
};

export const deleteTickets = (id) => {
  return (dispatch) => {
    dispatch(requestTickets());
    axios
      .post(`http://localhost:8000/tickets/cancelBooking`, {
        id: id,
      })
      .then((res) => {
        dispatch({ type: DELETE, payload: res.data.delete })
      })
      .then(
        (data) => dispatch(requestSuccessTickets()),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_TICKET }),
        (err) => dispatch(requestErrorTickets(err, 'Error. Try again'))
      );
  };
};
