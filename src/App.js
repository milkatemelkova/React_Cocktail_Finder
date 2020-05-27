import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Random from "./pages/Random";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
          
        </Route>
        <Route path="/random">
          <Random />
          
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
