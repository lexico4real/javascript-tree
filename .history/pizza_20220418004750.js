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

  get isVegetarian() {
    return this.toppings.every(topping => topping === 'cheese');
  }

  get isHealthy() {
    return this.isVegetarian;
  }

  get isSpicy() {
    return this.toppings.some(topping => topping === 'pepperoni');
  }

  get isDelicious() {
    return this.isHealthy && !this.isSpicy;
  }

  get isTooExpensive() {
    

}