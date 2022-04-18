class Pizza {

  constructor() {
    this.toppings = ['cheese'];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  getToppings() {
    return this.toppings;
  }

  get numberOfToppings() {
    return this.toppings.length;
  }

  get price() {
    return this.numberOfToppings * 0.5;
  }

  

}