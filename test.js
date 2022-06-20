function test(str) {
  let clock = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let count = 0;
  for (let char of str) {
    let index = clock.indexOf(char);
    count++;
  }
  return count;
}

console.log(test('abc'));
