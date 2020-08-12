import React, { useContext, useState } from "react";

const ObjectContext = {
  counter: 1,
  setCounter: () => {}
};
const ObjectContext2 = {
  counter2: 1,
  setCounter: () => {}
};

const MyContext = React.createContext(ObjectContext);
const MyContextRester = React.createContext(ObjectContext2);

const Level1 = ({ children }) => {
  return <div>Level 1{children}</div>;
};

const Level2 = ({ children }) => {
  const context2 = useContext(MyContextRester);
  const context1 = useContext(MyContext)
  console.log("level-2-context-2", context2);
  console.log("level-2-context-1", context1);
  return <div>Level 2{children}</div>;
};

const Level3 = ({ children }) => {
  const context = useContext(MyContext);
  console.log("level-3-context", context);

  return <div onClick={context.setCounter}>Level 3{children}</div>;
};

const HookComponent = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  console.log("counter", counter);
  console.log("counter2", counter2);
  const Context = {
    counter: counter,
    setCounter: () => setCounter(counter + 1)
  };

  const Context2 = {
    counter2: counter2,
    setCounter2: () => setCounter2(counter2 - 1)
  };

  return (
    <MyContext.Provider value={Context}>
      <MyContextRester.Provider value={Context2}>
        Hook component
        <Level1>
          <Level2>
            <Level3></Level3>
          </Level2>
        </Level1>
        <Level1>
          Otro nivel
        </Level1>
      </MyContextRester.Provider>
    </MyContext.Provider>
  );
};

export default HookComponent;
