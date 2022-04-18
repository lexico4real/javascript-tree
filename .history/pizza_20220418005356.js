class Pizza {

  constructor(size, c) {
    this.size = size;
    this.crust = crust;
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
    return this.price > 10;
  }

  get isTooHealthy() {
    return this.isHealthy && this.isTooExpensive;
  }

  get isTooSpicy() {
    return this.isSpicy && this.isTooExpensive;
  }

  get isTooDelicious() {
    return this.isDelicious && this.isTooExpensive;
  }

  get isTooHealthyAndSpicy() {
    return this.isTooHealthy && this.isTooSpicy;
  }

  get isTooHealthyAndDelicious() {
    return this.isTooHealthy && this.isTooDelicious;
  }

  get isTooSpicyAndDelicious() {
    return this.isTooSpicy && this.isTooDelicious;
  }

  get isTooHealthyAndSpicyAndDelicious() {
    return this.isTooHealthyAndSpicy && this.isTooDelicious;
  }

}

let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];