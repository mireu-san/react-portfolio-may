import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontGate from "Routes/FrontGate";
import Skills from "Routes/Skills";
import Portfolio from "Routes/Portfolio";
import Contact from "Routes/Contact";


export default () => (
    <Router>
        <>
            <Route path="/" exact component={FrontGate} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
        </>
    </Router>
);