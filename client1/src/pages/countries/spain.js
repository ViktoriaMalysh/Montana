import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="div-country">
      <div className="div-form-country">
        <h1 className="h1-title-country">Spain</h1>
        <img
          className="img-country"
          src="https://www.state.gov/wp-content/uploads/2018/11/Spain-2109x1406.jpg"
        />

        <p className="textTurkey1">
          Spain is a storied country of stone castles, snowcapped mountains,
          vast monuments, and sophisticated cities, all of which have made it a
          favoured travel destination. The country is geographically and
          culturally diverse. Its heartland is the Meseta, a broad central
          plateau half a mile above sea level.
        </p>
        <br />
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png"
        />

        <div className="div-container">
          <div className="">
            <br />

            <img
              className=""
              src="https://open4business.com.ua/wp-content/uploads/2021/07/mwl_madrid_spain_650.jpg"
            />
            <p className="textTurkey">
              Much of the region is traditionally given over to cattle ranching
              and grain production; it was in this rural setting that Miguel de
              Cervantes’s Don Quixote tilted at the tall windmills that still
              dot the landscape in several places. In the country’s northeast
              are the broad valley of the Ebro River, the mountainous region of
              Catalonia, and the hilly coastal plain of Valencia. To the
              northwest is the Cantabrian Mountains, a rugged range in which
              heavily forested, rain-swept valleys are interspersed with tall
              peaks.
            </p>
          </div>
        </div>

        <div className="div-container">
          <div className="">
            <p className="p-text-country">
              Spain’s countryside is quaint, speckled with castles, aqueducts,
              and ancient ruins, but its cities are resoundingly modern. The
              Andalusian capital of Sevilla (Seville) is famed for its musical
              culture and traditional folkways; the Catalonian capital of
              Barcelona for its secular architecture and maritime industry; and
              the national capital of Madrid for its winding streets, its
              museums and bookstores, and its around-the-clock lifestyle. Madrid
              is Spain’s largest city and is also its financial and cultural
              centre, as it has been for hundreds of years.
            </p>
            <img
              className=" "
              src="https://www.schengenvisainfo.com/news/wp-content/uploads/2021/06/Madrid-1.jpg"
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
