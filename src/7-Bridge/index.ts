// 📌 1. 구현 인터페이스 (색상)
// 색상을 나타내는 인터페이스로, applyColor 메서드를 포함
interface Color {
  applyColor(): string
}

// 📌 2. 구체적인 구현 클래스들 (빨간색, 파란색)
// 구체적인 색상을 나타내는 클래스로, applyColor 메서드를 구현
class RedColor implements Color {
  applyColor(): string {
    return 'Red'
  }
}

class BlueColor implements Color {
  applyColor(): string {
    return 'Blue'
  }
}

// 📌 3. 추상화 클래스 (모양)
// Shape 추상 클래스: 모양을 나타내는 추상 클래스로, 색상을 가지며 draw 메서드와 applyColor 메서드를 포함
abstract class Shape {
  protected color: Color // 모양이 가지는 색상

  constructor(color: Color) {
    this.color = color
  }

  abstract draw(): string // 모양을 그리는 추상 메서드

  // 모양에 색상을 적용하는 메서드
  applyColor(): string {
    return `${this.draw()} with ${this.color.applyColor()} color`
  }
}

// 📌 4. 구체적인 추상화 클래스들 (원, 사각형)
// Circle 및 Rectangle 클래스: 구체적인 모양을 나타내는 클래스로, draw 메서드를 구현
class Circle extends Shape {
  draw(): string {
    return 'Circle'
  }
}

class Rectangle extends Shape {
  draw(): string {
    return 'Rectangle'
  }
}

// 📌 5. 클라이언트 코드
// 클라이언트 코드에서는 모양에 적절한 색상을 적용하고, 이를 출력
// 브리지 패턴을 사용하여 모양과 색상을 독립적으로 확장
function main() {
  const redCircle = new Circle(new RedColor())
  const blueRectangle = new Rectangle(new BlueColor())

  console.log(redCircle.applyColor()) // "Circle with Red color"
  console.log(blueRectangle.applyColor()) // "Rectangle with Blue color"
}

// 클라이언트 코드 실행
main()
