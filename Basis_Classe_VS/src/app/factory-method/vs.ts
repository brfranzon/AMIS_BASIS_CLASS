abstract class TVsDataObject{
    
    abstract getList(): Object;
}

class Schueler extends TVsDataObject{

    s = [
       {
        name: 'Michael',
        tel: 12234
       },
       {
        name: 'Sarah',
        tel: 142234
       }
    ];

    getList(): Object {
        return this.s;
    }
}

class Eltern extends TVsDataObject{
    getList(): Object {
        return `ElternList!`
    }
}

//*********************/
abstract class Factory{
    abstract factorySchueler(): TVsDataObject;
    abstract factoryEltern(): TVsDataObject;
}

export class TVsDataRecord extends Factory{

    factorySchueler(): TVsDataObject{
        return new Schueler();
    }       

    factoryEltern(): TVsDataObject{
        return new Eltern();
    }

    factoryMsg(msg: string): string{
        return `Error: ${msg}!`;
    }
}


