import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="block1">
      <div className="form181">
        <h1 className="titleTurkey">Turkey</h1>
        <img
          className="imgTurkey"
          src="https://aaatravel.ru/wp-content/uploads/2019/09/turciya_morya_banner2.jpg"
        />

        <p className="text-secondary col-xl-7 col-lg-7 textTurkey1">
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
          className="col-xl-3 col-lg-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/250px-Flag_of_Turkey.svg.png"
        />

        <div className="container">
          <div className="row">
            <br />

            <img
              className="col-xl-7 col-lg-7"
              src="https://smartstaff.com.ua/wp-content/uploads/2021/01/image.jpg"
            />
            <p className="col-xl-5 col-lg-5 text-secondary textTurkey">
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

        <div className="container">
          <div className="row">
            <p
              // className="textTurkey"
              className="col-xl-7 col-lg-7 text-secondary textTurkey"
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
              className="col-xl-5 col-lg-5 "
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
