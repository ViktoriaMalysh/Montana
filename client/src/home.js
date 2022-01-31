import React from "react";
import Slider from "./components/slider";
import "./components/slider.css";
import "./home.css";
import ReactPlayer from "react-player";
import {
  Card,
  CardGroup,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="div-home">
      {/* <div className="sl">
        <div className="sliderBar"> */}
      <Slider />
      {/* </div> */}
      {/* </div> */}

      <div className="home">
        <div className="home_text">
          <p className="text1">About us</p>
          <p className="text2">A Luxuries Hotel with Nature</p>
          <p className="title1">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
            sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
            Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
        </div>
        <div className="home_img1">
          <img src="https://preview.colorlib.com/theme/montana/img/about/xabout_1.png.pagespeed.ic.LF5rkD9bee.webp"></img>
        </div>
        <div className="home_img2">
          <img src="https://preview.colorlib.com/theme/montana/img/about/xabout_2.png.pagespeed.ic.Iswjjsyaxg.webp"></img>
        </div>
      </div>

      <div className="home1">
        <div className="text3">
          <p className="text33">Ongoing Offers</p>
        </div>

        <div className="img11">
          <img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"></img>
          <p className="title11">Up to 35% savings on Club rooms and Suites</p>
          <ul className="ulli">
            <li>Luxaries condition</li>
            <li>3 Adults & 2 Children size</li>
            <li>Sea view side</li>
          </ul>
          <div className="d-grid gap-2">
            <Button variant="outline-info" size="lg">
              Book Now
            </Button>{" "}
          </div>
        </div>

        <div className="img12">
          <img src="https://preview.colorlib.com/theme/montana/img/offers/x2.png.pagespeed.ic.MbYDoANTJ3.webp"></img>
          <p className="title11">Up to 35% savings on Club rooms and Suites</p>
          <ul className="ulli">
            <li>Luxaries condition</li>
            <li>3 Adults & 2 Children size</li>
            <li>Sea view side</li>
          </ul>
          <div className="d-grid gap-2">
            <Button variant="outline-info" size="lg">
              Book Now
            </Button>{" "}
          </div>
        </div>

        <div className="img13">
          <img src="https://preview.colorlib.com/theme/montana/img/offers/x3.png.pagespeed.ic.Y_ffhAZTDD.webp"></img>
          <p className="title11">Up to 35% savings on Club rooms and Suites</p>
          <ul className="ulli">
            <li>Luxaries condition</li>
            <li>3 Adults & 2 Children size</li>
            <li>Sea view side</li>
          </ul>
          <div className="d-grid gap-2">
            <Button variant="outline-info" size="lg">
              Book Now
            </Button>{" "}
          </div>
        </div>
      </div>

      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=McSTvIqDuso"
          width="100%"
          height="100%"
        />
      </div>

      <div className="food">
        <div className="food_text">
          <p className="text1">Delicious Food</p>
          <h1 className="text2">We Serve Fresh and Delicious Food</h1>
          <p className="title1">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
            sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
            Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
        </div>
        <div className="food_img1">
          <img src="https://preview.colorlib.com/theme/montana/img/about/x1.png.pagespeed.ic.ytFzk1qg9A.webp"></img>
        </div>
        <div className="food_img2">
          <img src="https://preview.colorlib.com/theme/montana/img/about/x2.png.pagespeed.ic.TMQb44M-no.webp "></img>
        </div>
      </div>

      <div className="rooms">
        <Card className="bg-dark text-white room1">
          <Card.Img
            src="https://www.atorus.ru/public/ator/data/536cc3.jpg"
            alt="Room 1"
            style={{ filter: "brightness(70%)" }}
          />
          <Card.ImgOverlay>
            <Card.Text
              style={{
                fontSize: "1.2em",
                paddingTop: "60%",
                marginLeft: "2.5em",
              }}
            >
              From $250/night
            </Card.Text>
            <Card.Title style={{ fontSize: "2.8em", marginLeft: "1em" }}>
              Superior Room
            </Card.Title>
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white room2">
          <Card.Img
            src="https://level.media/wp-content/uploads/2018/07/1341_assa-maris-hotel_101679.jpeg"
            alt="Room 2"
            style={{ filter: "brightness(70%)" }}
          />
          <Card.ImgOverlay>
            <Card.Text
              style={{
                fontSize: "1.2em",
                paddingTop: "60%",
                marginLeft: "2.5em",
              }}
            >
              From $250/night
            </Card.Text>
            <Card.Title style={{ fontSize: "2.8em", marginLeft: "1em" }}>
              Deluxe Room
            </Card.Title>
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white room3">
          <Card.Img
            src="https://bestvietnam.ru/wp-content/uploads/2019/04/%D0%BE%D1%82%D0%B5%D0%BB%D1%8C-1.jpg"
            alt="Room 3"
            style={{ filter: "brightness(70%)" }}
          />
          <Card.ImgOverlay>
            <Card.Text
              style={{
                fontSize: "1.2em",
                paddingTop: "50%",
                marginLeft: "2.5em",
              }}
            >
              From $250/night
            </Card.Text>
            <Card.Title style={{ fontSize: "2.8em", marginLeft: "1em" }}>
              Signature Room
            </Card.Title>
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white room4">
          <Card.Img
            src="https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/07/15.jpg"
            alt="Room 4 "
            style={{ filter: "brightness(70%)" }}
          />
          <Card.ImgOverlay>
            <Card.Text
              style={{
                fontSize: "1.2em",
                paddingTop: "50%",
                marginLeft: "2.5em",
              }}
            >
              From $250/night
            </Card.Text>
            <Card.Title style={{ fontSize: "2.8em", marginLeft: "1em" }}>
              Couple Room
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="con">
        <div className="contact">
          <div className="text_cont">
            <p>For Reservation 0r Query?</p>
          </div>
          <div className="telephone">
            {/* <button>+ 38(099) 999 9999</button> */}
            <a href="" class="double-border-button">
              + 38(099) 999 9999
            </a>
          </div>
        </div>
      </div>

      <div className="image_group">
        <CardGroup>
          <Card>
            <Card.Img src="https://preview.colorlib.com/theme/montana/img/instragram/x1.png.pagespeed.ic.wbbausM5YV.webp" />
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x2.png.pagespeed.ic.K7QQTG31WK.webp"
            />
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x3.png.pagespeed.ic.0qESeb0ofL.webp"
            />
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x4.png.pagespeed.ic.rPdIdf5OIU.webp"
            />
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x5.png.pagespeed.ic.gbYqEWPqMR.webp"
            />
          </Card>
        </CardGroup>
      </div>

      <div className="end">
        <div className="end1">
          <h4 className="endTitle">Address</h4>
          <p className="ppp">200, Green road, Mongla, New Yor City USA</p>
          <Link style={{ color: "white" }}>Get Direction</Link>
        </div>

        <div className="end2">
          <h4 className="endTitle">Reservation</h4>
          <p className="ppp">+10 367 267 2678</p>
          <p className="ppp">reservation@montana.com</p>
        </div>

        <div className="end3">
          <h4 className="endTitle">Navigation</h4>
          <Link
            style={{
              color: "rgba(190, 190, 190, 0.781)",
              textDecoration: "none",
            }}
            to={"/home"}
          >
            Home
          </Link>
          <br />
          <br />
          <Link
            style={{
              color: "rgba(190, 190, 190, 0.781)",
              textDecoration: "none",
              paddingTop: "3em",
            }}
            to={"/rooms"}
          >
            Rooms
          </Link>
          <br />
          <br />
          <Link
            style={{
              color: "rgba(190, 190, 190, 0.781)",
              textDecoration: "none",
              paddingTop: "1em",
            }}
            to={"/about"}
          >
            About
          </Link>
          <br />
          <br />
          <Link
            style={{
              color: "rgba(190, 190, 190, 0.781)",
              textDecoration: "none",
              paddingTop: "1em",
            }}
            to={"/sale"}
          >
            Sale
          </Link>
        </div>

        <div className="end4">
          <h4 className="endTitle">Newsletter</h4>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter your mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              Sign Up
            </Button>
          </InputGroup>
          <p className="ppp">Subscribe newsletter to get updates</p>
        </div>
        <div className="footer_border"></div>
        <div className="theEnd">
          <p className="ppp">
            MONTANA ©2021 All rights reserved | This template is made by MONTANA
          </p>
        </div>
      </div>
    </div>
  );
}
