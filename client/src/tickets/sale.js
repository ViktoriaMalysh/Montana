import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./sale.css";
import "../App.css";
import { fetchChange } from "../redux/actionUsers";

function Sale() {
  return (
    <div className="fon199">
      <div className="sale">
        <div className="home1">
          <div className="text3">
            <p className="text33">Ongoing Offers</p>
          </div>

          <div className="img11">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img12">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x2.png.pagespeed.ic.MbYDoANTJ3.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img13">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x3.png.pagespeed.ic.Y_ffhAZTDD.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img14">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x2.png.pagespeed.ic.MbYDoANTJ3.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img15">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img16">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x3.png.pagespeed.ic.Y_ffhAZTDD.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img17">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x3.png.pagespeed.ic.Y_ffhAZTDD.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img18">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x2.png.pagespeed.ic.MbYDoANTJ3.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>

          <div className="img19">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"></img>
            <p className="title11">
              Up to 35% savings on Club rooms and Suites
            </p>
            <ul className="ulli">
              <li>Luxaries condition</li>
              <li>3 Adults & 2 Children size</li>
              <li>Sea view side</li>
            </ul>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Book Now
              </Button>{" "}
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sale);
