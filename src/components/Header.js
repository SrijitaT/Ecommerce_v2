import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

class Header extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <Link to="/" className="logo">Ecommerce</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto profile-menu">
                        <Link to="/orders">My orders</Link>
                        <NavDropdown title="My Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Link to="/cart" className="btn-success btn">
                        Cart <Badge variant="light">{this.props.noofitems}</Badge>
                        <span className="sr-only">Cart</span>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    noofitems: state.items.length
});

export default connect(
    mapStateToProps,
    null
)(Header);