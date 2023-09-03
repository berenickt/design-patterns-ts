// 📌 1. 프로토타입 객체 (Prototype)
class Burger {
  private name: string
  private price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  // 객체를 복제하는 메서드
  clone(): Burger {
    return new Burger(this.name, this.price)
  }

  // 햄버거 정보를 출력하는 메서드
  toString(): string {
    return `버거명: ${this.name}, 가격: $${this.price.toFixed(2)}`
  }
}

// 📌 2. 햄버거 공장
class BurgerFactory {
  private burgerPrototype: Burger

  constructor(burgerPrototype: Burger) {
    this.burgerPrototype = burgerPrototype
  }

  // 햄버거를 생성하는 메서드
  createBurger(): Burger {
    return this.burgerPrototype.clone()
  }
}

// 📌 3. 클라이언트 코드
function main() {
  // 햄버거 프로토타입 객체 생성
  const burgerPrototype = new Burger('치즈버거', 5.99)

  // 햄버거 공장 생성 및 프로토타입 설정
  const factory = new BurgerFactory(burgerPrototype)

  // 햄버거 생성 및 정보 출력
  const burger1 = factory.createBurger()
  const burger2 = factory.createBurger()

  console.log('버거 1: ' + burger1.toString())
  console.log('버거 2: ' + burger2.toString())
}

// 클라이언트 코드 실행
main()
