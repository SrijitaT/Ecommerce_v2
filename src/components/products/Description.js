import React, { Component } from 'react'
import { Row, Col, Button } from "react-bootstrap";

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        import("./ProductTable").then(res => {
            this.setState({ products: res.products })
        });
    }
    render() {
        const { match } = this.props;
        const { products } = this.state;
        const product = products[parseInt(match.params.id) - 1];
        return (
            (products.length > 0 && product) ? (
                <Row>
                    <Col md="auto">
                        <img src={require("../../clothes/female/placeholder.png")} />
                    </Col>
                    <Col>
                        <h1> {product.title}</h1>
                        <p>
                            {product.desc}
                        </p>
                        <h5>Price(INR) : {product.price}</h5><br />
                        <Button variant="warning">Add to cart</Button>
                    </Col>
                </Row>
            ) : <p>No such Product!!</p>
        )
    }
}

export default Description;
