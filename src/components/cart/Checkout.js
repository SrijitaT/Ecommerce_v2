import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
function GenerateBill({ items }) {
    return (<React.Fragment>
        <h3>Review Order(s) : </h3>
        {items.map(item => {
            return <Card key={`cart_${item.id}`}>
                <Card.Header as="h5">{item.title}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Product ID : {item.id}<br />
                        Qty : {item.count}<br />
                        Total Price : Rs {item.price * item.count}
                    </Card.Title>
                </Card.Body>
            </Card>
        })}
        <Row>
            <Col md={{ span: 2, offset: 10 }}>
                <p>
                    Sub Total : Rs {" "}
                    {
                        items.reduce(function (accumulator, currentValue) {
                            return accumulator + (currentValue.price * currentValue.count);
                        }, 0)
                    }
                </p>
                <Link className="btn btn-warning" to="/placeorder">Place Order</Link>
            </Col>
        </Row>
    </React.Fragment>)
}
class Checkout extends Component {
    render() {
        const { user, items } = this.props;
        return (<div>
            <h1>Checkout</h1>
            <h4>Delivery Address : {user.address}</h4>
            {items.length > 0 ? <GenerateBill items={items} /> : <h5>No items added to cart!! Start shopping!!</h5>}
        </div>)
    }
}
const mapStateToProps = state => ({
    user: state.user,
    items: state.items
});

export default connect(
    mapStateToProps,
    null
)(Checkout);
