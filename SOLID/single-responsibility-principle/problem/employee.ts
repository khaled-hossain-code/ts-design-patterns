class Employee {
  employeeId: string
  salary: number
  name: string
  address: string
  dateOfJoin: any

  isPromotionDueThisYear() {
    console.log("promotion due")
  }

  calculateIncomeTaxForCurrentYear() {
    const tax: number = this.salary * 0.15
    console.log("calculating income tax", tax)
  }
}
