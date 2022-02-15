import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchChange, fetchChangePass } from "../redux/actionUsers";

function PublicProfile() {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");


  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (store.users.flag) {
      const changeProfile = {
        id: store.users.userId,
        name: name,
        surname: surname,
        gender: gender,
        country: country,
        dateOfBirth: dateOfBirth,
      };
      dispatch(fetchChange(changeProfile));
    }
  }, [store.users.flag]);

  const handleUpdate = () => {
    console.log("password", password);
    console.log("id", store.users.userId);
    dispatch(fetchChangePass(store.users.userId, password));
  };

  return (
    <div className="div-prof-sett-block2">
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
          <Button
            variant="secondary"
            // onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleUpdate()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="div-block2">
        <p className="p-block2-title">Public profile</p>
        <div className="div-border-block2"></div>
      </div>
      <div className="div-avatar-change">
        <p className="p-avatar-title">Profile picture</p>
        <img
          alt="Avatar"
          className="img-avatar-change"
          src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        />
      </div>

      <div className="div-change-myself">
        <div className="div-block3">
          <p className="p-change-myself">Name </p>
          <input
            type="text"
            className="input-prof-sett"
            name="name"
            defaultValue={store.users.userName}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="div-block3">
          <p className="p-change-myself">Surname </p>
          <input
            type="text"
            className="input-prof-sett"
            name="surname"
            defaultValue={store.users.userSurname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
          <p className="p-block3-message">
            Your name and surname may appear around Montana where you contribute
            or are mentioned. You can remove it at any time.
          </p>
        </div>

        <div className="div-block3">
          <p className="p-change-myself">Country </p>
          <input
            type="text"
            className="input-prof-sett1"
            name="email"
            defaultValue={store.users.userCountry}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>
        <div className="div-block3">
          <h4 className="p-change-myself">Date of Birth</h4>
          <input
            type="date"
            id="start"
            className="input-data"
            name="trip-start"
            defaultValue="2020-07-22"
            min="1960-01-01"
            max="2018-12-31"
            onChange={(e) => setDateOfBirth(e.target.value)}
          ></input>{" "}
        </div>

        <div className="div-block3">
          <h4 className="p-change-myself">Choose Gender:</h4>
          <select
            name="select"
            className="input-prof-sett1"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value={store.users.userGender}>
              {store.users.userGender}
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="div-block3-button-save">
          <button className="button-block3-save" onClick={() => handleShow()}>
            Update profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;
