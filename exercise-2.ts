//Re-write all this code using TypeScript and Class Features.

// Exercise 1 - How was your TypeScript Class?
class Car {

    public name : string = 'Honda';
    public acceleration : number = 0;

    public constructor(name:string, ){
        this.name = name;
        this.acceleration = 0;
    }
    
    honk() : void {
        console.log("Toooooooooot!");
    };

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

let myCar = new Car("BMW");
myCar.honk();
console.log(myCar.acceleration);
myCar.accelerate(10);
console.log(myCar.acceleration);

// Exercise 2 - Two objects, based on each other ...

class baseObject {
    width: number = 0;
    length: number = 0;
};

class Rectangle extends baseObject {
    width = 5;
    length = 2;
    calcSize() : number  {
        return this.width * this.length;
    }   
}
let rectangleObject = new Rectangle();
console.log(rectangleObject.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Pearson {
    _firstName: string = "Pearson Publisher";
    _enumerable: boolean = true;
    _configurable: boolean = true;

    get firstName() {
        return this._firstName;
    }
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }

    get enumerable() {
        return this._enumerable;
    }
    set enumerable(value: boolean) {
        this._enumerable = value
    }

}

const pearson = new Pearson();
console.log(pearson.firstName);
pearson.firstName = "Ma";
console.log(pearson.firstName);
pearson.firstName = "Maximilian";
console.log(pearson.firstName);