import React, { useState, useEffect } from "react";
import { Header, Home, SignIn, SignUp, Resource } from "./components/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import AppProvider from "./contexts/Contexts";
import Providers from "./contexts/Contexts";

function App() {
  useEffect(() => {
    console.log("App was mounted");
    return () => {
      console.log("App was unmounted");
    };
  }, []);
  return (
    <>
      <Router>
        <Providers>
          <Header />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/resource" exact>
            <Resource />
          </Route>
        </Providers>
      </Router>
    </>
  );
}

export default App;
