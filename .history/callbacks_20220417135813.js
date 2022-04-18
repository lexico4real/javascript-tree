const name = (name) => {
  return name;
}

const greeting = (callback) => {
  return `Hello ${callback()}`;
}

console.log(greeting(name));