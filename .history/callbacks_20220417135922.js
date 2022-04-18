const name = (name) => {
  return name;
}

const greeting = (callback) => {
  return `Hello ${callback('John')}`;
}

console.log(greeting(name));


/*

