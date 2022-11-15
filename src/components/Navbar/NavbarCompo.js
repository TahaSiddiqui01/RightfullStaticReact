import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Rightful from "../../images/rightful-logo.png";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

function NavbarCompo() {
  return (
    <>
      <section className="navbar_section">
        <Navbar className="top-nav" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="me-auto"
                style={{ width: "100%", maxWidth: "1000px" }}
              >
                <Nav.Link className="mx-4 nav-links" href="#home">
                  CONTACT
                </Nav.Link>
                <Nav.Link className="mx-4 nav-links" href="#link">
                  ABOUT
                </Nav.Link>
                <Nav.Link className="mx-4 nav-links" href="#marketplace">
                  MARKETPLACE
                </Nav.Link>
              </Nav>
              <div className="logo-sec my-2 logo justify-content-end align-items-end  flex-column">
                <span
                  className="beta-top"
                  style={{ backgroundColor: "#0990f2" }}
                >
                  BETA
                </span>
                <Navbar.Brand className="logo-img" href="#home">
                  <img width="190" src={Rightful} />
                </Navbar.Brand>
              </div>
              <Form className="d-flex  my-2 w-100 justify-content-end">
                <Button className="mx-2  px-4 py-2 nav-btn" variant="info">
                  SIGN IN
                </Button>
                <Button className="mx-2 px-4 py-2  nav-btn" variant="info">
                  SIGN UP
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
}

export default NavbarCompo;
