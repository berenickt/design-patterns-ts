// 📌 1. 은행 계좌 클래스 : 입금, 출금, 잔액 조회 기능을 제공
class BankAccount {
  private balance: number

  constructor(initialBalance: number) {
    this.balance = initialBalance
  }

  // 입금
  deposit(amount: number): void {
    this.balance += amount
  }

  // 출금
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount
    } else {
      console.log('잔액 부족')
    }
  }

  // 잔액 조회
  getBalance(): number {
    return this.balance
  }
}

// 📌 2. 퍼사드 클래스: 은행 계좌 서브시스템을 단순화하는 인터페이스 제공
class BankFacade {
  private account1: BankAccount
  private account2: BankAccount

  constructor() {
    // 서브시스템의 객체들을 초기화
    this.account1 = new BankAccount(1000) // 초기 잔액 1000
    this.account2 = new BankAccount(500) // 초기 잔액 500
  }

  // 계좌1에 입금하기
  depositToAccount1(amount: number): void {
    this.account1.deposit(amount)
  }

  // 계좌2에 입금하기
  depositToAccount2(amount: number): void {
    this.account2.deposit(amount)
  }

  // 계좌1에서 출금하기
  withdrawFromAccount1(amount: number): void {
    this.account1.withdraw(amount)
  }

  // 계좌2에서 출금하기
  withdrawFromAccount2(amount: number): void {
    this.account2.withdraw(amount)
  }

  // 계좌1의 잔액 조회
  getAccount1Balance(): number {
    return this.account1.getBalance()
  }

  // 계좌2의 잔액 조회
  getAccount2Balance(): number {
    return this.account2.getBalance()
  }
}

// 📌 3. 클라이언트 코드
const bankFacade = new BankFacade()

// 계좌1에 입금
bankFacade.depositToAccount1(200)
console.log('계좌1 잔액:', bankFacade.getAccount1Balance()) // 계좌1 잔액: 1200

// 계좌2에 출금
bankFacade.withdrawFromAccount2(100)
console.log('계좌2 잔액:', bankFacade.getAccount2Balance()) // 계좌2 잔액: 400
