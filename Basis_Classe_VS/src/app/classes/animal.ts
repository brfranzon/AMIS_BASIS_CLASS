export class Animal{

    nameAnimal: string;

    constructor(name: string){
        this.nameAnimal = name;
    }

   weightAnimal(w: number){
        return `The ${this.nameAnimal} has ${w} kilos!`
   } 

}