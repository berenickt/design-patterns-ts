/**
 * Factory Method 패턴을 실제 사용 예
 *
 * Need:
 * 다양한 데이터베이스 커넥터를 생성하고 환경 변수를 사용하여 커넥터를 전환
 *
 * Solution:
 * 데이터베이스 연결의 구체적인 구현을 반환하는 팩토리 메소드로 추상 클래스 생성
 */

/**
 * factory method를 가진 추상 클래스(Abstract class)
 */
export abstract class DBConnectionFactory {
  public abstract createDBConnection(): DBConnection
}

/**
 * Concrete factories, each of them produces a concrete connection
 */
export class MongoConnectionFactory extends DBConnectionFactory {
  public createDBConnection() {
    return new MongoConnection()
  }
}

export class RedisConnectionFactory extends DBConnectionFactory {
  public createDBConnection(): DBConnection {
    return new RedisConnection()
  }
}

/**
 * 생성될 Abstract product = 데이터베이스 연결
 */
export abstract class DBConnection {
  provider: string

  public connect() {
    console.log(`Connected to ${this.provider}`)
  }
}

/**
 * 생성한 Concrete product = 데이터베이스 연결
 */
export class MongoConnection extends DBConnection {
  provider: string

  constructor() {
    super()
    this.provider = 'Mongo DB'
  }
}

export class RedisConnection extends DBConnection {
  provider: string

  constructor() {
    super()
    this.provider = 'Redis'
  }
}

/**
 * client함수는 어떤 concrete factory를 수용합니다.
 */
function main(dbConnectionFactory: DBConnectionFactory) {
  const dbConnection = dbConnectionFactory.createDBConnection()
  dbConnection.connect()
}

/**
 * 환경 변수에 따라 concrete factory를 생성하고, client 함수에 주입함
 */
switch (process.env.DB) {
  case 'Mongo':
    main(new MongoConnectionFactory())
    break
  case 'Redis':
    main(new RedisConnectionFactory())
    break
  default:
    console.error('Unknown DB')
}
