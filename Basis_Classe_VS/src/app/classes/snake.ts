import { Animal } from '../classes/animal';

export class Snake extends Animal{

    test: string;

    constructor(name: string){
        super(name);
        this.test = name;  
   
    }

    teste(){
     return `Teste: ${this.test}`;
    }

    weightAnimal(w: number = 78){
        console.log('snake class');
        return super.weightAnimal(w);
    }
    
}