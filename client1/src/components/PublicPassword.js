import { Button, Modal, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  fetchChangeEmail,
  fetchChangePass,
  fetchVerifyToken,
} from "../redux/actionUsers";
import "../pages/publicEmail.css";
// import "../publicEmail.css";
import { CHANGE } from "../redux/types";

function PublicPassword() {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    if (store.users.flag) {
      const changePassword = {
        id: store.users.userId,
        password: newPassword,
      };
      // dispatch(fetchChangePassword(changePassword));
    }
  }, [store.users.flag]);

  useEffect(() => {
    if (store.users.change) {
      const token = localStorage.getItem("token");
      dispatch(fetchVerifyToken(token));
      setTimeout(() => {
        dispatch({ type: CHANGE, payload: false });
      }, 1000);
    }
  }, [store.users.change]);

  const handleUpdate = () => {
    if (newPassword === confirmNewPassword) {
      dispatch(fetchChangePass(store.users.userId, oldPassword));
    } else {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 1000)
    }
  };

  return (
    <>
    <Alert variant="info" className='alert' show={show}>
    Password mismatch/Your current password is not correct
  </Alert>

  <div className="alertGrid">
    <div className="alertMessage">
      <div className="alert alert-warning" role="alert">
        {text}
      </div>
    </div>
  </div>
    <div className="div-prof-sett-block3">
      <div className="div-block2">
        <p className="p-block2-title">Change password</p>
        <div className="div-border-block2"></div>
      </div>

      <div className="div-change-myself">
        <div className="div-block3">
          <p className="p-change-myself">Old password </p>
          <input
            type="password"
            className="input-prof-sett"
            name="password"
            onChange={(e) => setOldPassword(e.target.value)}
          ></input>
        </div>
        <div className="div-block3">
          <p className="p-change-myself">New password </p>
          <input
            type="password"
            className="input-prof-sett"
            name="password"
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
        </div>
        <div className="div-block3">
          <p className="p-change-myself">Confirm new password </p>
          <input
            type="password"
            className="input-prof-sett"
            name="password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          ></input>
        </div>

        <div className="div-block3-button-save">
          <button className="button-block3-save" onClick={() => handleUpdate()}>
            Update Password
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default PublicPassword;
