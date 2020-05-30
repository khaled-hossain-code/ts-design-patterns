export default class $Employee {
  employeeId: number
  salary: number
  name: string
  dateOfJoin: any

  constructor(
    employeeId: number,
    salary: number,
    name: string,
  ) {
    this.employeeId = employeeId
    this.salary = salary
    this.name = name
    this.dateOfJoin = Date.now()
  }
}
