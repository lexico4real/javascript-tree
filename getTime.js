function getTime(s) {
  s = s.toLowerCase();
  let letterIndicator;

  for (ind = 9, letterIndicator = ''; ++ind < 36; ) {
    letterIndicator += ind.toString(36);
  }
  let seconds = 0;
  let currIndex = 0;

  s = s + s[s.length - 1];

  for (let char of s) {
    let letter = letterIndicator.indexOf(char);
    let index = Math.abs(currIndex - letter);
    let secIndex = Math.abs(26 - index);

    if (index < secIndex) {
      seconds += index;
    } else {
      seconds += secIndex;
    }
    currIndex = letter;
  }
  return seconds;
}
console.log(getTime('AZGB'));
