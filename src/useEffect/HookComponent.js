import React, { useState, useEffect } from "react";
import { API_URL } from "./constants";
import mockData from "./mockData";
import { JobItem } from "../components";

const HookComponent = () => {
  /**
   * Efecto 1. Hacer una llamada API
   * a un servicio externo al cargar el componente..
   */
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const callApi = async () => {
      setIsLoading(true);
      const response = await fetch(API_URL);
      if (response.status !== 200) {
        setError(response.statusText);
      }
      setData(response.status === 200 ? await response.json() : mockData);
      setIsLoading(false);
    };
    callApi();
  }, []);

  /**
   * Efecto 2. Afectar el DOM directamente cambiando
   * el título de la página.
   */
  const [title, setTitle] = useState("Select Job");
  useEffect(() => {
    document.title = title;
  }, [title]);

  /**
   * Efecto 3. Detectar el movimiento del mouse para mostrar
   * una alerta si se desea salir de la página.
   */
  useEffect(() => {
    const target = document.body;
    target.addEventListener(
      "mouseout",
      (e) => e.clientY < 10 && alert("Hey don't leave please.")
    );
    return () => target.removeEventListener("mouseout", () => "See you..");
  }, []);

  return (
    <div>
      Ejemplo del hook useEffect(). <br />
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
                handleClick={() => setTitle(item.title)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HookComponent;
