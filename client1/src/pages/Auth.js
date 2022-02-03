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
  USER_COUNTRY,
  USER_EMAIL,
  USER_NAME,
  USER_PASSWORD,
  USER_SURNAME,
  USER_GENDER,
  USER_DATE_OF_BIRTH,
  USER_PHONE
} from "../redux/types";
import { fetchAuth, fetchLogin } from "../redux/actionUsers";
import "./auth.css";

function Login() {
  const [back, setBack] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [dataOfBirth, setDataOfBirth] = useState("");
console.log("git")

  const [country, setCountry] = useState("");

  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();

  if (store.users.success) {
    setTimeout(() => {
      navigate("/home");
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_USER });
    }, 1400);
  }

  useEffect(() => {
    if (store.users.userPassword != "") {
      const user = {
        name: store.users.userName,
        surname: store.users.userSurname,
        dateOfBirth: store.users.userDateOfBirth,
        gender: store.users.userGender,
        country: store.users.userCountry,
        phone: store.users.userPhone,
        email: store.users.userEmail,
        password: store.users.userPassword,
      };
      dispatch(fetchAuth(user));
    }
  }, [store.users.userPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: USER_NAME, payload: name });
    dispatch({ type: USER_SURNAME, payload: surname });
    dispatch({ type: USER_GENDER, payload: gender });
    dispatch({ type: USER_DATE_OF_BIRTH, payload: dataOfBirth });
    dispatch({ type: USER_COUNTRY, payload: country });
    dispatch({ type: USER_PHONE, payload: phone });
    dispatch({ type: USER_EMAIL, payload: email });
    dispatch({ type: USER_PASSWORD, payload: password });
  };
  const handleAuth = () => {
    setBack(true);
    navigate("/auth");
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="div-auth">
      <div className="div-auth-left">
        <img
          className="img-auth"
          src="https://static8.depositphotos.com/1001311/873/i/600/depositphotos_8735967-stock-photo-sea-shells-with-sand-as.jpg"
        ></img>
      </div>
      <div className="div-auth-right">
        <div className="div-auth-form">
        <div className="div-back">
          <button 
            className='button-back'
            onClick={handleBack}
          >
            &#8592;
          </button>
        </div>
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
                  onChange={(e) => setName(e.target.value)}
                >
                  <Form.Label>
                    <h4 className="h4-auth">Name</h4>
                  </Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    style={{ fontStyle: "italic" }}
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formGridEmail"
                  onChange={(e) => setSurname(e.target.value)}
                >
                  <Form.Label>
                    <h4 className="h4-auth">Surname</h4>
                  </Form.Label>
                  <Form.Control
                    type="surname"
                    placeholder="Enter surname"
                    style={{ fontStyle: "italic" }}
                    required
                  />
                </Form.Group>

                <Row className="align-items-center">
                  <Col xs="auto" className="my-1">
                    <Form.Label>
                      <h4 className="h4-auth">Date of Birth</h4>
                    </Form.Label>
                  </Col>
                  <Col xs="auto" className="my-1">
                
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2018-07-22"
                        min="2018-01-01"
                        max="2018-12-31"
                      ></input>{" "}
                 
                  </Col>
                </Row>

                <Row className="align-items-center">
                  <Col xs="auto" className="my-1">
                    <Form.Label>
                      <h4 className="h4-auth">Choose Gender</h4>
                    </Form.Label>
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Select
                      className="me-sm-2"
                      id="inlineFormCustomSelect"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option className="option-style" value="0">
                        Choose...
                      </option>
                      <option className="option-style" value="male">
                        Mele
                      </option>
                      <option className="option-style" value="femele">
                        Femele
                      </option>
                    </Form.Select>
                  </Col>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="formGridEmail"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <Form.Label>
                    <h4 className="h4-auth">Country</h4>
                  </Form.Label>
                  <Form.Control
                    type="country"
                    placeholder="Enter country"
                    style={{ fontStyle: "italic" }}
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formGridEmail"
                  onChange={(e) => setPhone(e.target.value)}
                >
                  <Form.Label>
                    <h4 className="h4-auth">Phone Number</h4>
                  </Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Enter phone"
                    style={{ fontStyle: "italic" }}
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formGridEmail"
                  onChange={(e) => setEmail(e.target.value)}
                >
                  <Form.Label>
                    <h4 className="h4-auth">Email</h4>
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
                    <h4 className="h4-auth">Password</h4>
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
            <div className="buttform-auth">
              <button
                className="button-auth"
                type="submit"
                onClick={handleSubmit}
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
