import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Search from '../Search/search'
import "./layout.css"

const Layout = ({ children }) => (
  <div className="main">
    <Jumbotron>
      <h1>SEOSIFT <br></br> <small> HELPING BUSINESSES UNDERSTAND THE WEB</small> </h1>
      <p>
        Use the following search engine to learn more about the information on your website.
  </p>
      <p>
        <Button href="/search/#search" variant="warning">Search</Button>
      </p>
    </Jumbotron>
    {localStorage.user ?
      <Navbar sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">SEOSIFT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/blog/#blog">Blog</Nav.Link>
            <Nav.Link href="/saved#saved">Saved Sites</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login/#login">Logout</NavDropdown.Item>
              <NavDropdown.Item href="/privacy/#privacy">Privacy</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form inline>
            <Search />
          </Form>
        </Navbar.Collapse>
      </Navbar> :
      <Navbar sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">SEOSIFT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/blog/#blog">Blog</Nav.Link>
            <Nav.Link href="/signup/#signup"> Signup </Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login/#login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/privacy/#privacy">Privacy</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form inline>
            <Search />
          </Form>
        </Navbar.Collapse>
      </Navbar>}
    <br></br>
    <div style={{ width: "100%" }}>{children}</div>
    <footer>

      <small>&copy; Copyright 2020,
    <a target="_blank" rel="noopener noreferrer" href="http://queenscript.com/">Queenscript</a></small>
    <p style={{color: "white"}}> Check out this promo deal to get better rankings on your SEO with <a style={{color: "white", fontWeight: 900}} target="_blank" href="https://83930et1x9-hbo0eqodeog7xb0.hop.clickbank.net/">Long Tail Pro</a></p>
    </footer>
  </div>
)

export default Layout