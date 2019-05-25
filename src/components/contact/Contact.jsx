import React, { Component } from "react";
import style from "./Contact.module.css";
import snakes from "../../MacaPics/maca_igpost.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={snakes} className={style.header} alt="MacaLogo" />
        </div>
        <br />
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Contact Us
        </h1>
        <div className="container-fluid">
          <form action="https://formspree.io/email@domain.tld" method="POST">
            <div>
              <div className="row justify-content-center">
                <div
                  style={{ textAlign: "center" }}
                  className="col-md-3 col-sm-11 col-xs-11"
                >
                  <label className={style.label}>Name: </label>
                  <br />
                  <input type="text" name="name" className={style.input} />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="col-md-3 col-offset-1 col-sm-11 col-xs-11"
                >
                  <label className={style.label}>Email: </label>
                  <br />
                  <input type="email" name="_replyto" className={style.input} />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="col-md-3 col-offset-1 col-sm-11 col-xs-11"
                >
                  <label className={style.label}>Subject: </label>
                  <br />
                  <input type="text" name="subject" className={style.input} />
                </div>
              </div>{" "}
              <br />
              <div style={{ textAlign: "center" }} className="col-12">
                <label className={style.label}>Message: </label>
                <br />
                <textarea
                  type="text"
                  name="message"
                  className={style.textArea}
                />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <input
                type="submit"
                value="Send"
                style={{ textAlign: "center" }}
                className={style.button}
              />
            </div>
          </form>
        </div>
        <div style={{ textAlign: "center" }} className="col-12">
          If you are artist and would like to submit your work please{" "}
          <a
            href="http://labelmaca1.label-engine.com/demos#top"
            target="_blank"
            className="contact-artist-link"
          >
            click here
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
