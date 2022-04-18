const name = (name) => {
  return name;
}

const greeting = (callback) => {
  return `Hello ${callback('John')}`;
}

console.log(greeting(name));


/*

  Callbacks are functions that are passed into other functions as parameters.

  *