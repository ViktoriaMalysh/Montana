import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="block1">
      <div className="form181">
        <h1 className="titleTurkey">Egypt</h1>
        <img
          className="imgTurkey"
          src="https://www.osiristours.com/wp-content/uploads/2021/01/Giza-Pyramids-Egypt.jpg"
        />

        <p className="text-secondary col-xl-7 col-lg-7 textTurkey1">
          Without the Nile River, all of Egypt would be desert. Only about an
          2.5cm of rain falls throughout Egypt each year. But each summer, the
          Nile river rises because of rains at its source, far to the south in
          Ethiopia.
        </p>
        <br />
        <img
          className="col-xl-3 col-lg-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png"
        />

        <div className="container">
          <div className="row">
            <br />

            <img
              className="col-xl-7 col-lg-7"
              src="https://www.airlive.net/wp-content/uploads/2018/01/Think-Egypt-Giza-Sphynx-178375366-pius99-copy.jpg"
            />
            <p className="col-xl-5 col-lg-5 text-secondary textTurkey">
              When this happens, floods cover the river’s valleys, leaving
              sediments needed for trees, plants and crops to grow.
              <br /> Egypt is often divided into two sections – Upper Egypt in
              the south and Lower Egypt in the north. The sections are named
              this way because the Nile flows from south to north. The river
              empties into the Mediterranean Sea, on the country’s north coast.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <p className="col-xl-7 col-lg-7 text-secondary textTurkey">
              Southern Egypt’s landscape contains low mountains and desert.
              Northern Egypt has wide valleys near the Nile, and desert to the
              east and west. North of Cairo (Egypt’s capital city) is the
              sprawling, triangular Nile River Delta. This fertile land is
              completely covered with farms.
            </p>
            <img
              className="col-xl-5 col-lg-5 "
              src="https://www.afrik21.africa/wp-content/uploads/2020/06/shutterstock_1456340768-1-800x400.jpg"
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
