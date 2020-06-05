import { AnimalTypes } from './EAnimal';
import Tiger from './Tiger';
import Duck from './Duck';

export default class AnimalFactory {
  getAnimal(animalType: AnimalTypes){
    if(animalType === AnimalTypes.TIGER){
      return new Tiger()
    } else if (animalType === AnimalTypes.Duck){
      return new Duck()
    }
  }
}