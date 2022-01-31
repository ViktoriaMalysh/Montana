import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { REQUESTED_SUCCEEDED_CLOSE_USER } from "../redux/types";
import { fetchVerifyToken } from "../redux/actionUsers";

function Header() {

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchVerifyToken(token));
    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_USER });
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>MONTANA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Country"
                id="collasible-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/country/italy"}
                  >
                    Italy
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/country/turkey"}
                  >
                    Turkey
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/country/germany"}
                  >
                    Germany
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/country/france"}
                  >
                    France
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/country/egypt"}
                  >
                    Egypt
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/country/greece"}
                  >
                    Greece
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/country/spain"}
                  >
                    Spain
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                >
                  Sale
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/tickets"}
                >
                  Tickets
                </Link>
              </Nav.Link>

              
            </Nav>
            <Nav>
              {store.users.isAuth ? (
                <NavDropdown
                title="UserName"
                id="collasible-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/"}
                  >
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/"}
                  >
                    My Tickets
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/logout"}
                  >
                    Log Out
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              ) : (
                <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/login"}
                >
                  Sing In
                </Link>
              </Nav.Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
