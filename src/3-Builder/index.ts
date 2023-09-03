// 📌 1. Product 클래스: 생성할 커스텀 햄버거의 구조를 정의합니다.
class CustomBurger {
  private ingredients: string[] = []

  // 햄버거에 재료를 추가하는 메서드
  addIngredient(ingredient: string) {
    this.ingredients.push(ingredient)
  }

  // 햄버거 정보를 출력하는 메서드
  showIngredients(): void {
    console.log(`커스텀 버거 재료: ${this.ingredients.join(', ')}`)
  }
}

// 📌 2. Builder 인터페이스: 커스텀 햄버거를 생성하기 위한 공통 메서드를 정의합니다.
interface BurgerBuilder {
  buildBun(): void
  buildPatties(): void
  buildCheese(): void
  buildSauces(): void
  getResult(): CustomBurger
}

// 📌 3. ConcreteBuilder 클래스: Builder 인터페이스를 구현하여 커스텀 햄버거를 구체적으로 생성합니다.
class DeluxeBurgerBuilder implements BurgerBuilder {
  private burger: CustomBurger = new CustomBurger()

  buildBun(): void {
    this.burger.addIngredient('고급빵')
  }

  buildPatties(): void {
    this.burger.addIngredient('소고기 패티')
  }

  buildCheese(): void {
    this.burger.addIngredient('체다 치즈')
  }

  buildSauces(): void {
    this.burger.addIngredient('스페셜 소스')
  }

  getResult(): CustomBurger {
    return this.burger
  }
}

class VeggieBurgerBuilder implements BurgerBuilder {
  private burger: CustomBurger = new CustomBurger()

  buildBun(): void {
    this.burger.addIngredient('통밀빵')
  }

  buildPatties(): void {
    this.burger.addIngredient('채소 패티')
  }

  buildCheese(): void {
    this.burger.addIngredient('스위스 치즈')
  }

  buildSauces(): void {
    this.burger.addIngredient('비건 마요네즈')
  }

  getResult(): CustomBurger {
    return this.burger
  }
}

// 📌 4. Director 클래스: 커스텀 햄버거 생성의 단계적인 진행을 관리합니다.
class BurgerMaker {
  private builder: BurgerBuilder

  constructor(builder: BurgerBuilder) {
    this.builder = builder
  }

  // 커스텀 햄버거 생성의 단계를 수행하는 메서드
  createBurger() {
    this.builder.buildBun()
    this.builder.buildPatties()
    this.builder.buildCheese()
    this.builder.buildSauces()
  }
}

// 📌 5. 클라이언트 코드
function customizeBurgers() {
  // 빌더 인스턴스 생성
  const deluxeBuilder: BurgerBuilder = new DeluxeBurgerBuilder()
  const veggieBuilder: BurgerBuilder = new VeggieBurgerBuilder()

  // 디렉터 인스턴스 생성 및 빌더 설정
  const deluxeBurgerMaker: BurgerMaker = new BurgerMaker(deluxeBuilder)
  const veggieBurgerMaker: BurgerMaker = new BurgerMaker(veggieBuilder)

  // 커스텀 햄버거 생성 진행
  deluxeBurgerMaker.createBurger()
  veggieBurgerMaker.createBurger()

  // 최종 결과물인 커스텀 햄버거 객체 획득
  const deluxeBurger: CustomBurger = deluxeBuilder.getResult()
  const veggieBurger: CustomBurger = veggieBuilder.getResult()

  // 결과물 확인
  console.log('고급수제 버거:')
  deluxeBurger.showIngredients()

  console.log('\n콩고기 버거:')
  veggieBurger.showIngredients()
}

// 클라이언트 코드 실행
customizeBurgers()
