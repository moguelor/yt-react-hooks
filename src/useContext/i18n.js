export default {
  ES: {
    welcome: "Bienvenido a mogueloDev",
    title1: "¿Cuándo usar Context?",
    description1:
      "Context está diseñado para compartir datos que pueden considerarse globales para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.",
    title2: "Antes de usar Context",
    description2:
      "Context se usa principalmente cuando algunos datos tienen que se accesibles por muchos componentes en diferentes niveles de anidamiento. Aplícalo con moderación porque hace que la reutilización de componentes sea más difícil.",
    title3: "React.createContext",
    description3:
      "Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.",
    title4: "Context.Provider",
    description4:
      "Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.",
    title5: "Context.Consumer",
    description5:
      " Un componente de React que se suscribe a cambios de contexto. Esto le permite suscribirse a un contexto dentro de un componente de función.",
    title6: "Class.contextType",
    description6:
      "A la propiedad contextType en una clase se le puede asignar un objeto Context creado por React.createContext(). Esto te permite consumir el valor actual más cercano de ese Context utilizando this.context. Puedes hacer referencia a esto en cualquiera de los métodos del ciclo de vida, incluida la función de renderizado.",
  },
  EN: {
    welcome: "Welcome to mogueloDev",
    title1: "When to use Context?",
    description1:
      "Context is designed to share data that can be considered global for a component tree in React, such as the current authenticated user, the theme or the preferred language.",
    title2: "Before using Context",
    description2:
      "Context is mainly used when some data has to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.",
    title3: "React.createContext",
    description3:
      "Create a Context object. When React renders a component that subscribes to this Context object, it will read the current context value of the closest Provider in the tree.",
    title4: "Context.Provider",
    description4:
      "Each Context object comes with a React Provider component that allows the components that consume it to subscribe to the context changes.",
    title5: "Context.Consumer",
    description5:
      "A component of React that subscribes to context changes. This allows you to subscribe to a context within a function component.",
    title6: "Class.contextType",
    description6:
      "The contextType property in a class can be assigned a Context object created by React.createContext(). This allows you to consume the closest current value of that Context using this.context. You can reference this in any of the lifecycle methods, including the rendering function.",
  },
  FR: {
    welcome: "Bienvenue à mogueloDev",
    title1: "Quand utiliser Contexte ?",
    description1:
      "Le contexte est conçu pour partager des données qui peuvent être considérées comme globales pour un arbre de composants dans React, comme l'utilisateur authentifié actuel, le thème ou la langue préférée.",
    title2: "Avant d'utiliser le contexte",
    description2:
      "Le contexte est principalement utilisé lorsque certaines données doivent être accessibles par de nombreuses composantes à différents niveaux d'emboîtement. Appliquez-le avec parcimonie car il rend la réutilisation des composants plus difficile.",
    title3: "React.createContext",
    description3:
      "Créer un objet Contexte. Lorsque React rend un composant qui souscrit à cet objet Contexte, il lira la valeur de contexte actuelle du fournisseur le plus proche dans l'arbre.",
    title4: "Context.Provider",
    description4:
      "Chaque objet de contexte est livré avec un composant React Provider qui permet aux composants qui le consomment de s'abonner aux changements de contexte.",
    title5: "Context.Consumer",
    description5:
      "Une composante de React qui souscrit aux changements de contexte. Cela vous permet de vous abonner à un contexte au sein d'un composant de fonction.",
    title6: "Class.contextType",
    description6:
      "La propriété contextType d'une classe peut se voir attribuer un objet Context créé par React.createContext(). Cela vous permet de consommer la valeur actuelle la plus proche de ce contexte en utilisant ce .context. Vous pouvez y faire référence dans toutes les méthodes du cycle de vie, y compris la fonction de rendu.",
  },
};
