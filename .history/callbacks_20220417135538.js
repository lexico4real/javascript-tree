const name = (name) => {
  return name;
}

const greeting = (callback) => {
  return `Hello ${callback(name)}`;
}

console.log();