import React, {useEffect, useState} from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect
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
        <Header  lang={"ru"}/>
        <div className="Page">
          <Switch>
          <Route exact path="/" render={() => (
    <Redirect to="/ru/"/>
)}/>
          <Route exact path="/ru/">
              <Main tab={0} lang={"ru"} />
            </Route>
            <Route exact path="/ru/about">
              <About lang={"ru"} />
            </Route>
            <Route exact path="/ru/map">
              <Map lang={"ru"} />
            </Route>
            <Route exact path="/ru/store">
              <Store tab={2} lang={"ru"} />
            </Route>
            <Route exact path="/ru/promotions">
              <Promotions lang={"ru"} />
            </Route>
            <Route exact path="/ru/promotions/:id">
              <PromotionsCard lang={"ru"} />
            </Route>
            <Route exact path="/ru/food-cort">
              <Food tab={1} lang={"ru"} />
            </Route>
            <Route exact path="/ru/tenants">
              <Tenants lang={"ru"}/>
            </Route>
            <Route exact path="/ru/contacts">
              <Contacts lang={"ru"}/>
            </Route>
            <Route exact path="/ru/gallery">
              <Gallery lang={"ru"}/>
            </Route>
            <Route exact path="/ru/gallery/:ids">
              <GalleryCard lang={"ru"}/>
            </Route>
            <Route exact path="/ru/store/:slug">
              <StoreCard lang={"ru"}/>
            </Route>
            <Route exact path="/en/">
              <Main tab={0} lang={"en"} />
            </Route>
            <Route exact path="/en/about">
              <About lang={"en"} />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/en/store">
              <Store tab={2} lang={"en"} />
            </Route>
            <Route exact path="/en/promotions">
              <Promotions lang={"en"} />
            </Route>
            <Route exact path="/en/promotions/:id">
              <PromotionsCard lang={"en"} />
            </Route>
            <Route exact path="/en/food-cort">
              <Food tab={1} lang={"en"} />
            </Route>
            <Route exact path="/en/tenants">
              <Tenants lang={"en"}/>
            </Route>
            <Route exact path="/en/contacts">
              <Contacts lang={"en"}/>
            </Route>
            <Route exact path="/en/gallery">
              <Gallery lang={"en"}/>
            </Route>
            <Route exact path="/en/gallery/:ids">
              <GalleryCard lang={"en"}/>
            </Route>
            <Route exact path="/en/store/:slug">
              <StoreCard lang={"en"}/>
            </Route>
            <Route exact path="/kz/">
              <Main tab={0} lang={"kz"} />
            </Route>
            <Route exact path="/kz/about">
              <About lang={"kz"} />
            </Route>
            <Route exact path="/kz/map">
              <Map lang={"kz"} />
            </Route>
            <Route exact path="/kz/store">
              <Store tab={2} lang={"kz"} />
            </Route>
            <Route exact path="/kz/promotions">
              <Promotions lang={"kz"} />
            </Route>
            <Route exact path="/kz/promotions/:id">
              <PromotionsCard lang={"kz"} />
            </Route>
            <Route exact path="/kz/food-cort">
              <Food tab={1} lang={"kz"} />
            </Route>
            <Route exact path="/kz/tenants">
              <Tenants lang={"kz"}/>
            </Route>
            <Route exact path="/kz/contacts">
              <Contacts lang={"kz"}/>
            </Route>
            <Route exact path="/kz/gallery">
              <Gallery lang={"kz"}/>
            </Route>
            <Route exact path="/kz/gallery/:ids">
              <GalleryCard lang={"kz"}/>
            </Route>
            <Route exact path="/kz/store/:slug">
              <StoreCard lang={"kz"}/>
            </Route>
          </Switch>
        </div>
                {(() => {
          if (location.pathname.split(/\//)[2] != "contacts") {
            if(location.pathname.split(/\//)[1]=="ru")
            return <Footer lang={"ru"} />;
            if(location.pathname.split(/\//)[1]=="en")
            return <Footer lang={"en"} />;
            if(location.pathname.split(/\//)[1]=="kz")
            return <Footer lang={"kz"} />;
          }
        })()}
      </div>
  );
}

export default App;
