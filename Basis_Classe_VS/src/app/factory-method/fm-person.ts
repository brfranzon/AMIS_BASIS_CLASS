abstract class Person{
    abstract  getName(name: string): string;
    abstract  getTelefon(tel: number): string;
}

class Employee extends Person{
     getName(name: string): string{
        return `Der Name ist ${name}`;
    }
    getTelefon(tel: number): string {
        return `Der Tel ist ${tel}!`;
    }
    getAddresse(add: string){
        return `Die Adresse ist ${add}!`;
    }
}

// Factory
abstract class FactoryPerson{
    abstract factoryPersonMethod(): Person;
}



export class employeeFactory extends FactoryPerson{
    factoryPersonMethod(): Person{
        return new Employee();
    }


    
}

