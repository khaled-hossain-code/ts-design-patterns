export default class Employee {
  employeeId: number
  salary: number
  name: string
  dateOfJoin: any

  constructor(employeeId: number, salary: number, name: string) {
    this.employeeId = employeeId
    this.salary = salary
    this.name = name
    this.dateOfJoin = Date.now()
  }

  isPromotionDueThisYear() {
    console.log("promotion due")
  }

  calculateIncomeTaxForCurrentYear() {
    const tax: number = this.salary * 0.15
    console.log("calculating income tax", tax)
  }
}
