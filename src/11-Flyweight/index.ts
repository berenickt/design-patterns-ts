/**
 * Flyweight Design Pattern
 * Intent: 여러 객체에서 중복되는 데이터를 공유하여 메모리 사용을 최적화하는 패턴입니다.
 */

/**
 * 관광 정보를 저장하는 경량 객체 (플라이웨이트)
 */
class TouristInfo {
  private name: string
  private description: string
  private rating: number

  constructor(name: string, description: string, rating: number) {
    this.name = name
    this.description = description
    this.rating = rating
  }

  public getName(): string {
    return this.name
  }

  public getDescription(): string {
    return this.description
  }

  public getRating(): number {
    return this.rating
  }
}

/**
 * 경량 객체를 생성하고 관리하는 팩토리
 */
class TouristInfoFactory {
  private touristInfos: { [key: string]: TouristInfo } = {}

  /**
   * 도시 이름을 키로 사용하여 경량 객체를 생성하거나 반환합니다.
   * 이미 해당 도시의 정보가 있을 경우 새로 생성하지 않고 기존 객체를 반환합니다.
   */
  public getTouristInfo(cityName: string): TouristInfo {
    if (!(cityName in this.touristInfos)) {
      // 경량 객체가 없을 경우 생성하고 저장
      switch (cityName) {
        case 'Paris':
          this.touristInfos[cityName] = new TouristInfo('Paris', '파리는 아름다운 도시입니다.', 5)
          break
        case 'London':
          this.touristInfos[cityName] = new TouristInfo('London', '런던은 역사적인 도시입니다.', 4)
          break
        // 다른 도시의 정보도 추가 가능
        default:
          this.touristInfos[cityName] = new TouristInfo(cityName, '이 도시에 대한 정보가 없습니다.', 0)
      }
    }
    return this.touristInfos[cityName]
  }

  /**
   * 저장된 경량 객체의 개수와 도시 이름을 출력
   */
  public listTouristInfos(): void {
    const count = Object.keys(this.touristInfos).length
    console.log(`TouristInfoFactory: 저장된 경량 객체 수 - ${count}`)
    for (const cityName in this.touristInfos) {
      console.log(cityName)
    }
  }
}

/**
 * 클라이언트 코드
 */
const touristInfoFactory = new TouristInfoFactory()

// 도시 정보를 가져와서 출력
const parisInfo = touristInfoFactory.getTouristInfo('Paris')
console.log(`도시: ${parisInfo.getName()}, 설명: ${parisInfo.getDescription()}, 평점: ${parisInfo.getRating()}`)

const londonInfo = touristInfoFactory.getTouristInfo('London')
console.log(`도시: ${londonInfo.getName()}, 설명: ${londonInfo.getDescription()}, 평점: ${londonInfo.getRating()}`)

// 동일한 도시 정보를 다시 가져와도 이미 생성된 객체를 사용
const parisInfo2 = touristInfoFactory.getTouristInfo('Paris')
console.log(`도시: ${parisInfo2.getName()}, 설명: ${parisInfo2.getDescription()}, 평점: ${parisInfo2.getRating()}`)

// 저장된 경량 객체 수 확인
touristInfoFactory.listTouristInfos()
