import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <div className="div-slider">
      <div className="sl">
        <div className="sliderBar">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-slider"
                src="https://www.bag-travels.ru/plyazhi-kipra.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1 style={{ fontSize: "5em", margin: "5em" }}>
                  Montana Resort<br></br>{" "}
                  <h3>Unlock to enjoy the view of Montana</h3>{" "}
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-slider"
                src="https://eta-dzeta.ru/wp-content/uploads/2020/01/beach-1867285_960_720-840x400.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1 style={{ fontSize: "5em", margin: "5em" }}>
                  Life is Beautiful<br></br>{" "}
                  <h3>Unlock to enjoy the view of Montana</h3>{" "}
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
