import React, { Component } from 'react';
import { connect } from "react-redux";
import { qtyUpdate, removeFromCart } from "../../redux/actions/index";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Cart extends Component {
    render() {
        const { items, qtyUpdate, removeFromCart } = this.props;
        return (
            <React.Fragment>
                {items.map(item => {
                    return <Card key={`cart_${item.id}`}>
                        <Card.Header as="h5">{item.title}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                    <Card.Title>
                                        Product ID : {item.id}<br />
                                        Price : Rs {item.price}
                                    </Card.Title>
                                </Col>
                                <Col md={2}>
                                    <Button variant="outline-success" onClick={() => qtyUpdate(item, -1)}>-</Button>
                                    {" "}{item.count ? item.count : 1}{" "}
                                    <Button variant="outline-danger" onClick={() => qtyUpdate(item, 1)}>+</Button>
                                </Col>
                                <Col md={2}>
                                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>X</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                })}<br />
                {items.length > 0 ? <Link to="/checkout" className="btn-warning btn">Checkout</Link> : "There are no items in the cart!"}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items
});

export default connect(
    mapStateToProps,
    { qtyUpdate, removeFromCart }
)(Cart);