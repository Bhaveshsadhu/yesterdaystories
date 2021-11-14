import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./imgs/YS Logo-01.png";
import header_right_top_img from "./imgs/Personal Stories Remastered.png";
function NavHeader() {
  return (
    <div className="navHeader">
      <div className="linkNavHeader">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" class="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ml-auto">
                <Nav.Link className="link-dark" href="#home">
                  <h4 className="linkText">Product</h4>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h4 className="linkText">FAQs</h4>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h4 className="linkText">Current News</h4>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <img className="header-top-rigth-img" src={header_right_top_img} alt="" />
    </div>
  );
}

export default NavHeader;
