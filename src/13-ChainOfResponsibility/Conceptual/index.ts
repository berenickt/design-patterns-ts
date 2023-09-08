/** Chain of Responsibility Design Pattern
 * Intent:
 * 요청을 처리할 수 있는 객체들을 연결하여 처리 책임을 위임하고,
 * 요청을 처리할 객체를 찾을 때까지 객체의 체인을 따라 이동합니다.
 */

/**
 * 📌 1. 로그 레벨 열거형
 */
enum LogLevel {
  INFO,
  DEBUG,
  WARNING,
  ERROR,
}

/**
 * 📌 2. 로그 메시지 클래스
 */
class LogMessage {
  constructor(public message: string, public level: LogLevel) {}
}

/**
 * 📌 3. 로그 핸들러 인터페이스
 */
interface LogHandler {
  setNext(handler: LogHandler): LogHandler
  handle(message: LogMessage): void
}

/**
 * 📌 4. 추상 로그 핸들러 클래스
 */
abstract class AbstractLogHandler implements LogHandler {
  private nextHandler: LogHandler | null = null

  public setNext(handler: LogHandler): LogHandler {
    this.nextHandler = handler
    return handler
  }

  public handle(message: LogMessage): void {
    if (this.nextHandler !== null) {
      this.nextHandler.handle(message)
    }
  }
}

/**
 * 📌 5. 정보 로그 핸들러 클래스
 */
class InfoLogHandler extends AbstractLogHandler {
  public handle(message: LogMessage): void {
    if (message.level === LogLevel.INFO) {
      console.log(`INFO 로그: ${message.message}`)
    } else {
      super.handle(message)
    }
  }
}

/**
 * 📌 6. 디버그 로그 핸들러 클래스
 */
class DebugLogHandler extends AbstractLogHandler {
  public handle(message: LogMessage): void {
    if (message.level === LogLevel.DEBUG) {
      console.log(`DEBUG 로그: ${message.message}`)
    } else {
      super.handle(message)
    }
  }
}

/**
 * 📌 7. 경고 로그 핸들러 클래스
 */
class WarningLogHandler extends AbstractLogHandler {
  public handle(message: LogMessage): void {
    if (message.level === LogLevel.WARNING) {
      console.log(`경고 로그: ${message.message}`)
    } else {
      super.handle(message)
    }
  }
}

/**
 * 📌 8. 에러 로그 핸들러 클래스
 */
class ErrorLogHandler extends AbstractLogHandler {
  public handle(message: LogMessage): void {
    if (message.level === LogLevel.ERROR) {
      console.error(`에러 로그: ${message.message}`)
    } else {
      super.handle(message)
    }
  }
}

/**
 * 📌 9. 클라이언트 코드
 */
const infoHandler: LogHandler = new InfoLogHandler()
const debugHandler: LogHandler = new DebugLogHandler()
const warningHandler: LogHandler = new WarningLogHandler()
const errorHandler: LogHandler = new ErrorLogHandler()

infoHandler.setNext(debugHandler).setNext(warningHandler).setNext(errorHandler)

// 로그 레벨에 따라 로그 처리
const message1: LogMessage = new LogMessage('안녕하세요.', LogLevel.INFO)
infoHandler.handle(message1)

const message2: LogMessage = new LogMessage('디버그 메시지입니다.', LogLevel.DEBUG)
infoHandler.handle(message2)

const message3: LogMessage = new LogMessage('경고: 서비스에 문제가 있습니다.', LogLevel.WARNING)
infoHandler.handle(message3)

const message4: LogMessage = new LogMessage('에러 발생: 서버 다운.', LogLevel.ERROR)
infoHandler.handle(message4)
