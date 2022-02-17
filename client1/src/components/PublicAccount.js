import { Button, Modal } from "react-bootstrap";
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

function PublicAccount() {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (store.users.flag) {
      navigate('deleteAccount')
    }
  }, [store.users.flag]);

  const handleDelete = () => {
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
            <p className="p-book-hotel">Enter your password to delete account</p>
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
          <Button variant="primary" onClick={() => handleDelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="div-block2">
        <p className="p-block2-title">Account</p>
        <div className="div-border-block2"></div>
      </div>

      <div className="div-change-myself">
        <div className="div-block3-button-save">
          <button className="button-delete" onClick={() => handleShow()}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicAccount;
