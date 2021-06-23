import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch} from "react-router-dom";

import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Home from "./components/ProductsPage/Home";
import Product from "./components/ProductsPage/Product";
import NewProduct from "./components/ProductsPage/NewProduct"

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/products">
            {/* <AllProducts /> */}
          </Route>
          <Route exact path="/products/new">
            <NewProduct/>
          </Route>
          <Route path="/products/:productId">
            <Product/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;