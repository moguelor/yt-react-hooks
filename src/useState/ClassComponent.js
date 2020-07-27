import React, { Component } from "react";
import { Card, Input, Button } from "../components";
import { objectToString, isEmptyObject } from "../utils";
import validate from "./validate";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        user: "",
        password: "",
      },
      errors: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = validate(this.state.formValues);

    if (!isEmptyObject(errors)) {
      this.setState({ ...this.state, errors });
      return;
    }

    alert("Sent to api");
  };

  render() {
    return (
      <>
        Ejemplo classComponent.
        <Card>
          <form onSubmit={this.handleSubmit}>
            <Input
              label={"Usuario"}
              value={this.state.formValues.user}
              handleChange={(e) =>
                this.setState({
                  ...this.state,
                  formValues: {
                    ...this.state.formValues,
                    user: e.target.value,
                  },
                })
              }
              error={this.state.errors.user}
            />
            <Input
              type="password"
              label={"Contraseña"}
              value={this.state.formValues.password}
              error={this.state.errors.password}
              handleChange={(e) =>
                this.setState({
                  ...this.state,
                  formValues: {
                    ...this.state.formValues,
                    password: e.target.value,
                  },
                })
              }
            />
            <Button>Ingresar</Button>
          </form>
        </Card>
        <pre>{objectToString(this.state.formValues)}</pre>
      </>
    );
  }
}

export default ClassComponent;
