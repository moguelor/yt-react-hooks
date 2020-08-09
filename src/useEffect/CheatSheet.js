/**
 * YT: mogueloDev
 * Link: https://www.youtube.com/watch?v=rsDCvmgGvXE
 */

/**
 * CUIDADO con afectar variables de estado dentro de tu efecto,
 * sin pasarle dependencias, ya que por cada renderizado estaría 
 * entrando al efecto y eso ocasionaría el ciclado de tu componente.
 */
useEffect(() => {
    // ...
});

// Es igual a

componentDidMount() {
    //...
}

componentDidUpdate() {
    // ...
}


/**
 * Muy común utilizado para realizar
 * peticiónes al servidor.
 */
useEffect(() => {
    // ...
}, []);

// Es igual a

componentDidMount() {
    //...
}

/**
 * Cuando se realice el re-renderizado 
 * solo se ejecutará si la dependencia cambia
 * de valor.
 */
useEffect(() => {
    // ...
}, [var1]);

// Es igual a

componentDidMount() {
    // ...
}

componentDidUpdate(prevProps, prevState) {
    if(prevState.var1 !== this.state.var1){
        // ...
    }
}

/**
 * Es utilizado en el registro de listeners o
 * suscripciónes, la función que retorna se ejecutará
 * al desmontarse el componente.
 */
useEffect(() => {
    target.addEventlistener();
    return () => target.removeEventListener();
}, [])
  
// Es igual a

componentDidMount() {
    target.addEventlistener();
}

componentWillUnmount() {
    target.removeEventListener();
}