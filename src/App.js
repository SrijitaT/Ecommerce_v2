//import logo from './logo.svg';
//import Footer from "./components/Footer";
import React from 'react';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Catalogue from "./components/products/Catalogue";
import Description from "./components/products/Description";
import Cart from "./components/cart/index";
import Checkout from "./components/cart/Checkout";
import ChoosePayment from "./components/cart/ChoosePayment";
import Nomatch from "./components/Nomatch";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid>
        <Header />
        <Switch>
          <Route exact path="/" component={Catalogue} />
          <Route exact path="/desc/:id" component={Description} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/payment" component={ChoosePayment} />
          <Route path="*" component={Nomatch} />
        </Switch>
      </Container>
      <br />
    </Router>
  );
}

export default App;
