import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
   return (
      <header><Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
         <Container>
            <LinkContainer to="/">
               <Navbar.Brand >Proshop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <LinkContainer to="/cart">
                     <Nav.Link ><i className="fas fa-shopping-cart"></i>cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                     <Nav.Link ><i className="fas fa-user"></i>Signin</Nav.Link>
                  </LinkContainer>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar></header>
   )
}

export default Header