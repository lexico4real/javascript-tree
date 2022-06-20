/*
Write a function that takes in an integers N and returns “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5. Return the integers N that doesn't match.
*/
//QUESTION ONE
const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  return n;
};

// for(let i = 1; i <= 100; i++){
//   console.log(fizzBuzz(i));
// }

/*
Write functions that converts
fahrenheit to celsius
 (32°F − 32) × 5/9 = 0°C
celsius to fahrenheit
 (0°C × 9/5) + 32 = 32°F
kelvin to celsius
 0K − 273.15 = -273.1°C
celsius to kelvin
 0°C + 273.15 = 273.15K
kelvin to fahrenheit
 0°C + 273.15 = 273.15K
fahrenheit to kelvin
 (32°F − 32) × 5/9 + 273.15 = 273.15K
*/

//QUESTION TWO
const ftoc = (f) => {
  return ((f - 32) * 5) / 9;
};

const ctof = (c) => {
  return (c * 9) / 5 + 32;
};

const ktoc = (k) => {
  return k - 273.15;
};

const ctok = (c) => {
  return c + 273.15;
};

const ktof = (k) => {
  return ((k - 273.15) * 9) / 5 + 32;
};

const ftok = (f) => {
  return ((f - 32) * 5) / 9 + 273.15;
};

//QUESTION THREE
const conveter = (from, to) => {
  let splitFrom = from.split('°');
  const num = splitFrom[0];
  const dir = splitFrom[1].toLowerCase() + 'to' + to.toLowerCase();
  if (dir === 'ftoc') {
    console.log(ftoc(num), '°C');
  } else if (dir === 'ctof') {
    console.log(ctof(num), '°F');
  } else if (dir === 'ktoc') {
    console.log(ktoc(num), '°C');
  } else if (dir === 'ctok') {
    console.log(ctok(num), '°K');
  } else if (dir === 'ktof') {
    console.log(ktof(num), '°F');
  } else if (dir === 'ftok') {
    console.log(ftok(num), '°K');
  } else {
    console.error('Check your input');
  }
};

// conveter('32°F', 'K');

//QUESTION FOUR
const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const fizzBuzzPrime = (n) => {
  if (isPrime(n)) {
    console.log(n, 'prime');
  } else {
    console.log(fizzBuzz(n));
  }
};

// for (let i = 1; i <= 100; i++) {
//   fizzBuzzPrime(i);
// }
