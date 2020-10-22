import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UseStateHookExample from "./useState/HookComponent";
import UseEffectHookExample from "./useEffect/HookComponent";
import UseContextExample from "./useContext/HookComponent";
import UseReducerExample from "./useReducer/HookComponent";
import MemoizationExample from "./memoization/HookComponent";

function App() {
  return (
    <div className="App">
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Switch>
          <Route exact path="/">
            <UseStateHookExample />
          </Route>
          <Route path="/useState">
            <UseStateHookExample />
          </Route>
          <Route path="/useEffect">
            <UseEffectHookExample />
          </Route>
          <Route path="/useContext">
            <UseContextExample />
          </Route>
          <Route path="/useReducer">
            <UseReducerExample />
          </Route>
          <Route path="/memoization">
            <MemoizationExample />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
