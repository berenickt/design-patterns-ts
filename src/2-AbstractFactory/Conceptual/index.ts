// 📌 1. 추상 팩토리 인터페이스를 정의합니다.
interface DeviceFactory {
  createSmartphone(): Smartphone
  createTablet(): Tablet
}

// 📌 2. 구체적인 팩토리 클래스를 생성합니다.
class AppleDeviceFactory implements DeviceFactory {
  createSmartphone(): Smartphone {
    return new IPhone()
  }

  createTablet(): Tablet {
    return new IPad()
  }
}

class WindowsDeviceFactory implements DeviceFactory {
  createSmartphone(): Smartphone {
    return new WindowsPhone()
  }

  createTablet(): Tablet {
    return new SurfaceTablet()
  }
}

// 📌 3. 추상 제품 인터페이스를 정의합니다.
interface Smartphone {
  call(): string
}

interface Tablet {
  browse(): string
}

// 📌 4. 구체적인 제품 클래스를 생성합니다.
class IPhone implements Smartphone {
  call(): string {
    return '아이폰으로 전화 걸기'
  }
}

class WindowsPhone implements Smartphone {
  call(): string {
    return '윈도우폰으로 전화 걸기'
  }
}

class IPad implements Tablet {
  browse(): string {
    return '아이패드로 인터넷 브라우징'
  }
}

class SurfaceTablet implements Tablet {
  browse(): string {
    return '서피스 태블릿으로 인터넷 브라우징'
  }
}

// 📌 5. 클라이언트 코드를 작성합니다.
function useDevice(factory: DeviceFactory) {
  const smartphone = factory.createSmartphone()
  const tablet = factory.createTablet()

  console.log('디바이스 사용:')
  console.log(smartphone.call())
  console.log(tablet.browse())
  console.log('사용이 완료되었습니다.\n')
}

// 📌 6. 클라이언트 코드에서 추상 팩토리를 사용하여 디바이스를 생성합니다.
console.log('애플 디바이스 사용')
useDevice(new AppleDeviceFactory())

console.log('윈도우 디바이스 사용')
useDevice(new WindowsDeviceFactory())
