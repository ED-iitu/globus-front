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
import GalleryCard from "./pages/GalleryCard";
import Food from "./pages/Food"
import PromotionsCard from "./pages/PromotionsCard";
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
              <Main tab={0} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/store">
              <Store tab={2} />
            </Route>
            <Route exact path="/promotions">
              <Promotions />
            </Route>
            <Route exact path="/promotions/:id">
              <PromotionsCard />
            </Route>
            <Route exact path="/food-cort">
              <Food tab={1} />
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
            <Route exact path="/gallery/:ids">
              <GalleryCard />
            </Route>
            <Route exact path="/store/:slug">
              <StoreCard />
            </Route>
            <Route exact path="/en">
              <Main tab={0} lang={"en"} />
            </Route>
            <Route exact path="en/about">
              <About lang={"en"} />
            </Route>
            <Route exact path="en/map">
              <Map lang={"en"} />
            </Route>
            <Route exact path="en/store">
              <Store tab={2} lang={"en"} />
            </Route>
            <Route exact path="en/promotions">
              <Promotions lang={"en"} />
            </Route>
            <Route exact path="en/promotions/:id">
              <PromotionsCard lang={"en"} />
            </Route>
            <Route exact path="en/food-cort">
              <Food tab={1} lang={"en"} />
            </Route>
            <Route exact path="en/tenants">
              <Tenants lang={"en"}/>
            </Route>
            <Route exact path="en/contacts">
              <Contacts lang={"en"}/>
            </Route>
            <Route exact path="en/gallery">
              <Gallery lang={"en"}/>
            </Route>
            <Route exact path="en/gallery/:ids">
              <GalleryCard lang={"en"}/>
            </Route>
            <Route exact path="en/store/:slug">
              <StoreCard lang={"en"}/>
            </Route>
          </Switch>
        </div>
        {location.pathname !== "/contacts" && <Footer />}
      </div>
  );
}

export default App;
