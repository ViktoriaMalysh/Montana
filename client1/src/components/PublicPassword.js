import { Button, Modal, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  fetchChangeEmail,
  fetchChangePass,
  fetchChangePassword,
  fetchVerifyToken,
} from "../redux/actionUsers";
import "../pages/publicEmail.css";
// import "../publicEmail.css";
import { CHANGE, FLAG } from "../redux/types";

function PublicPassword() {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    if (!store.users.flag && store.users.flag!=='') {
      setShowOld(true);
      setTimeout(() => {
        setShowOld(false);
        dispatch({ type: FLAG, payload: '' });
      }, 3000);
    } else if(store.users.flag && store.users.flag!==''){
      const changePassword = {
        id: store.users.userId,
        password: newPassword,
      };
      dispatch(fetchChangePassword(changePassword));
      setTimeout(() => {
        dispatch({ type: FLAG, payload: '' });
      }, 1000);
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
    if (
      newPassword === confirmNewPassword &&
      newPassword !== "" &&
      confirmNewPassword !== ""
    ) {
      dispatch(fetchChangePass(store.users.userId, oldPassword));
    } else {
      setShowNew(true);
      setTimeout(() => {
        setShowNew(false);
      }, 3000);
    }
  };

  return (
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
          <Alert variant="info" className="alert" show={showOld}>
            Password mismatch
          </Alert>
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

          <Alert variant="info" className="alert" show={showNew}>
            Your current password is not correct
          </Alert>
        </div>

        <div className="div-block3-button-save">
          <button className="button-block3-save" onClick={() => handleUpdate()}>
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicPassword;
