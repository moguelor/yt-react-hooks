const objectToString = (value) => JSON.stringify(value, null, 1);

const isEmptyObject = (object) => Object.keys(object).length === 0;

export { objectToString, isEmptyObject };
