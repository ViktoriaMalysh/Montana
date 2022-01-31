import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  REQUESTED_SUCCEEDED_CLOSE_USER,
  USER_EMAIL,
  USER_PASSWORD,
} from "../redux/types";
import { fetchLogin } from "../redux/actionUsers";
import './login.css'

function Login() {
  const [back, setBack] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();

  if (store.users.success) {
    setTimeout(() => {
      navigate("/");
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
  const handleAuth = () => {
    setBack(true);
    navigate("/auth");
  };

  return (
    <div className="div-login">
      <div className="div-left">
        <img className='img-login' src="https://static8.depositphotos.com/1001311/873/i/600/depositphotos_8735967-stock-photo-sea-shells-with-sand-as.jpg"></img>
      </div>
      <div className="div-right">
        <div className="div-form">
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
                    <h4 className='h4-login'>Email</h4>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    style={{ fontStyle: "italic" }}
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formGridPassword"
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <Form.Label>
                    <h4 className='h4-login'>Password</h4>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    style={{ fontStyle: "italic" }}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="buttform">
              <button className='button-login' type="submit" onClick={handleSubmit}>
                Login
              </button>
              <p className='p-login-title'>Don`t have an account?</p>
              <button
                className='button-login'
                type="submit"
                onClick={handleAuth}
              >
                Authorization
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
