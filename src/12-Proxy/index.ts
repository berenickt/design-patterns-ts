/** Proxy Design Pattern
 * Intent(의미):
 * 다른 객체에 대한 인터페이스를 제공하여 객체에 대한 접근을 제어하거나 추가적인 기능을 제공합니다.
 */

/**
 * 📌 1. 이미지 인터페이스
 */
interface Image {
  display(): void
}

/**
 * 📌 2. 실제 이미지 클래스
 */
class RealImage implements Image {
  private filename: string

  constructor(filename: string) {
    this.filename = filename
    this.loadImageFromDisk()
  }

  private loadImageFromDisk(): void {
    console.log(`로딩 중: ${this.filename}`)
  }

  public display(): void {
    console.log(`보여줌: ${this.filename}`)
  }
}

/**
 * 📌 3. 이미지 로딩을 제어하는 프록시 클래스
 */
class ImageProxy implements Image {
  private realImage: RealImage | null = null
  private filename: string

  constructor(filename: string) {
    this.filename = filename
  }

  public display(): void {
    if (this.realImage === null) {
      // 이미지가 로드되지 않았을 때 로드하고 보여줌
      this.realImage = new RealImage(this.filename)
    }
    this.realImage.display()
  }
}

/**
 * 📌 4. 클라이언트 코드
 */
const image1: Image = new ImageProxy('image1.jpg')
const image2: Image = new ImageProxy('image2.jpg')

// 이미지 로딩이 필요한 시점에 로드되고 보여짐
image1.display()

// 이미지가 이미 로드된 경우 바로 보여짐
image2.display()
