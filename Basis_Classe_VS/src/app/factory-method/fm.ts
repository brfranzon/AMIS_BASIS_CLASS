abstract class Products{
    abstract operation(): string;
}

class ConcreteProduct1 extends Products{

    operation(): string {
        return `{My concrete Product 1!}`
    }

}



// Creator
abstract class Creator{  
    abstract factoryMethod(): Products;
}

export class ConcreteCreator1 extends Creator{

    factoryMethod(): Products {
        return new ConcreteProduct1();
    }

}

