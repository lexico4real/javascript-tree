const name = (name) => {
  return name;
}

const greeting = (callback) => {
   `Hello ${callback(name)}`;
}

console.log(greeting(name));