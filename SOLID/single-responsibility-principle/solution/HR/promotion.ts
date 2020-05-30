class Promotion {
  constructor(private employee: $Employee) {}

  isPromotionDueThisYear() {
    if (this.employee.dateOfJoin - Date.now() >= 1000) {
      console.log("promotion due")
    }

    console.log("no promotion")
  }
}
