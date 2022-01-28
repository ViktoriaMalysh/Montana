import React from "react";
import "./country.css";

const Post = () => {
  return (
    <div className="block1">
      <div className="form181">
        <h1 className="titleTurkey">Italy</h1>
        <img
          className="imgTurkey"
          src="https://initalycom.files.wordpress.com/2019/12/italy-city-rome.jpg?w=1200"
        />

        <p className="text-secondary col-xl-7 col-lg-7 textTurkey1">
        Italy, country of south-central Europe, occupying a peninsula that 
              juts deep into the Mediterranean Sea. Italy comprises some of the 
              most varied and scenic landscapes on Earth and is often described as 
              a country shaped like a boot. At its broad top stand the Alps, which 
              are among the world’s most rugged mountains. 
        </p>
        <br />
        <img
          className="col-xl-3 col-lg-3"
          src="https://flagshoppen.com/wp-content/uploads/2021/03/Italy-Flag.png"
        />

        <div className="container">
          <div className="row">
            <br />

            <img
              className="col-xl-7 col-lg-7"
              src="https://www.wantedinmilan.com/i/preview/storage/uploads/2020/06/italy-global-leader-tourism-travel.jpg"
            />
            <p className="col-xl-5 col-lg-5 text-secondary textTurkey">
            Italy’s highest points 
              are along Monte Rosa, which peaks in Switzerland, and along Mont Blanc,
              which peaks in France. The western Alps overlook a landscape of 
              Alpine lakes and glacier-carved valleys that stretch down to the 
              Po River and the Piedmont. Tuscany, to the south of the cisalpine 
              region, is perhaps the country’s best-known region. From the central 
              Alps, running down the length of the country, radiates the tall
              Apennine Range, which widens near Rome to cover nearly the entire 
              width of the Italian peninsula.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <p className="col-xl-7 col-lg-7 text-secondary textTurkey">
            South of Rome the Apennines narrow 
              and are flanked by two wide coastal plains, one facing the Tyrrhenian 
              Sea and the other the Adriatic Sea. Much of the lower Apennine chain is 
              near-wilderness, hosting a wide range of species rarely seen elsewhere 
              in western Europe, such as wild boars, wolves, asps, and bears. The 
              southern Apennines are also tectonically unstable, with several active 
              volcanoes, including Vesuvius, which from time to time belches ash and 
              steam into the air above Naples and its island-strewn bay. At the bottom 
              of the country, in the Mediterranean Sea, lie the islands of Sicily and
              Sardinia.
            </p>
            <img
              className="col-xl-5 col-lg-5 "
              src="https://www.wantedinrome.com/i/preview/storage/uploads/2021/08/EU-drops-US-from-covid-safe-travel-list-but-can-american-tourists-still-travel-to-italy.jpg"
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
