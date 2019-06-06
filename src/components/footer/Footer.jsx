import React, { Component } from "react";
import style from "./Footer.module.css";
import facebook from "../../MacaPics/footer-social-1.png";
import twitter from "../../MacaPics/footer-social-2.png";
import instagram from "../../MacaPics/footer-social-3.png";
import { Nav, NavLink } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <div className={style.footerNav}>
          <Nav>
            <NavLink href="#" className={style.nav}>
              About{" "}
            </NavLink>
            <NavLink className={style.nav} href="#">
              Press{" "}
            </NavLink>
          </Nav>
        </div>
        <div style={{ float: "right", marginRight: "100px" }}>
          <a href="https://www.facebook.com/maca.mediarut/" target="_blank">
            <img src={facebook} alt="Facebook" style={{ margin: "15px" }} />
          </a>
          <a href="https://twitter.com/MACATWEETS_" target="_blank">
            <img src={twitter} alt="Twitter" style={{ margin: "15px" }} />
          </a>
          <a href="https://www.instagram.com/macagram_/" target="_blank">
            <img src={instagram} alt="Instagram" style={{ margin: "15px" }} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
