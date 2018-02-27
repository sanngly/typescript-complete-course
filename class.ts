class Person {
    name: string;
    private type: string;
    protected age: number;
    
    constructor(name: string, type: string, age: number, public userName: string) {
        this.name = name;
        this.type = type;
        this.age = age;
        console.log('Constructor Function Get Called.');        
    }

    getType(): string {
        return this.type;
    }

    setAge(age: number){
        this.age = age;
    }
}

const person = new Person('Sanjoy Ganguly', 'Angry Guy', 40, 'sannglyirc');
console.log(person.name, person.userName);
person.setAge(55);
console.log(person.getType());
console.log(person);

//Inheritence
class Sanjoy extends Person {
    //name = 'Sanjoy Ganguly';

    constructor(userName: string) {
        super('Sukdeb', 'Fat Guy', 32, userName);
    }
}
console.log(new Person('Anna', 'sangu', 90, 'Cool Guy'));
// always overide the content of cild class from super class

// Setter & Getter
class Plant {
    private _species : string = 'Abuta acutifolia'

    get species() : string {
        return this._species
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value
        } else {
            this._species = 'Abuta acutifolia Default'
        }
    }
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'Ere'
console.log(plant.species);
plant.species = 'Eremophila'
console.log(plant.species);

// Static Properties and Methods
class Helper {
    static PI: number = 3.14;

    static calculateCircumference(diameter : number): number {
        return this.PI * diameter;
    }
}
console.log(Helper.PI);
console.log(Helper.calculateCircumference(89));

// Abstract Class 
console.log('########################## Abstract Class ##########################');
abstract class Project {
    projectName: string = 'Default Project';
    budget: number = 1000;

    abstract changeName(name:string) : void;

    calculateBudget(){
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name: string) {
        this.projectName = name;
    }
}
let newProject = new ITProject();
newProject.changeName('Mal-Nutrition-Project');
newProject.calculateBudget();
console.log(newProject);

// Private Constructor Class 
console.log('########################## Private Constructor ##########################');

class OnlyOneInstance {
    private static instance: OnlyOneInstance;
    private constructor(public readonly name: string) {

    }
    static getInstance() : OnlyOneInstance {
        if (!OnlyOneInstance.instance){
            OnlyOneInstance.instance = new OnlyOneInstance('The Only One Instance');
        }
        return OnlyOneInstance.instance;
    }
}

//let wrongInstance = new OnlyOneInstance('Wrong Instance');
let rightInstance = OnlyOneInstance.getInstance();
//rightInstance.name = 'Something Else';
console.log(rightInstance.name);
console.log(rightInstance);


