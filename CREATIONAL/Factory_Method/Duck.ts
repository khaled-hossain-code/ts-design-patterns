import IAnimal from './IAnimal';

export default class Duck implements IAnimal {
  speak(){
    console.log("Duck says quak quak")
  }
}