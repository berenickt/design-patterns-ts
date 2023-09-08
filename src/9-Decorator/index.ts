// 피자 인터페이스
interface Pizza {
  getDescription(): string
  getCost(): number
}

// 기본 피자 구현
class PlainPizza implements Pizza {
  getDescription(): string {
    return '기본 피자'
  }

  getCost(): number {
    return 10.0
  }
}

// 피자 데코레이터 추상 클래스
abstract class PizzaDecorator implements Pizza {
  protected pizza: Pizza

  constructor(pizza: Pizza) {
    this.pizza = pizza
  }

  abstract getDescription(): string
  abstract getCost(): number
}

// 토핑 데코레이터 - 치즈 추가
class CheeseTopping extends PizzaDecorator {
  constructor(pizza: Pizza) {
    super(pizza)
  }

  getDescription(): string {
    return this.pizza.getDescription() + ', 치즈 추가'
  }

  getCost(): number {
    return this.pizza.getCost() + 2.0
  }
}

// 토핑 데코레이터 - 페퍼로니 추가
class PepperoniTopping extends PizzaDecorator {
  constructor(pizza: Pizza) {
    super(pizza)
  }

  getDescription(): string {
    return this.pizza.getDescription() + ', 페퍼로니 추가'
  }

  getCost(): number {
    return this.pizza.getCost() + 3.0
  }
}

// 주문
const basicPizza: Pizza = new PlainPizza()
console.log('기본 피자:', basicPizza.getDescription(), '가격:', basicPizza.getCost())

const cheesePizza: Pizza = new CheeseTopping(basicPizza)
console.log('치즈 피자:', cheesePizza.getDescription(), '가격:', cheesePizza.getCost())

const pepperoniPizza: Pizza = new PepperoniTopping(basicPizza)
console.log('페퍼로니 피자:', pepperoniPizza.getDescription(), '가격:', pepperoniPizza.getCost())
