import React from "react";
import Home from './Home'
import Store from "./Store";
import About from "./About";
import {Route} from "react-router-dom"
import ContactUs from "./ContactUs";

function Main() {

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Store">
                <Store />
            </Route>
            <Route exact path="/About">
                <About />
            </Route>
            <Route exact path="/ContactUs">
                <ContactUs />
            </Route>
        </>
    )

}

export default Main;
