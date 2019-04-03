import React, { Component } from "react";
import "./App.css";
import Page1 from "./components/page1";
// import Page2 from "./components/page2";
// import Page3 from "./components/page3";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
      component: ""
    };
  }

  onRouteChange = route => {
    // no code splitting
    // this.setState({
    //   route: route
    // });
    // with code splitting
    if (route === "page1") {
      this.setState({
        route: route
      });
    } else if (route === "page2") {
      // this is asynchronous and return promise
      import("./components/page2").then(Page2 => {
        this.setState({
          route: route,
          component: Page2.default
        });
      });
    } else {
      import("./components/page3").then(Page3 => {
        this.setState({
          route: route,
          component: Page3.default
        });
      });
    }
  };

  render() {
    // if (this.state.route === "page1") {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === "page2") {
    //   return <Page2 onRouteChange={this.onRouteChange} />;
    // } else {
    //   return <Page3 onRouteChange={this.onRouteChange} />;
    // }

    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />;
    }

    /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */
  }
}

export default App;
