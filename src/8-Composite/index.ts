// 1. Component 인터페이스 (조직 구성원)
interface Employee {
  getName(): string
  getRole(): string
  getSalary(): number
}

// 2. Leaf 클래스 (개별 직원)
class LeafEmployee implements Employee {
  private name: string
  private role: string
  private salary: number

  constructor(name: string, role: string, salary: number) {
    this.name = name
    this.role = role
    this.salary = salary
  }

  getName(): string {
    return this.name
  }

  getRole(): string {
    return this.role
  }

  getSalary(): number {
    return this.salary
  }
}

// 3. Composite 클래스 (부서, 팀)
class CompositeEmployee implements Employee {
  private name: string
  private role: string
  private employees: Employee[] = []

  constructor(name: string, role: string) {
    this.name = name
    this.role = role
  }

  getName(): string {
    return this.name
  }

  getRole(): string {
    return this.role
  }

  // 복합 객체에 하위 구성원 추가
  addEmployee(employee: Employee): void {
    this.employees.push(employee)
  }

  // 복합 객체의 급여 합산
  getSalary(): number {
    let totalSalary = 0
    for (const employee of this.employees) {
      totalSalary += employee.getSalary()
    }
    return totalSalary
  }
}

// 4. 클라이언트 코드
function main() {
  // 개별 직원 생성
  const individualEmployee1 = new LeafEmployee('Alice', '엔지니어', 60000)
  const individualEmployee2 = new LeafEmployee('Bob', '디자이너', 55000)

  // 부서 생성 및 직원 추가
  const engineeringTeam = new CompositeEmployee('엔지니어링 팀', '매니저')
  engineeringTeam.addEmployee(individualEmployee1)
  engineeringTeam.addEmployee(individualEmployee2)

  // 급여 합산
  const totalSalary = engineeringTeam.getSalary()

  console.log(`총 급여 for ${engineeringTeam.getName()}: $${totalSalary}`)
}

// 클라이언트 코드 실행
main()
