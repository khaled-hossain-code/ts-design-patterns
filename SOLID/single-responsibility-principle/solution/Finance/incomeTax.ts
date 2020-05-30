import $Employee from '../$employee';

export default class IncomeTax {
  private employee: $Employee

  constructor(employee: $Employee) {
    this.employee = employee
  }

  calculateIncomeTaxForCurrentYear() {
    const tax: number = this.employee.salary * 0.15;
    console.log("calculating income tax", tax);
  }
}