import React from "react";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import { Switch, Route } from "react-router-dom";
import CartDetails from "../cart/CartDetails";
import NotFound from "./NotFound";
import ProductDetails from "../products/ProductDetails";

const App = () => {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cart" exact component={CartDetails} />
        <Route path="/products/:id" exact component={ProductDetails} />
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
};

export default App;
