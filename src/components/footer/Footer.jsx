import React, { Component } from "react";
import * as subscriptionService from "../../services/subscriptionService";
import style from "./Footer.module.css";
import facebook from "../../MacaPics/footer-social-1.png";
import twitter from "../../MacaPics/footer-social-2.png";
import instagram from "../../MacaPics/footer-social-3.png";

import {
  Nav,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  // ModalFooter,
  Input,
  Label
  // Form,
  // FormGroup
} from "reactstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      alertModal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      name: this.state.email
    };
    subscriptionService
      .addSubscriber(payload)
      .then(this.subscriptionSuccess)
      .catch(this.susbcriptionError);
  };

  subscriptionSuccess = res => {
    console.log(res);
    this.setState({ alertModal: true, email: "", name: "", modal: false });
  };

  subscriptionError = error => {
    console.log(error);
  };

  setSweetAlert = () => {
    this.setState(prevState => ({
      alertModal: !prevState.alertModal
    }));
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <div className={style.footerNav}>
          <Nav>
            <NavLink href="#" className={style.nav}>
              About{" "}
            </NavLink>
            <NavLink className={style.nav} onClick={this.toggle}>
              Subscribe
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
        <Modal
          className={style.modal}
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader className={style.modalHeader}>Subscribe </ModalHeader>
          <ModalBody className={style.modalBody}>
            <Label for="name">Name</Label>
            <Input
              type="email"
              name="name"
              className={style.input}
              onChange={this.handleChange}
              value={this.state.name}
            />{" "}
            <br />
            <Label for="email">Email</Label>
            <Input
              name="email"
              className={style.input}
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br />
            <button
              type="button"
              onClick={this.handleSubmit}
              className={style.button}
            >
              Submit
            </button>
            <p className={style.close} onClick={this.toggle}>
              Close
            </p>
          </ModalBody>
        </Modal>
        {this.state.alertModal && (
          <Modal
            className={style.modal}
            isOpen={this.state.alertModal}
            toggle={this.setSweetAlert}
          >
            <ModalHeader className={style.modalHeader}>Subscribe </ModalHeader>
            <ModalBody>Thank You!</ModalBody>
          </Modal>
        )}
      </div>
    );
  }
}

export default Footer;
