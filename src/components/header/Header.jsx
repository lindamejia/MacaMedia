import React from "react";
import logo from "../../MacaPics/logo.png";
import macaLogo from "../../MacaPics/macaWhite.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import style from "./Header.module.css";

console.log(logo); // /logo.84287d09.png

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "white",
      backgroundColor: "",
      logo: require("../../MacaPics/macaWhite.png")
    };

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({
        color: "black",
        backgroundColor: "white",
        logo: require("../../MacaPics/logo.png")
      });
    } else {
      this.setState({
        color: "white",
        backgroundColor: "",
        logo: require("../../MacaPics/macaWhite.png")
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    // Import result is the URL of your image
    return (
      <div>
        <Navbar
          color={this.state.backgroundColor}
          light
          expand="md"
          fixed="top"
          className={style.navBar}
        >
          <NavbarBrand href="/" className="mt-auto">
            <img src={this.state.logo} alt="Logo" className={style.logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} class="primary navbar-toggler" />
          <Collapse
            isOpen={this.state.isOpen}
            className={style.collapse}
            navbar
          >
            <Nav className={`${style.mainNav} ml-auto`} navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/"
                  className={style.nav}
                  style={{ color: this.state.color }}
                >
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/releases"
                  className={style.nav}
                  style={{ color: this.state.color }}
                >
                  RELEASES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/artists"
                  className={style.nav}
                  style={{ color: this.state.color }}
                >
                  ARTISTS
                </NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink
                  tag={Link}
                  to="/shop"
                  className={style.nav}
                  style={{ color: this.state.color }}
                >
                  SHOP
                </NavLink> */}
                <NavLink
                  href="https://macamerch.myshopify.com/password"
                  className={style.nav}
                  style={{ color: this.state.color }}
                >
                  SHOP
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/contact"
                  className={style.nav}
                  style={{ color: this.state.color }}
                >
                  CONTACT
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Header);
