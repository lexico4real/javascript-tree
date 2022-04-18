const name = (name) => {
  return name;
}

const greeting = (callback) => {
  console.log(`Hello ${callback(name)}`);
}

greeting(name);