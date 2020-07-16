import React from "react";
import "./App.css";
import {AnimatePresence} from 'framer-motion'


import Home from "./pages/Home";
import Properties from "./pages/Properties";
import SingleProperty from "./pages/SingleProperty";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
      <Navbar />
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties/" component={Properties} />
        <Route exact path="/properties/:slug" component={SingleProperty} />
        <Route component={Error} />
      </Switch>
     
    </>
  );
}

export default App;
