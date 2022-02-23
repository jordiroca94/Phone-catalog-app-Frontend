import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhoneDetailComponent from "./components/PhoneDetailComponent";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  exact path="/phones/:id" component={PhoneDetailComponent}/>
      </Switch>
    </div>
  );
};

export default App;
