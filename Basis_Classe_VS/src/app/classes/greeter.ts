export class Greeter{

    greeting: string;
    valueYear: number;
    
    constructor(message: string){
        this.greeting = message;
    }

    greet(value: number){
        this.valueYear = value;
        return `Hello ${this.greeting} from ${this.valueYear}!` 
    }

}