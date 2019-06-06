import React, { Component } from "react";
import style from "./Releases.module.css";
import snakes from "../../MacaPics/maca_igpost.png";
import HowWeDoIt from "../../MacaPics/how-we-do-it-art.png";
import Wassat from "../../MacaPics/damian-avila-wassat-art.png";
import Selva from "../../MacaPics/mayhem-in-action-forti-selva-art.png";
import WarEp from "../../MacaPics/stoutty-war-ep-art.png";
import Kulikitaka from "../../MacaPics/ciisnero-kulikitaka-art.png";
import Backbreaker from "../../MacaPics/backbreaker-art.png"; 
import Drown from "../../MacaPics/dj4b-drown-art.png";
import Warp from "../../MacaPics/dual-color-warp.png";
import Teez from "../../MacaPics/teez.png";
import Hughes from "../../MacaPics/kyle-hughes_1.png";
import Retrohandz from "../../MacaPics/retrohandz_1.png";
import MasQue from "../../MacaPics/frank-Bizzle.png";

class Releases extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={snakes} className={style.header} alt="MacaLogo" />
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/bailo-d-john-how-we-do-it"
                target="_blank"
              >
                <img
                  className={style.img}
                  className={style.img}
                  src={HowWeDoIt}
                  alt="Song"
                />
                <span>How We Do It </span>
              </a>
            </div>

            <div className={`${style.releases} col-md-5 col-xs-12 `}>
              <a
                href="https://soundcloud.com/maca-music/damian-avila-wassat"
                target="_blank"
              >
                <img className={style.img} src={Wassat} alt="Song" />
                <span>Wassat </span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/bailo-d-john-how-we-do-it"
                target="_blank"
              >
                <img className={style.img} src={Selva} alt="Song" />
                <span>Selva </span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/sets/stoutty-war-ep"
                target="_blank"
              >
                <img className={style.img} src={WarEp} alt="Song" />
                <span>War Ep </span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/ciisnero-kulikitaka"
                target="_blank"
              >
                <img className={style.img} src={Kulikitaka} alt="Song" />
                <span>Kulikitaka </span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/throwinschade/sets/backbreaker"
                target="_blank"
              >
                <img className={style.img} src={Backbreaker} alt="Song" />
                <span>BackBreaker</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a href="https://soundcloud.com/dj4b/drown" target="_blank">
                <img className={style.img} src={Drown} alt="Song" />
                <span>Drown</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/dual-color-warp-originalmix"
                target="_blank"
              >
                <img className={style.img} src={Warp} alt="Song" />
                <span>Dual Color - Warp (Original Mix)</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/teez-pound-for-pound-original-mix"
                target="_blank"
              >
                <img className={style.img} src={Teez} alt="Song" />
                <span>Teez- Pound For Pound (Original Mix)</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/no-title-kyle-hughes-remix"
                target="_blank"
              >
                <img className={style.img} src={Hughes} alt="Song" />
                <span> No Title (Kyle Hughes Remix)</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/mink-rug-frank-bizzle-remix"
                target="_blank"
              >
                <img className={style.img} src={Hughes} alt="Song" />
                <span>Mink Rug (Frank Bizzle Remix) </span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/ignant-james-nasty-remix"
                target="_blank"
              >
                <img className={style.img} src={Hughes} alt="Song" />
                <span>Ignant (James Nasty Remix) </span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/back-crack-dj-rell-stevie-g"
                target="_blank"
              >
                <img className={style.img} src={Hughes} alt="Song" />
                <span>Back Crack (DJ Rell & Stevie G Remix) </span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/retrohandz-20-foot-previewout-1124"
                target="_blank"
              >
                <img className={style.img} src={Retrohandz} alt="Song" />
                <span>Retrohandz- 20 Foot (Original Mix)</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/frank-bizzle-mas-que"
                target="_blank"
              >
                <img className={style.img} src={MasQue} alt="Song" />
                <span>Frank Bizzle- Mas Que (Original Mix)</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/mas-que-wall-remix-1"
                target="_blank"
              >
                <img className={style.img} src={MasQue} alt="Song" />
                <span>Mas Que (Wall Remix)</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/mas-que-njoi-remix-1"
                target="_blank"
              >
                <img className={style.img} src={MasQue} alt="Song" />
                <span>Mas Que (njoi Remix)</span>
              </a>
            </div>
            <div className={`${style.releases} col-md-5 col-xs-12`}>
              <a
                href="https://soundcloud.com/maca-music/frank-bizzle-mas-que-flipngawd"
                target="_blank"
              >
                <img className={style.img} src={MasQue} alt="Song" />
                <span>Frank Bizzle - Mas Que (FlipN'Gawd Remix)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Releases;
