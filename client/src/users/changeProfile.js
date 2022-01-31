import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  CHANGE,
  FLAG,
  REQUESTED_SUCCEEDED_CLOSE_USER,
  USER_AGE,
  USER_COUNTRY,
  USER_EMAIL,
  USER_GENDER,
  USER_NAME,
  USER_PASSWORD,
  USER_PHONE,
  USER_SURNAME,
} from "../redux/types";
import { useHistory } from "react-router-dom";
import "../App.css";
import { fetchChange, fetchChangePass, fetchVerifyToken } from "../redux/actionUsers";

function ChangeProfile() {
  let history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (store.users.change) {
      dispatch({ type: USER_NAME, payload: name });
      dispatch({ type: USER_SURNAME, payload: surname });
      dispatch({ type: USER_EMAIL, payload: email });
      dispatch({ type: USER_AGE, payload: age });
      dispatch({ type: USER_GENDER, payload: gender });
      dispatch({ type: USER_COUNTRY, payload: country });
      dispatch({ type: USER_PHONE, payload: phone });


      setTimeout(() => {
        dispatch({ type: CHANGE, payload: false });
      }, 1000)
    }
  }, [store.users.change])

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      fetchChange(
        store.users.userId,
        name,
        surname,
        gender,
        age,
        country,
        phone,
        email,
        password
      )
    );



    setTimeout(() => {
      const token = localStorage.getItem("token");
      dispatch(fetchVerifyToken(token));

      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_USER });
    }, 1000);

    history.push("/users/myProfile");
  };

  return (
    <div className="firstform7">
      {/* {store.users.text && <Alert text={store.users.text} />} */}
      <div className="form117">
        <Form>
          <Row className="mb-3">
            <Form.Group
              className="mb-3"
              as={Col}
              md="8"
              controlId="formGridAddress1"
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label>
                <h4>New name</h4>
              </Form.Label>
              <Form.Control placeholder="Enter name" required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formGridAddress2"
              as={Col}
              md="8"
              onChange={(e) => setSurname(e.target.value)}
            >
              <Form.Label>
                <h4>New surname</h4>
              </Form.Label>
              <Form.Control placeholder="Enter surname" required />
            </Form.Group>

            <Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label>
                  <h4>Choose gender</h4>
                </Form.Label>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Select
                  className="me-sm-2"
                  id="inlineFormCustomSelect"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="0" style={{ fontStyle: "italic" }}>
                    Choose...
                  </option>
                  <option value="male">Mele</option>
                  <option value="femele">Femele</option>
                </Form.Select>
              </Col>
            </Row>

            <Form.Group
              className="mb-3"
              as={Col}
              md="8"
              controlId="formGridAddress1"
              onChange={(e) => setCountry(e.target.value)}
            >
              <Form.Label>
                <h4>Your country</h4>
              </Form.Label>
              <Form.Control placeholder="Enter country" required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              as={Col}
              md="8"
              controlId="formGridAddress1"
              onChange={(e) => setAge(e.target.value)}
            >
              <Form.Label>
                <h4>Your age</h4>
              </Form.Label>
              <Form.Control placeholder="Enter age" required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              as={Col}
              md="8"
              controlId="formGridAddress1"
              onChange={(e) => setPhone(e.target.value)}
            >
              <Form.Label>
                <h4>Your phone</h4>
              </Form.Label>
              <Form.Control placeholder="Enter phone" required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formGridEmail"
              as={Col}
              md="8"
              onChange={(e) => setEmail(e.target.value)}
            >
              <Form.Label>
                <h4>New email</h4>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formGridPassword"
              onChange={(e) => setPassword(e.target.value)}
              as={Col}
              md="8"
            >
              <Form.Label>
                <h4>Enter your password</h4>
              </Form.Label>
              <Form.Control
                type="password"
                style={{ fontStyle: "italic" }}
                placeholder="Password"
                required
              />
            </Form.Group>
          </Row>

          <Button variant="success" type="submit" onClick={handleSubmit}>
            Save change
          </Button>
        </Form>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchChange,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProfile);
