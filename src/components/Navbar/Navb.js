import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './StylesN.css'
import { useHistory } from 'react-router-dom';

const Navb = () => {

    let History = useHistory();
  
      return (
        <Navbar bg="dark" variant="dark" className = "navb">
    <Container>
    <Navbar.Brand href="#home">Estudiantes</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick = {()=>History.push('/')} className =  "Bresumen">Home</Nav.Link>
      <Nav.Link onClick = {()=>History.push('/Registros')} className =  "Bresumen">Registros</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
  }
  
  export default Navb;
  