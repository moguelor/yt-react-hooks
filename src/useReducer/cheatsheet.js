/**
 * Crear un nuevo arreglo, 
 * con un elemento nuevo al final del arreglo.
 */
let data = ["Item 1", "Item 2", "Item 3"];
data = [...data, "Item 4"];
// ["Item 1", "Item 2", "Item 3". "Item 4"]

/**
 * Crear un nuevo arreglo, 
 * con un elemento nuevo al inicio del arreglo.
 */
data = ["Item 4", ...data];
//[ "Item 4","Item 1", "Item 2", "Item 3"]

/**
 * Crear un objeto nuevo,
 * con un elemento nuevo al final del objeto.
 * */
let data = { item: "Item1", item: "Item2", item: "Item3" };
data = { ...data, item: "Item 4" };
// { item:'Item1', item:'Item2', item:'Item3', item: 'Item 4'}

/**
 * Crear un objeto nuevo, 
 * con un elemento nuevo al inicio del objeto
 * */
let data = { item: "Item1", item: "Item2", item: "Item3" };
data = { item: "Item 4", ...data };
// { item: 'Item 4', item:'Item1', item:'Item2', item:'Item3'}

/**
 * Crear un objeto nuevo,
 * con un elemento nuevo dentro del 
 * arreglo anidado.
 */
let data = {
  items: [
    {
      item: "Item 1",
    },
    {
      item: "Item 2",
    },
  ],
};
data = {
  ...data,
  items: [{ item: "Item3" }, ...state.items],
};
/**
 * {
 *   items: [
 *      {
 *          item: "Item 3"
 *      },
 *      {
 *          item: "Item 1"
 *      },
 *      {
 *          item: "Item 2"
 *      }
 *   ]
 * }
 */
