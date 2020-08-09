import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UseStateHookExample from "./useState/HookComponent";
import UseEffectHookExample from "./useEffect/HookComponent";

function App() {
  return (
    <div className="App">
      <Router basename='/yt-react-hooks'>
        <Switch>
          <Route exact path="/">
            <UseStateHookExample />
          </Route>
          <Route  path="/useState">
            <UseStateHookExample />
          </Route>
          <Route path="/useEffect">
            <UseEffectHookExample />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
