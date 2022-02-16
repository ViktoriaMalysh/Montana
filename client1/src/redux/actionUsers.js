import axios from "axios";
import {
  CHANGE,
  CLEAR_USER,
  ERROR,
  FLAG,
  IS_AUTH,
  REQUESTED_FAILED_USER,
  REQUESTED_SUCCEEDED_USER,
  REQUESTED_USER,
  SHOW_ALERT,
  USER_AGE,
  USER_COUNTRY,
  USER_DATE_OF_BIRTH,
  USER_EMAIL,
  USER_GENDER,
  USER_ID,
  USER_NAME,
  USER_PHONE,
  USER_ROLE,
  USER_SURNAME,
} from "./types";

const requestUser = () => {
  return { type: REQUESTED_USER };
};

const requestSuccessUser = () => {
  return { type: REQUESTED_SUCCEEDED_USER };
};

const requestErrorUser = (err, message) => {
  return (dispatch) => {
    console.log("Error:", err);
    dispatch({ type: REQUESTED_FAILED_USER });
    dispatch(alert(message));
  };
};

const alert = (message) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: SHOW_ALERT, payload: false });
    }, 1200);
  };
};

export const fetchVerifyToken = (token) => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .post(
        `http://localhost:8000/users/verifyToken`,
        {},
        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: res.data.id });
        dispatch({ type: USER_NAME, payload: res.data.name });
        dispatch({ type: USER_SURNAME, payload: res.data.surname });
        dispatch({ type: USER_EMAIL, payload: res.data.email });
        dispatch({ type: USER_ROLE, payload: res.data.role });
        dispatch({ type: USER_GENDER, payload: res.data.gender });
        dispatch({ type: USER_DATE_OF_BIRTH, payload: res.data.dataOfBirth });
        dispatch({ type: USER_PHONE, payload: res.data.phone });
        dispatch({ type: USER_COUNTRY, payload: res.data.country });
      })
      .then(
        (data) => dispatch(requestSuccessUser(data)),
        (err) => dispatch(requestErrorUser(err))
      );
  };
};

export const fetchAuth = (user) => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .post(`http://localhost:8000/users/auth`, {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: res.data.id });
        dispatch({ type: USER_NAME, payload: res.data.name });
        dispatch({ type: USER_SURNAME, payload: res.data.surname });
        dispatch({ type: USER_EMAIL, payload: res.data.email });
        dispatch({ type: USER_ROLE, payload: res.data.role });
        dispatch(alert("Authorization was successful!"));
      })
      .then(
        (data) => dispatch(requestSuccessUser(data)),
        (err) => dispatch(requestErrorUser(err, "Error. Try again"))
      );
  }; //console.log()
};

export const fetchLogin = (user) => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .post(`http://localhost:8000/users/login`, {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: IS_AUTH, payload: true });
        dispatch({ type: USER_ID, payload: res.data.id });
        dispatch({ type: USER_NAME, payload: res.data.name });
        dispatch({ type: USER_SURNAME, payload: res.data.surname });
        dispatch({ type: USER_EMAIL, payload: res.data.email });
        dispatch({ type: USER_ROLE, payload: res.data.role });
        dispatch({ type: USER_GENDER, payload: res.data.gender });
        dispatch({ type: USER_DATE_OF_BIRTH, payload: res.data.dataOfBirth });
        dispatch({ type: USER_PHONE, payload: res.data.phone });
        dispatch({ type: USER_COUNTRY, payload: res.data.country });

        dispatch(alert("Success!"));
      })
      .then(
        (data) => dispatch(requestSuccessUser(data)),
        (err) => dispatch(requestErrorUser(err, "User not found"))
      );
  };
};

export const fetchDelete = (token) => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .post(
        `http://localhost:8000/users/deleteAccount`,
        {},
        { headers: { authorization: token } }
      )
      .then((res) => {
        localStorage.clear();
        dispatch({ type: IS_AUTH, payload: false });
        dispatch({ type: CLEAR_USER });
        dispatch(alert("Account has been deleted!"));
      })
      .then(
        (data) => dispatch(requestSuccessUser(data)),
        (err) =>
          dispatch(requestErrorUser(err, "Error! Account has not been deleted"))
      );
  };
};

export const fetchChange = ( user ) => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .post(`http://localhost:8000/users/changeProfile`, {
        id: user.id,
        name: user.name,
        surname: user.surname,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
      })
      .then((res) => {
        if (res.data.error) dispatch({ type: ERROR, payload: res.data.error });
        else {
          localStorage.setItem("token", res.data.token);
          dispatch({ type: CHANGE, payload: true });
        }
        dispatch(alert("Success!"));
      })
      .then(
        (data) => dispatch(requestSuccessUser(data)),
        (err) => dispatch(requestErrorUser(err, "User not found"))
      );
  };
};

export const fetchChangeEmail = ( user ) => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .post(`http://localhost:8000/users/changeEmail`, {
        id: user.id,
        email: user.email,
      })
      .then((res) => {
        if (res.data.error) dispatch({ type: ERROR, payload: res.data.error });
        else {
          localStorage.setItem("token", res.data.token);
          dispatch({ type: CHANGE, payload: true });
        }
        dispatch(alert("Success!"));
      })
      .then(
        (data) => dispatch(requestSuccessUser(data)),
        (err) => dispatch(requestErrorUser(err, "User not found"))
      );
  };
};


export const fetchChangePass = (id, password) => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .post(`http://localhost:8000/users/pass`, {
        id: id,
        password: password,
      })
      .then((res) => {
        if (res.data.error) dispatch({ type: ERROR, payload: res.data.error });
        else dispatch({ type: FLAG, payload: true });

        dispatch(alert("Success!"));
      })
      .then(
        (data) => dispatch(requestSuccessUser(data)),
        (err) => dispatch(requestErrorUser(err, "User not found"))
      );
  };
};
