import React from "react";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <div className="div-slider">
      <div className="sl">
        <div className="sliderBar">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-slider"
                src="https://preview.colorlib.com/theme/montana/img/banner/xbanner.png.pagespeed.ic.Fz8_Hc8pX8.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
              <div className="div-slider-header">
                  <img
                    className="img-montana"
                    src="data:image/webp;base64,UklGRoICAABXRUJQVlA4THUCAAAvb8AWEI8w//M//0obSYGzuLvjVTj6IWB/HBaEMCgkAoJDIASAAGjbtlU1tia4EQkuYPz/57pQk5TnWg8R/Z8AfeafT9XP+Uef+VsE1DOGPQFhtvAIg21WxyPY6JNAfYbC6hXSM0TM603PoEo8ZPJTJOqhDT2F2ghSojxHJkuV+BwaXZGqBymkQnqSSO1NT6IK+VkSQ8+iVh7jnb+qfOoP8tsjkM8F4Mezc+UJSKfG+Jjw6t/SqGcy7WMSfMsG8USn/nypU2aJnh4gM2Y75UzeB/QaPaNoNejlYPhFUtgMsNVJoFA77IsXNgNsPaNB9iKEWTCmeVZx7Urs+GWyDNx0iB2/nCk0r1I1a4wcpLjD6rWxSaFClqQEchN7kkKF6DWLUhr0Q2JPUqgQT0RIhzBYZpmxyN3pHquOnf1KltvZJjpmWA5Zbmc7oUo9FEyzxkt+hOQ0uYV+YW4Ub3UEWWeNcmaBKKmznoA0UaM4xUtwKaylWmcm3yhOWEu1zjkZRcp0zRJobu8KleMYN4XKcYwLmSEZ23cY47Uukt1kjNe6SHZBnbwwwokAadbY3rJC1PGmFaKOlwpWqTqhTplEWN5SMLn9noLJ7VfCYBBPFcbi7ZjuCl5zNu5qzsYVVdh1KjRGDlLcGcs9AV6HBK+gsDHuSfAKChvjUoR0TqHhj0X3aAcoUsV92T2quC+7JOu6IGUDWgm6K9TByJJKg7bqLpUGbdXsV/kKxGdJSvXD+vfl4mXIXoXodcieVZwO8bugyo0mda9rWrPEpMjv+u6a1L0EEJ1E8UxSjV78OXJxoulsSU7NEvpx1PNBBcyDLr9DumTEr/onFgA="
                  ></img>
                  <img
                    className="img-icon1"
                    src="https://img.icons8.com/material-rounded/24/ffffff/instagram-new.png"
                  />
                  <img
                    className="img-icon2"
                    src="https://img.icons8.com/material-sharp/24/ffffff/facebook-new.png"
                  />
                  <img
                    className="img-icon3"
                    src="https://img.icons8.com/material-sharp/24/ffffff/twitter-squared.png"
                  />
                  <button className="button-booking">Book A Room</button>
                </div>
                <div className="div-page">
                  <h1 className="h-slider-title">Montana Resort</h1>
                  <p className="p-slider-title">
                    Unlock to enjoy the view of Montana
                  </p>{" "}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-slider"
                src="https://preview.colorlib.com/theme/montana/img/banner/xbanner2.png.pagespeed.ic.RygwS5iHf6.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className="div-slider-header">
                  <img
                    className="img-montana"
                    src="data:image/webp;base64,UklGRoICAABXRUJQVlA4THUCAAAvb8AWEI8w//M//0obSYGzuLvjVTj6IWB/HBaEMCgkAoJDIASAAGjbtlU1tia4EQkuYPz/57pQk5TnWg8R/Z8AfeafT9XP+Uef+VsE1DOGPQFhtvAIg21WxyPY6JNAfYbC6hXSM0TM603PoEo8ZPJTJOqhDT2F2ghSojxHJkuV+BwaXZGqBymkQnqSSO1NT6IK+VkSQ8+iVh7jnb+qfOoP8tsjkM8F4Mezc+UJSKfG+Jjw6t/SqGcy7WMSfMsG8USn/nypU2aJnh4gM2Y75UzeB/QaPaNoNejlYPhFUtgMsNVJoFA77IsXNgNsPaNB9iKEWTCmeVZx7Urs+GWyDNx0iB2/nCk0r1I1a4wcpLjD6rWxSaFClqQEchN7kkKF6DWLUhr0Q2JPUqgQT0RIhzBYZpmxyN3pHquOnf1KltvZJjpmWA5Zbmc7oUo9FEyzxkt+hOQ0uYV+YW4Ub3UEWWeNcmaBKKmznoA0UaM4xUtwKaylWmcm3yhOWEu1zjkZRcp0zRJobu8KleMYN4XKcYwLmSEZ23cY47Uukt1kjNe6SHZBnbwwwokAadbY3rJC1PGmFaKOlwpWqTqhTplEWN5SMLn9noLJ7VfCYBBPFcbi7ZjuCl5zNu5qzsYVVdh1KjRGDlLcGcs9AV6HBK+gsDHuSfAKChvjUoR0TqHhj0X3aAcoUsV92T2quC+7JOu6IGUDWgm6K9TByJJKg7bqLpUGbdXsV/kKxGdJSvXD+vfl4mXIXoXodcieVZwO8bugyo0mda9rWrPEpMjv+u6a1L0EEJ1E8UxSjV78OXJxoulsSU7NEvpx1PNBBcyDLr9DumTEr/onFgA="
                  ></img>
                  <img
                    className="img-icon1"
                    src="https://img.icons8.com/material-rounded/24/ffffff/instagram-new.png"
                  />
                  <img
                    className="img-icon2"
                    src="https://img.icons8.com/material-sharp/24/ffffff/facebook-new.png"
                  />
                  <img
                    className="img-icon3"
                    src="https://img.icons8.com/material-sharp/24/ffffff/twitter-squared.png"
                  />
                  <button className="button-booking">Book A Room</button>
                </div>

                <div className="div-page">
                  <h1 className="h-slider-title">Life Is Beautiful</h1>{" "}
                  <p className="p-slider-title">
                    Unlock to enjoy the view of Montana
                  </p>{" "}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
