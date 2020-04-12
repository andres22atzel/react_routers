import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

export default class App extends Component {
  render() {
    return (
      // Here we implement the browser router tag to enable routes
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* we place the exact property so that the path is look up, it strictly look for what is written */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post}/>
        </div>
      </BrowserRouter>
    );
  }
}
