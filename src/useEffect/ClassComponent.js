import React, { Component } from "react";
import { API_URL } from "./constants";
import mockData from "./mockData";
import { JobItem } from "../components";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      error: null,
      title: "Select Job",
    };
  }

  componentDidMount() {
    /**
     * Efecto 1. Hacer una llamada API
     * a un servicio externo al carga rel componente..
     */
    const callApi = async () => {
      this.setState({ ...this.state, isLoading: true });
      const response = await fetch(API_URL);
      if (response.status !== 200) {
        this.setState({ ...this.state, error: response.statusText });
      }
      this.setState({
        ...this.state,
        data: response.status === 200 ? await response.json() : mockData,
      });
      this.setState({ ...this.state, isLoading: false });
    };

    callApi();

    /**
     * Efecto 2. Afectar el DOM directamente cambiando
     * el título de la página.
     */
    document.title = this.state.title;

    /**
     * Efecto 3. Detectar el movimiento del mouse para mostrar
     * alerta si se desea salir de la página.
     */
    const target = document.body;
    target.addEventListener(
      "mouseout",
      (e) => e.clientY < 10 && alert("Hey don't leave please.")
    );
  }

  componentDidUpdate(prevProps, prevState) {
    /**
     * Efecto 2. Afectar el DOM directamente cambiando
     * el título de la página.
     */
    if(prevState.title !== this.state.title){
        document.title = this.state.title;
    }
  }

  componentWillUnmount() {
    /**
     * Efecto 3. Detectar el movimiento del mouse para mostrar
     * alerta si se desea salir de la página.
     */
    const target = document.body;
    target.removeEventListener("mouseout", () => "See you..");
  }

  render() {
    const { isLoading, data, error } = this.state;

    return (
      <div>
        Ejemplo con clases useEffect(). <br />
        {isLoading ? (
          "Loading..."
        ) : (
          <div>
            <small>{error && error}</small>
            {data.map((item, index) => {
              return (
                <JobItem
                  key={index}
                  item={item}
                  handleClick={() =>
                    this.setState({ ...this.state, title: item.title })
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ClassComponent;
