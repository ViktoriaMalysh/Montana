import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  REQUESTED_SUCCEEDED_CLOSE_USER,
  USER_EMAIL,
  USER_PASSWORD,
} from "../redux/types";
import { Alert } from "../components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchLogin } from "../redux/actionUsers";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [back, setBack] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  if (store.users.success) {
    setTimeout(() => {
      history.push("/");
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_USER });
    }, 1400);
  }

  useEffect(() => {
    if (store.users.userPassword != "") {
      const user = {
        email: store.users.userEmail,
        password: store.users.userPassword,
      };
      dispatch(fetchLogin(user));
    }
  }, [store.users.userPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: USER_EMAIL, payload: email });
    dispatch({ type: USER_PASSWORD, payload: password });
  };

  const handlePush = () => {
    history.push("/login");
  };

  const handleAuth = () => {
    setBack(true)
    history.push("/auth");
  };

  

  return (
    <div className="firstform7">
      {store.users.text && <Alert text={store.users.text} />}
      <div className="form117">

        <Form>
          <Row
            className="mb-3"
            style={{
              marginLeft: "3em",
              marginRight: "auto",
            }}
          >
            <Col xs="10">
              <Form.Group
                className="mb-3"
                controlId="formGridEmail"
                onChange={(e) => setEmail(e.target.value)}
              >
                <Form.Label>
                  <h4>Email</h4>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formGridPassword"
                onChange={(e) => setPassword(e.target.value)}
              >
                <Form.Label>
                  <h4>Password</h4>
                </Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
            </Col>
          </Row>
          <div className="buttform">
            <Button variant="success" type="submit" onClick={handleSubmit}>
              Login
            </Button>
            <p style={{ marginTop: "4em" }}>Don`t have an account?</p>
            <Button
              variant="success"
              type="submit"
              style={{ marginTop: "0.5em" }}
              onClick={handleAuth}
            >
              Authorization
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchLogin,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
