import React, { useState, useEffect } from "react";

/**
 * Hooks Rules:
 * YT - mogueloDev
 * [https://www.youtube.com/watch?v=r0ogGbq5qbA]
 */
const HooksRules = () => {
  const [text, setText] = useState("React hooks");
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Regla #2: No usar hooks dentro de funciones normales de javascript.
   * 
   * Con la función "handleClickButton" rompemos la regla.
   * Solo se pueden usar dentro de componentes funcionales:
   * 
   * Component = () => {
   *   const [field, setField] = useState()
   * };
   * 
   * O incluso dentro de otros custom hooks.
   * 
   * useCustomHook = () => {
   *   const [field, setField] = useState()
   * };
   */
  const handleClickButton = () => {
    const [newVar, setNewVar] = useState();
  };

  /**
   * Regla #1: Simpre usar hooks a un nivel superior.
   * Rompemos la regla.
   * if (isVisible) {
   *   useEffect(() => {
   *       setText("React updated");
   *   }, []);
   * }
   * 
   * Es decir:
   * 
   * - NO Condicionales:
   * if(...)
   *   useEffect(() => {...});
   * }
   *
   * - NO Ciclos:
   * for(let i=0; i<2; i++){
   *   useEffect(() => {...});
   * }
   *
   * - NO Funciones anidadas de javascript.
   * [].map(() => {
   *   useEffect(() => {...});
   * });
   */

  useEffect(() => {
    if (isVisible) {
      setText("React updated");
    }
  }, []);

  return <button onClick={handleClickButton}>{text}</button>;
};

export default HooksRules;
