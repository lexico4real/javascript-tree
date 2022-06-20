const longestWord = (sen) => {
  // remove punctuation and split into array
  let words = sen.split(' ');
  // remove punctuations
  words = words.map(word => word.replace(/[^a-z]/gi, ''));
  console.log(words);
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// console.log(longestWord('Re!!ady, steady, go!'));
console.log(longestWord('I love dogs'));