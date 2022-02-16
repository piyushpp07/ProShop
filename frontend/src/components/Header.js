import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
const Header = () => {
   return (
      <header><Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
         <Container>
            <Navbar.Brand href="/">Proshop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>cart</Nav.Link>
                  <Nav.Link href="/signin"><i className="fas fa-user"></i>Signin</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar></header>
   )
}

export default Header