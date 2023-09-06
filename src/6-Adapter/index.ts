// 1. Target 인터페이스 (한국 콘센트)
interface KoreanPlug {
  plugIntoKoreanOutlet(): string
}

// 2. Adaptee 클래스 (미국 콘센트)
class USPlug {
  plugIntoUSOutlet(): string {
    return '미국 콘센트에 연결됨'
  }
}

// 3. Adapter 클래스
class Adapter implements KoreanPlug {
  private usPlug: USPlug

  constructor(usPlug: USPlug) {
    this.usPlug = usPlug
  }

  // 한국 콘센트에 연결하도록 어댑터가 변환
  plugIntoKoreanOutlet(): string {
    return this.usPlug.plugIntoUSOutlet() + ' (with adapter)'
  }
}

// 4. 클라이언트 코드
function main() {
  // 미국 표준 콘센트를 생성
  const usPlug = new USPlug()

  // 어댑터를 사용하여 한국 콘센트에 연결
  const adapter = new Adapter(usPlug)

  // 클라이언트 코드는 한국 콘센트 인터페이스를 사용하고 있음
  console.log('한국 콘센트에 연결됨: ' + adapter.plugIntoKoreanOutlet())
}

// 클라이언트 코드 실행
main()
