import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  fetchChangePhone,
  fetchChangePass,
  fetchVerifyToken,
} from "../redux/actionUsers";
import "../pages/publicEmail.css";
// import "../publicEmail.css";
import { CHANGE } from "../redux/types";

function PublicPhone() {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [phone, setPhone] = useState(store.users.userPhone);
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (store.users.flag) {
      const changePhone = {
        id: store.users.userId,
        phone: phone !== "" ? phone : store.users.userPhone,
      };
      dispatch(fetchChangePhone(changePhone));
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
    setShow(false);
    dispatch(fetchChangePass(store.users.userId, password));
  };

  return (
    <div className="div-prof-sett-block3">
      <Modal
        show={show}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="div-body">
            <p className="p-book-hotel">Enter your password to save changes</p>
            <input
              className="input-pass-save-change"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleUpdate()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="div-block2">
        <p className="p-block2-title">Phone</p>
        <div className="div-border-block2"></div>
      </div>

      <div className="div-change-myself">
        <div className="div-block3">
          <p className="p-change-myself">Your Phone Number </p>
          <input
            type="number"
            className="input-prof-sett"
            name="phone"
            defaultValue={store.users.userPhone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <p className="p-block3-message-email">
            Be careful! Enter a valid and existing phone number, because after
            booking tickets, you can call about the reservation
          </p>
        </div>

        <div className="div-block3-button-save">
          <button className="button-block3-save" onClick={() => handleShow()}>
            Save Phone Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicPhone;
