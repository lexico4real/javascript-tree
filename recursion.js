const printNumber = (number) => {
  if(number === 1){
    return number;
  }
  printNumber(number - 1);
}

console.log(printNumber(10));