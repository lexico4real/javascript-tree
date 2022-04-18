const name = (name) => {
  return name;
};

const greeting = (callback) => {
  return `Hello ${callback('John')}`;
};

console.log(greeting(name));

/*

  Callbacks are functions that are passed into other functions as parameters.
  To practice this, write a function called name that takes a name as a parameter.
  Then, write a function called greeting that takes a callback as a parameter.

*/
