import React, {useEffect, useState} from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Map from "./pages/Map";
import Store from "./pages/Store";
import Promotions from "./pages/Promotions";
import StoreCard from "./pages/StoreCard";
import Tenants from "./pages/Tenants";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation()

  return (
      <div className="App">
        <Header />
        <div className="Page">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/store">
              <Store />
            </Route>
            <Route exact path="/promotions">
              <Promotions />
            </Route>
            <Route exact path="/food-cort">
              <Store tab={'food'} />
            </Route>
            <Route exact path="/tenants">
              <Tenants />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/store/:slug">
              <StoreCard />
            </Route>
          </Switch>
        </div>
        {location.pathname !== "/contacts" && <Footer />}
      </div>
  );
}

export default App;
