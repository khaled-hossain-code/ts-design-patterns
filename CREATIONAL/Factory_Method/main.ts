import AnimalFactory from "./AnimalFactory";
import { AnimalTypes } from "./EAnimal";
import IAnimal from "./IAnimal";

const animalFactory = new AnimalFactory();

const animal1:IAnimal = animalFactory.getAnimal(AnimalTypes.TIGER);
animal1.speak();

const animal2:IAnimal = animalFactory.getAnimal(AnimalTypes.Duck);
animal2.speak();