import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchVerifyToken } from "./redux/actionUsers";
import { REQUESTED_SUCCEEDED_CLOSE_USER } from "./redux/types";

function ContainedButtons() {
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

  useEffect(() => {
    if (store.users.userRole === 2) setAdmin(true);
    else setAdmin(false);
  }, [store.users.userRole]);

  return (
    <div>
      {!admin ? (
        <Navbar variant="dark" bg="dark" expand="lg" sticky="bottom">
          <Container>
            <Navbar.Brand>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/home"}
              >
                MONTANA
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title="MORE COUNTRIES"
                  id="collasible-nav-dropdown"
                  style={{ color: "white" }}
                >
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/turkey"}
                    >
                      Turkey
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/italy"}
                    >
                      Italy
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/france"}
                    >
                      France
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/egypt"}
                    >
                      Egypt
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/greece"}
                    >
                      Greece
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/spain"}
                    >
                      Spain
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/germany"}
                    >
                      Germany
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/tour/sale"}
                  >
                    SALE
                  </Link>
                </Nav.Link>

                {store.users.isAuth ? (
                  <>
                    <Nav.Link>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={"/tour/tours"}
                      >
                        TOURS
                      </Link>
                    </Nav.Link>
                  </>
                ) : (
                  <></>
                )}
              </Nav>
              {store.users.isAuth ? (
                <>
                  {/* <Navbar.Collapse className="justify-content-end"> */}
                  <Nav>
                    <NavDropdown
                      title={store.users.userName}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={"/users/myProfile"}
                        >
                          My Profile
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={"/users/myAccounts"}
                        >
                          My Tickets
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={"/users/logout"}
                        >
                          LOG OUT
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* </Navbar.Collapse> */}
                  </Nav>
                </>
              ) : (
                // <div>
                <>
                  <Nav.Link disabled={store.users.isAuth}>
                    <Link
                      style={{ textDecoration: "none", color: "grey" }}
                      to={"/users/auth"}
                    >
                      AUTH
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none", color: "grey" }}
                      to={"/users/login"}
                    >
                      LOGIN
                    </Link>
                  </Nav.Link>
                </>
                // </div>
              )}
              {/* </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="bottom">
          <Container>
            <Navbar.Brand>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/home"}
              >
                MONTANA
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title="MORE COUNTRIES"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/turkey"}
                    >
                      Turkey
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/italy"}
                    >
                      Italy
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/france"}
                    >
                      France
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/egypt"}
                    >
                      Egypt
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/greece"}
                    >
                      Greece
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/spain"}
                    >
                      Spain
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/tour/country/germany"}
                    >
                      Germany
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "grey" }}
                    to={"/tour/sale"}
                  >
                    SALE
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "grey" }}
                    to={"/tour/tours"}
                  >
                    TOURS
                  </Link>
                </Nav.Link>

                <NavDropdown title="ADMIN" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/admin/ticket"}
                    >
                      TICKETS
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/admin/avia"}
                    >
                      AVIA TICKETS
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                {!store.users.isAuth ? (
                  <div>
                    <Nav.Link disabled={store.users.isAuth}>
                      <Link
                        style={{ textDecoration: "none", color: "grey" }}
                        to={"/users/auth"}
                      >
                        AUTH
                      </Link>
                    </Nav.Link>

                    <Nav.Link>
                      <Link
                        style={{ textDecoration: "none", color: "grey" }}
                        to={"/users/login"}
                      >
                        LOGIN
                      </Link>
                    </Nav.Link>
                  </div>
                ) : (
                  <div>
                    <NavDropdown
                      title={store.users.userName}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={"/users/myAccounts"}
                        >
                          MY ACCOUNTS
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={"/users/logout"}
                        >
                          LOG OUT
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  fetchVerifyToken,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainedButtons);
