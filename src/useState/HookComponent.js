import React, { useState } from "react";
import { Card, Input, Button } from "../components";
import { formatFormValue } from "../utils";
import validate from "./validate";

const HookComponent = () => {

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  let formValues = { user, password };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = validate(formValues);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
       alert(formatFormValue(formValues));
    }
  };

  return (
    <>
      Ejemplo del hook useState().
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            label={"Usuario"}
            value={user}
            handleChange={(e) => setUser(e.target.value)}
            error={errors.user}
          />
          <Input
            type="password"
            label={"Contraseña"}
            value={password}
            error={errors.password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button>Ingresar</Button>
        </form>
      </Card>
      <pre>{formatFormValue(formValues)}</pre>
    </>
  );
};

export default HookComponent;
