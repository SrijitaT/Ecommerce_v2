import React, { Component } from 'react'
import { Card, Button, Col } from "react-bootstrap";
import { addToCart } from "../../redux/actions/index";
import { connect } from "react-redux";
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { readmore: false }
    }
    handleClick() {
        this.setState({ readmore: true })
    }
    render() {
        const { index, item } = this.props;
        return (
            <Col md={4}>
                <Card>
                    <Card.Header as="h5">{item.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>Image Placeholder</Card.Title>
                        <Card.Text className="prod-desc">
                            {item.desc.substring(0, 200)}
                            {
                                this.state.readmore
                                    ?
                                    item.desc.substring(201)
                                    :
                                    <Button variant="link" onClick={() => this.handleClick()}>Read more...</Button>
                            }
                        </Card.Text>
                        <Card.Text>Price : Rs {item.price}</Card.Text>
                        <Button variant="success" onClick={() => this.props.addToCart(this.props.item)}>Add to cart</Button>{"  "}
                        <Button variant="warning" href={`/desc/${index + 1}`}>View Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default connect(
    null,
    { addToCart }
)(Product);
