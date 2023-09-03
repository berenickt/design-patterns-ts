// 📌 1. Product 인터페이스를 정의합니다.
interface Pizza {
  prepare(): string
  bake(): string
  cut(): string
  box(): string
}

// 📌 2. 여러 종류의 피자를 구현하는 ConcretePizza 클래스들을 생성합니다.
class CheesePizza implements Pizza {
  prepare(): string {
    return '치즈 피자를 준비합니다.'
  }
  bake(): string {
    return '치즈 피자를 굽습니다.'
  }
  cut(): string {
    return '치즈 피자를 자릅니다.'
  }
  box(): string {
    return '치즈 피자를 포장합니다.'
  }
}

class PepperoniPizza implements Pizza {
  prepare(): string {
    return '페퍼로니 피자를 준비합니다.'
  }
  bake(): string {
    return '페퍼로니 피자를 굽습니다.'
  }
  cut(): string {
    return '페퍼로니 피자를 자릅니다.'
  }
  box(): string {
    return '페퍼로니 피자를 포장합니다.'
  }
}

// 📌 3. PizzaFactory 추상 클래스를 생성하고 팩토리 메서드를 선언합니다.
abstract class PizzaFactory {
  // 팩토리 메서드를 선언합니다. 하위 클래스에서 이를 구체화해야 합니다.
  public abstract createPizza(): Pizza

  // 피자를 주문하고 제작, 구움, 자름, 포장 과정을 수행하는 메서드를 제공합니다.
  public orderPizza(): string {
    // 팩토리 메서드를 사용하여 피자를 생성합니다.
    const pizza = this.createPizza()

    // 피자 제작 과정을 수행하고 결과를 반환합니다.
    return `
      주문한 피자: ${pizza.prepare()},
      ${pizza.bake()},
      ${pizza.cut()},
      ${pizza.box()}
    `
  }
}

// 📌 4. CheesePizzaFactory와 PepperoniPizzaFactory 클래스를 생성하고 PizzaFactory를 상속합니다.
// 치즈 피자를 생성하는 팩토리
class CheesePizzaFactory extends PizzaFactory {
  // 치즈 피자를 생성하는 구체적인 팩토리 메서드를 구현합니다.
  public createPizza(): Pizza {
    return new CheesePizza()
  }
}

// 페퍼로니 피자를 생성하는 팩토리
class PepperoniPizzaFactory extends PizzaFactory {
  // 페퍼로니 피자를 생성하는 구체적인 팩토리 메서드를 구현합니다.
  public createPizza(): Pizza {
    return new PepperoniPizza()
  }
}

// 📌 5. 클라이언트 코드를 위한 함수를 정의합니다.
function clientCode(factory: PizzaFactory) {
  // 클라이언트 코드에서 PizzaFactory를 사용하여 피자를 주문하고 제작 과정을 출력합니다.
  console.log('클라이언트: 피자를 주문하고 제작 과정을 확인합니다.')
  console.log(factory.orderPizza())
}

// 📌 6. 애플리케이션 시작: 치즈 피자를 생성하는 공장을 사용하여 클라이언트 코드를 실행합니다.
console.log('앱: 치즈 피자 주문을 시작합니다.')
clientCode(new CheesePizzaFactory())
console.log('')

// 📌 7. 애플리케이션 시작: 페퍼로니 피자를 생성하는 공장을 사용하여 클라이언트 코드를 실행합니다.
console.log('앱: 페퍼로니 피자 주문을 시작합니다.')
clientCode(new PepperoniPizzaFactory())
