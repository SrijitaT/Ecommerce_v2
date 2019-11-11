import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

class Header extends Component {
    render() {
        const { first_name } = this.props.user;
        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <Link to="/" className="logo">Ecommerce</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto profile-menu">
                        <Link to="/orders" className="custom_navlink">My orders</Link>
                        <NavDropdown title={"Welcome " + (first_name ? first_name : "Guest")} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Link to="/cart" className="btn btn-cart">
                        Cart <Badge variant="light">{this.props.noofitems}</Badge>
                        <span className="sr-only">Cart</span>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    noofitems: state.items.length,
    user: state.user
});

export default connect(
    mapStateToProps,
    null
)(Header);