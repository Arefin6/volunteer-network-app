import React from 'react';
import logo from '../../logos/Group 1329.png';
import './HomeNav.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeNvigation = () => {
    return (
    <div>
    <Navbar bg="light" expand="lg">
     <Navbar.Brand href="/home"><img src={logo} alt="" style={{width:"120px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-4">
            <Nav.Link href="/home" className="link-style">Home</Nav.Link>
            <Nav.Link href="#"  className="link-style">Donation</Nav.Link>
            <Nav.Link href="#"  className="link-style">Event</Nav.Link>
            <Nav.Link href="#"  className="link-style">Blog</Nav.Link>
             <Button variant="primary" className="ml-5">Register</Button>
              <Link className="btn btn-dark ml-3" to="/adminPanel">Admin</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar> 
 </div>
    );
};

export default HomeNvigation;