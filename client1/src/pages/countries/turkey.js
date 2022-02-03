import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="div-country">
      <div className="div-form-country">
        <h1 className="h1-title-country">Turkey</h1>
        <img
          className="img-country"
          src="https://aaatravel.ru/wp-content/uploads/2019/09/turciya_morya_banner2.jpg"
        />

        <p className="textTurkey1">
          Istanbul is the largest city in Turkey, constituting the country's
          economic, cultural and historical heart. With a population of 14.1
          million, the city forms the largest urban agglomeration in Europe.
          Located on both sides of the Bosphorus, the narrow strait between the
          Black Sea and the Marmara Sea, Istanbul bridges Asia and Europe both
          physically and culturally.
          {/* <br /> */}
        </p>
        <br />
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/250px-Flag_of_Turkey.svg.png"
        />

        <div className="div-container">
          <div className="">
            <br />

            <img
              className=""
              src="https://smartstaff.com.ua/wp-content/uploads/2021/01/image.jpg"
            />
            <p className="textTurkey">
              With its long history at the center of empires, Istanbul offers a
              wealth of historic and religious places to take in. The bulk of
              these ancient monuments, dating back to Roman, Byzantine, and
              Ottoman periods, including the Hagia Sophia, Topkapı Palace,
              Sultanahmet Mosque (Blue Mosque), and Basilica Cisternare located
              around Sultanahmet Square, while some others are dispersed
              throughout the peninsula of the old city, such as Church of St
              Savior in Chora (Kariye Müzesi), entire inside of which is covered
              by mind-blowing frescos and mosaics.
            </p>
          </div>
        </div>

        <div className="div-container">
          <div className="">
            <p
              // className="textTurkey"
              className="p-text-country"
            >
              An impressive section of mostly intact Theodosian walls, which
              mark the full length of the western boundary of the peninsula, is
              right next to this particular church. North of the peninsula of
              old city, across the Golden Horn, is Galata, crowned by the Galata
              Tower. Istanbul Modern, with its exhibitions of contemporary
              Turkish art, is on the nearby waterfront of Karaköy. Another sight
              of religious significance close by is the Galata Whirling Dervish
              Hall of Sufi Mevlevi order, just north of the Tower. Further north
              is the Istiklal Avenue, Istanbul's prominent pedestrian street
              running from near Galata Tower to Taksim Square, the central
              square of whole city.
            </p>
            <img
              // className="imgTurkey1"
              className=" "
              src="https://smartstaff.com.ua/wp-content/uploads/2021/01/image.jpg"
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
