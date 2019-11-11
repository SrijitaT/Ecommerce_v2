import React, { Component } from 'react'
import Product from "./index";
import { Row, Col } from "react-bootstrap";
class Catalogue extends Component {
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
        return (
            <div>
                <Col>
                    <Row>
                        {
                            this.state.products.length > 0 ? this.state.products.map((x, index) => <Product index={index} item={x} key={x.title} />) : null
                        }
                    </Row>
                </Col>
            </div>
        )
    }
}
export default Catalogue;
