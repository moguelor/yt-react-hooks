import React from "react";
import './App.css';
import UseStateHookExample from './useState/HookComponent';
import UseEffectHookExample from './useEffect/HookComponent';


function App() {
  return (
    <div className="App">
        {/* <UseStateHookExample /> */}
        <UseEffectHookExample />
    </div>
  );
}

export default App;
