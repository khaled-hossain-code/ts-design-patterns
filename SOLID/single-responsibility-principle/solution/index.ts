import Employee from "./$employee"
import Promotion from "./HR/promotion"
import IncomeTax from "./Finance/incomeTax"

const employee1 = new Employee(1, 50000, "solid")

const promOfEmployee1 = new Promotion(employee1)
promOfEmployee1.isPromotionDueThisYear()

const taxOfEmployee1 = new IncomeTax(employee1)
taxOfEmployee1.calculateIncomeTaxForCurrentYear()
