import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Avante_(partido_político).png";

const menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="125"
              height="44,5"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Link className="nav-link" to="/partido">
              Sobre nós
            </Link>
            <Link className="nav-link" to="/deputados">
              Deputados
            </Link>
            <Link className="nav-link" to="/contato">
              Contato
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default menu;
