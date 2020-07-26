export default (values) => {
  let errors = {};

  if (!values.user) {
    errors.user = "Ingrese usuario.";
  }

  if (!values.password) {
    errors.password = "Ingrese contraseña.";
  } else if (values.password.length < 8) {
    errors.password = "Contraseña muy corta.";
  }

  return errors;
};
