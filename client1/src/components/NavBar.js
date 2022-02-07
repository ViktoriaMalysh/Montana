import { Link } from "react-router-dom";

function NavBar(){
  return(
    <>
    <div className="nav-link-profile">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/settings/profile"}
            >
              <div className="div-nav-link">Profile</div>
            </Link>
          </div>

          <div className="nav-link-profile">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/settings/account"}
            >
              <div className="div-nav-link">Account</div>
            </Link>
          </div>

          <div className="div-border"></div>
          <p className="p-prof-sett-title">Access</p>

          <div className="nav-link-profile">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/settings/emails"}
            >
              <div className="div-nav-link">Emails</div>
            </Link>
          </div>
          <div className="nav-link-profile">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/settings/password"}
            >
              <div className="div-nav-link">Password</div>
            </Link>
          </div>
          <div className="nav-link-profile">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/settings/phone"}
            >
              <div className="div-nav-link">Phone</div>
            </Link>
          </div>
          <div className="div-border"></div>
          <p className="p-prof-sett-title">Cards</p>
          <div className="nav-link-profile">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/settings/cards"}
            >
              <div className="div-nav-link">Payment card</div>
            </Link>
          </div>
          </>
  )
}

export default NavBar;