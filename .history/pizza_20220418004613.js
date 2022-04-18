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

  

}