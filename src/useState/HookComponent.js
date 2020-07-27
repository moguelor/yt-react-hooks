import React, { useState } from "react";
import { Card, Input, Button } from "../components";
import { objectToString, isEmptyObject } from "../utils";
import validate from "./validate";

const HookComponent = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  const formValues = { user, password };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    if (!isEmptyObject(errors)) {
      setErrors(errors);
      return;
    }

    alert("Sent to api");
  };

  return (
    <>
      Ejemplo del hook useState().
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            label={"Usuario"}
            handleChange={(e) => setUser(e.target.value)}
            value={user}
            error={errors.user}
          />
          <Input
            type="password"
            label={"Contraseña"}
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <Button>Ingresar</Button>
        </form>
      </Card>
      <pre>{objectToString(formValues)}</pre>
    </>
  );
};

export default HookComponent;
