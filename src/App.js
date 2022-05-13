import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menus from "./components/Menus";
import ProductImg from "./components/ProductImg";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import Carousel from "./components/Carousel";

import Form from "./components/Form";
import { BrowserRouter as Router, Route } from 'react-router-dom';





const App = () => {
  return (
    <>
    <Router>

      <Route exact path='/'>
      <Navbar />
      <Hero />
      </Route>
      <Route exact path='/menu'>
      <Navbar />
      <Menus/>
      <ProductImg/>
      </Route>
      <Route exact path='/pricing'>
      <Navbar />
      <Pricing/> 
      <Clients/>
      </Route>
      <Route exact path='/alumni'>
      <Navbar />
      <Carousel/>
      </Route>
      <Route exact path='/signup'>
      <Navbar />
      <Form/>
      </Route>
    </Router>

      

      </>

  );
};

export default App;
