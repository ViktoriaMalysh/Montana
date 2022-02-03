import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="div-country">
      <div className="div-form-country">
        <h1 className="h1-title-country">Egypt</h1>
        <img
          className="img-country"
          src="https://www.osiristours.com/wp-content/uploads/2021/01/Giza-Pyramids-Egypt.jpg"
        />

        <p className="p-text-country">
          Without the Nile River, all of Egypt would be desert. Only about an
          2.5cm of rain falls throughout Egypt each year. But each summer, the
          Nile river rises because of rains at its source, far to the south in
          Ethiopia.
        </p>
        <br />
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png"
        />

        <div className="div-container">
          <div className="">
            <br />

            <img
              className=""
              src="https://www.airlive.net/wp-content/uploads/2018/01/Think-Egypt-Giza-Sphynx-178375366-pius99-copy.jpg"
            />
            <p className="textTurkey">
              When this happens, floods cover the river’s valleys, leaving
              sediments needed for trees, plants and crops to grow.
              <br /> Egypt is often divided into two sections – Upper Egypt in
              the south and Lower Egypt in the north. The sections are named
              this way because the Nile flows from south to north. The river
              empties into the Mediterranean Sea, on the country’s north coast.
            </p>
          </div>
        </div>

        <div className="div-container">
          <div className="">
            <p className="textTurkey">
              Southern Egypt’s landscape contains low mountains and desert.
              Northern Egypt has wide valleys near the Nile, and desert to the
              east and west. North of Cairo (Egypt’s capital city) is the
              sprawling, triangular Nile River Delta. This fertile land is
              completely covered with farms.
            </p>
            <img
              className=""
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
