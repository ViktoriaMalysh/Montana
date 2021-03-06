import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="div-country">
      <div className="div-form-country">
        <h1 className="h1-title-country">Greece</h1>
        <img
          className="img-country"
          src="https://d5n7s9k9.rocketcdn.me/wp-content/uploads/2021/06/greece-digital-nomad-destination-1080x675.jpg"
        />

        <p className="textTurkey1">
          Greece has been inhabited since the Paleolithic era. In ancient times
          there have been three main civilizations in Greece, the Trojan
          civilization in Troy, the Cretan or Minoan civilization centered on
          Crete, and the Helladic or Mycenaean civilization of the Greek
          mainland.
        </p>
        <br />
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1200px-Flag_of_Greece.svg.png"
        />

        <div className="div-container">
          <div className="">
            <br />

            <img
              className=""
              src="https://retirepedia.com/wp-content/uploads/2021/07/A-photo-of-the-Acropolis-of-Athens-in-Greece.-It-shows-an-ancient-Greek-structure-sitting-on-top-of-a-hih-platform-above-the-city.jpg"
            />
            <p className="textTurkey">
              Despite its relative small area size, the weather in Greece varies
              widely between the different areas. The northern, more mountainous
              regions, experience winter cold in its extreme; ice and snow
              become a permanent feature of the landscape and the temperatures
              settle on lower numbers. The coastal areas and Greek islands
              experience a milder winter in terms of ice and snow, but high
              humidity and strong coastal winds during the winter make the cold
              seem very bitter. The summer is very hot and dry, which makes
              Greece a favorite vacation spots for sun and sea lovers.
            </p>
          </div>
        </div>

        <div className="div-container">
          <div className="">
            <p className="p-text-country">
              Greek's victory against the Persian invaders at the beginning of
              the 5th century strengthens Athens' role as the leader of the
              Greek world. It marks the beginning of an epoch called "The Golden
              Age of Pericles," in which Athens became the cradle of democracy
              itself. In the following Hellenistic Period, Greek civilization
              has spread, and the Greek language became official in the eastern
              Mediterranean.
            </p>
            <img
              className=""
              src="https://www.history.com/.image/t_share/MTU3ODc5MDg2NzAwNTcwMzM1/greece-attica-athens-acropolis-listed-as-world-heritage-by-unesco.jpg"
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
