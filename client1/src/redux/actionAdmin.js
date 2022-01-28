import axios from "axios";
import {
  AVIA_SHOW_MY_TICKETS,
  FIND,
  HIDE_LOADER,
  REQUESTED_ADMIN,
  REQUESTED_FAILED_ADMIN,
  REQUESTED_SUCCEEDED_ADMIN,
  REQUESTED_SUCCEEDED_CLOSE_ADMIN,
  SHOW_ALERT,
  SHOW_LOADER,
  SHOW_MY_TICKETS,
} from "./types";

const requestAdmin = () => {
  return { type: REQUESTED_ADMIN };
};

const requestSuccessAdmin = () => {
  return (dispatch) => {
    dispatch({ type: REQUESTED_SUCCEEDED_ADMIN });
  };
}; 

const requestErrorAdmin = (err, message) => {
  return (dispatch) => {
    console.log("Error:", err);
    dispatch({ type: REQUESTED_FAILED_ADMIN });
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

export const adminShowMyAviaTickets = () => {
  return (dispatch) => {
    dispatch(requestAdmin());
    dispatch({ type: FIND, payload: false })
    axios
      .post(`http://localhost:8000/admin/showAviaTicketsAdmin`, {
      })
    .then((res) => {
      if(res.data.length===0) dispatch({ type: FIND, payload: true })
      else dispatch({ type: AVIA_SHOW_MY_TICKETS, payload: res.data })
    })
      .then(
        (data) => dispatch(requestSuccessAdmin()),
        dispatch({ type: SHOW_LOADER }),
        setTimeout(() => {
          dispatch({ type: HIDE_LOADER });
        }, 300),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_ADMIN }),
        (err) => dispatch(requestErrorAdmin(err, 'Project not found'))
      );
  };
};

export const adminShowMyTickets = () => {
  return (dispatch) => {
    dispatch(requestAdmin());
    dispatch({ type: FIND, payload: false })
    axios
      .post(`http://localhost:8000/admin/showTicketsAdmin`, {
        
      })
      .then((res) => {
        if(res.data.length===0) dispatch({ type: FIND, payload: true })
        else dispatch({ type: SHOW_MY_TICKETS, payload: res.data })
      })
      .then(
        (data) => dispatch(requestSuccessAdmin()),
        dispatch({ type: SHOW_LOADER }),
        setTimeout(() => {
          dispatch({ type: HIDE_LOADER });
        }, 300),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_ADMIN }),
        (err) => dispatch(requestErrorAdmin(err, 'Project not found'))
      );
  };
};