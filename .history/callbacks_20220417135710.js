const name = (name) => {
  return name;
}

const greeting = (callback) => {
  c `Hello ${callback(name)}`;
}

console.log(greeting(name));