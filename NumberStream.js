function numberStream(str) {
  let result = {};
  let answer = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] in result) {
      if (str[i] == str[i - 1]) {
        result[str[i]] += 1;
      }
    } else {
      result[str[i]] = 1;
    }
  }
  for (let key in result) {
    if (key === result[key].toString()) {
      if (str.includes(key.repeat(result[key]))) {
        answer = true;
        break;
      }
    }
  }
  return answer;
}

console.log(numberStream('6539923335'));
// console.log(numberStream('57888888882339999'));
// console.log(numberStream('5556293383563665'));
