import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="div-country">
      <div className="div-form-country">
        <h1 className="h1-title-country">Germany</h1>
        <img
          className="img-country"
          src="https://ychef.files.bbci.co.uk/976x549/p08fgqkq.jpg"
        />

        <p className="textTurkey1">
        Located in the heart of the old continent, Germany is compelled of 
              16 states and is well known for being the largest national economy 
              in Europe and one of the biggest in the world. 
        </p>
        <br />
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Germany_%28state%29.svg/2560px-Flag_of_Germany_%28state%29.svg.png"
        />

        <div className="div-container">
          <div className="">
            <br />

            <img
              className=""
              src="https://tradeandinvestmentpromotion.com/wp-content/uploads/2020/12/germany.jpg"
            />
            <p className="textTurkey">
            With an interesting 
              and rich history narrated by the old-fashion and colorful architecture,
              castles, palaces, cathedrals and monuments themselves, its landscapes, 
              mountains and forests, delicious food and beer, Germany remains one of 
              the top destinations in the world for travelers.<br/>
              Usually when one says Germany, among the first things that come to
              people’s mind is Hitler, the Berlin Wall and beer. However, 
              Germany is not all about that. 
            </p>
          </div>
        </div>

        <div className="div-container">
          <div className="">
            <p
              // className="textTurkey"
              className="p-text-country"
            >
            Travelers who have visited the 
              country know that Germany is actually not only an economically 
              and politically powerful country, but it also has a rich culture,
              with a population that has an extraordinary respect for tradition,
              history and humanity.<br/>
              In this article, we have listed some of the things that Germany is
              very well known for, and given some interesting facts on how they 
              ecame so known, and what makes them so interesting.
            </p>
            <img
              // className="imgTurkey1"
              className=" "
              src="https://www.mawista.com/wp-content/uploads/2019/11/warum-studieren-in-deutschland-den-lebenslauf-aufpeppt.jpg"
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
