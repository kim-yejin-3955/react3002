import React from "react";
// import { Route, Router } from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Youtube from "./components/pages/Youtube";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio.js";
import Script from "./components/pages/Script";

function App(){
    return(
        <Router>
            <Route path="/"exact component={Main}/>
            <Route path="/about"exact component={About}/>
            <Route path="/reference"exact component={Reference}/>
            <Route path="/youtube"exact component={Youtube}/>
            <Route path="/contact"exact component={Contact}/>
            <Route path="/portfolio"exact component={Portfolio}/>
            <Route path="/script"exact component={Script}/>
            {/* exact는 페이지 겹치지 않고 한페지만 나오게 설정 */}
        </Router>
    )
}
export default App;