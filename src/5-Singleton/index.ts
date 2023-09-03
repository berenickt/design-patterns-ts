// 📌 1. 싱글톤 클래스
class AnimalShelter {
  private static instance: AnimalShelter | null = null // 유일한 인스턴스를 저장할 정적 변수
  private animals: string[] = [] // 동물들을 저장할 배열

  private constructor() {
    // 외부에서 생성자 호출을 막기 위해 private으로 선언
  }

  // 인스턴스를 가져오는 정적 메서드
  static getInstance(): AnimalShelter {
    if (!this.instance) {
      // 인스턴스가 없는 경우에만 생성
      this.instance = new AnimalShelter()
    }
    return this.instance
  }

  // 동물 추가 메서드
  addAnimal(animal: string): void {
    this.animals.push(animal)
  }

  // 동물 목록을 출력하는 메서드
  listAnimals(): string[] {
    return this.animals
  }
}

// 📌 2. 클라이언트 코드
function main() {
  // 싱글톤 인스턴스 생성
  const animalShelter1 = AnimalShelter.getInstance()
  const animalShelter2 = AnimalShelter.getInstance()

  // 두 인스턴스가 동일한지 확인
  console.log(`동물 보호소 1은 동물 보호소 2와 동일합니까? ${animalShelter1 === animalShelter2}`)

  // 동물 추가
  animalShelter1.addAnimal('🐶강아지')
  animalShelter1.addAnimal('🐱고양이')

  // 두 인스턴스가 동일한 동물 목록을 가지고 있는지 확인
  console.log('동물 보호소 1 : ' + animalShelter1.listAnimals().join(', '))
  console.log('동물 보호소 2 : ' + animalShelter2.listAnimals().join(', '))
}

// 클라이언트 코드 실행
main()
