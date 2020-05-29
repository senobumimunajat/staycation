import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'


import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";




function App() {
  return <div className="App">
    <Router>
      <Route path="/" component={LandingPage}></Route>
      <Route path="/example" component={Example}></Route>
    </Router>
  </div>;
}

export default App;
