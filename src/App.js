import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UseStateHookExample from "./useState/HookComponent";
import UseEffectHookExample from "./useEffect/HookComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/yt-react-hooks">
            <UseStateHookExample />
          </Route>
          <Route path="/yt-react-hooks/useState">
            <UseStateHookExample />
          </Route>
          <Route path="/yt-react-hooks/useEffect">
            <UseEffectHookExample />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
