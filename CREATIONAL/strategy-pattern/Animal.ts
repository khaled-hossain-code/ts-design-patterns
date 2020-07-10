import { Flys, ItFlys, CantFly } from "./flyStrategy"

abstract class Animal {
  flyingType: Flys
  abstract makeSound()

  tryToFly(): string {
    return this.flyingType.fly()
  }

  setFlyingAbility(newFlyType: Flys) {
    this.flyingType = newFlyType
  }
}

export class Dog extends Animal {
  constructor() {
    super()
    this.flyingType = new CantFly() // giving a initial capability
  }

  makeSound() {
    console.log("Woof Woof")
  }
}

export class Bird extends Animal {
  constructor() {
    super()
    this.flyingType = new ItFlys() // giving a initial capability
  }

  makeSound() {
    console.log("meow meow")
  }
}
