import React, { Component } from "react";

import style from "./Home.module.css";
// import snakes from "../../MacaPics/maca_igpost.png";
import video from "../../MacaPics/IMG_9722.mp4";

// console.log(snakes); // /logo.84287d09.png

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <video loop="loop" autoplay="" className={style.backgroundVideo}>
          <source src={video} type="video/mp4" />
        </video>

        <div className={style.title}>
          <div className={style.deconstructed}>
            JUST RELEASED
            <div>JUST RELEASED</div>
            <div>JUST RELEASED</div>
            <div>JUST RELEASED</div>
            <div>JUST RELEASED</div>
          </div>
        </div>

        <div className="container">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/608390235&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </div>
    );
  }
}
export default Home;
