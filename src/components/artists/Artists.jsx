import React, { Component } from "react";
import video from "../../MacaPics/4bVideo.mp4";
import style from "./Artists.module.css";
import Scroll from "../../MacaPics/double-down.png";
import Bailo from "../../MacaPics/Artists/bailo-2.jpg";
import DJohn from "../../MacaPics/Artists/d-john-2.jpg";
import DamienAvila from "../../MacaPics/Artists/damian-avila.jpg";
import MayhemInAction from "../../MacaPics/Artists/mayhem-in-action.jpg";
import Forti from "../../MacaPics/Artists/forti.jpg";
import Stoutty from "../../MacaPics/Artists/stoutty.png";
import Ciisnero from "../../MacaPics/Artists/ciisnero.png";
import Schade from "../../MacaPics/Artists/schade.png";
import StevieG from "../../MacaPics/Artists/stevie-g.png";

class Artists extends Component {
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <div>
          <video loop="loop" autoplay="" className={style.video} muted>
            <source
              src={video}
              type="video/mp4"
              className={style.backgroundVideo}
            />
          </video>

          <div className={style.title}>
            <div className={style.deconstructed}>
              ARTISTS
              <div>ARTISTS</div>
              <div>ARTISTS</div>
              <div>ARTISTS</div>
              <div>ARTISTS</div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=wldShW0ZIuc"
              className={style.button}
            >
              Watch Video - 4B & Friends
            </a>
            <br />
            <img className={style.scroll} src={Scroll} alt="Scroll Down" />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/bailobeatz" target="_blank">
                <img src={Bailo} alt="Bailo" className={style.Artists} />
                <div className={style.overlay}>
                  <div className={style.text}>Bailo</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/d-john-2" target="_blank">
                <img src={DJohn} alt="D-John" className={style.Artists} />
                <div className={style.overlay}>
                  <div className={style.text}>D-John</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/fuckingdamian" target="_blank">
                <img
                  src={DamienAvila}
                  alt="DamienAvila"
                  className={style.Artists}
                />
                <div className={style.overlay}>
                  <div className={style.text}>Damien Avila</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/mayheminaction" target="_blank">
                <img
                  src={MayhemInAction}
                  alt="Mayhem in Action"
                  className={style.Artists}
                />
                <div className={style.overlay}>
                  <div className={style.text}>Mayhem in Action</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/fortimusic" target="_blank">
                <img src={Forti} alt="Forti" className={style.Artists} />
                <div className={style.overlay}>
                  <div className={style.text}>Forti</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/stoutty" target="_blank">
                <img src={Stoutty} alt="Stoutty" className={style.Artists} />
                <div className={style.overlay}>
                  <div className={style.text}>Stoutty</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/iamciisnero" target="_blank">
                {" "}
                <img src={Ciisnero} alt="Ciisnero" className={style.Artists} />
                <div className={style.overlay}>
                  <div className={style.text}>Ciisnero</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/throwinschade" target="_blank">
                {" "}
                <img src={Schade} alt="Schade" className={style.Artists} />
                <div className={style.overlay}>
                  <div className={style.text}>Schade</div>
                </div>
              </a>
            </div>

            <div className={`${style.box} col-xs-10 col-md-4`}>
              <a href="https://soundcloud.com/imstevieg" target="_blank">
                {" "}
                <img src={StevieG} alt="StevieG" className={style.Artists} />
                <div className={style.overlay}>
                  <div className={style.text}>Stevie G</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Artists;
