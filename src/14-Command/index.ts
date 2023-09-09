/** Command Design Pattern
 * Intent:
 * 요청을 객체로 캡슐화하여
 * 매개 변수화, 지연 실행, 연산 취소 또는 다시 실행 등을 지원합니다.
 */

/**
 * 전자기기 인터페이스
 */
interface ElectronicDevice {
  on(): void
  off(): void
  volumeUp(): void
  volumeDown(): void
}

/**
 * 실제 전자기기 클래스
 */
class Television implements ElectronicDevice {
  private volume: number = 0

  public on(): void {
    console.log('TV를 켭니다.')
  }

  public off(): void {
    console.log('TV를 끕니다.')
  }

  public volumeUp(): void {
    this.volume++
    console.log(`볼륨을 올립니다. 현재 볼륨: ${this.volume}`)
  }

  public volumeDown(): void {
    this.volume--
    console.log(`볼륨을 내립니다. 현재 볼륨: ${this.volume}`)
  }
}

/**
 * 커맨드 인터페이스
 */
interface Command {
  execute(): void
  undo(): void
}

/**
 * 전원 켜기 커맨드 클래스
 */
class TurnOnCommand implements Command {
  private device: ElectronicDevice

  constructor(device: ElectronicDevice) {
    this.device = device
  }

  public execute(): void {
    this.device.on()
  }

  public undo(): void {
    this.device.off()
  }
}

/**
 * 볼륨 업 커맨드 클래스
 */
class VolumeUpCommand implements Command {
  private device: ElectronicDevice

  constructor(device: ElectronicDevice) {
    this.device = device
  }

  public execute(): void {
    this.device.volumeUp()
  }

  public undo(): void {
    this.device.volumeDown()
  }
}

/**
 * 리모컨 클래스
 */
class RemoteControl {
  private command: Command | null = null

  public setCommand(command: Command): void {
    this.command = command
  }

  public pressButton(): void {
    if (this.command) {
      this.command.execute()
    }
  }

  public pressUndo(): void {
    if (this.command) {
      this.command.undo()
    }
  }
}

/**
 * 클라이언트 코드
 */
const tv: ElectronicDevice = new Television()

const turnOnCommand: Command = new TurnOnCommand(tv)
const volumeUpCommand: Command = new VolumeUpCommand(tv)

const remote: RemoteControl = new RemoteControl()

remote.setCommand(turnOnCommand)
remote.pressButton()

remote.setCommand(volumeUpCommand)
remote.pressButton()
remote.pressUndo()
