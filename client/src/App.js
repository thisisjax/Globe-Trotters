import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import AddLocation from "./pages/AddLocation";

const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}

      {/* <Wrapper> */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/addlocation" component={AddLocation} /> 
      {/* </Wrapper> */}
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
