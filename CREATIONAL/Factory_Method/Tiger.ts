import IAnimal from './IAnimal';

export default class Tiger implements IAnimal {
  speak(){
    console.log('Tiger says halum halum')
  }
}