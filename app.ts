// string
let myName : string = 'Sanjoy';
//myName = 28;

// number integer and floating point 
let myAge : number = 39;
//myAge = '34';

// boolean 
let hasHobbies : boolean = true;
//hasHobbies = 1;
console.log(`${hasHobbies}`);

// type any
let myRealAge : number;
myRealAge = 27;
//myRealAge = '39';
console.log(`${myRealAge}`);

//array
let myHobbies : any [] = ['Cooking', 'Movies', 'Eating', 1978, 'Football'];
myHobbies = [1200, 145, 789, 'Cooking', 'Movies', 'Eating', 1978,];
console.log(typeof myHobbies);
console.log(typeof myHobbies[0]);
console.log(`${myHobbies}`);

//tuples
let address : [string, number] = ['BHCS Layout Bengaluru 560061', 1413 ];
console.log(`${address}`);

//enum
enum colors  {
    RED = 1978,
    GREEN = 1978 * 2,
    BLUE
};

let myColor : colors = colors.BLUE;
console.log(`${myColor}`);

// any types
let car : any = 'BMW';
console.log(`${car}`);
car = {'brand' : 'BMW', 
'series': 3,
'lauched_date': new Date()
};
console.log(car);

// functions 
function returnMyName () : string {
    return myName;
}
console.log(returnMyName());

// void
function returnHello(): void {
    //return 'Hello World!!';
    console.log('Hello World!!');
}
// console.log(returnHello());

// argument types
function multiply(value1 : number, value2: number) : number {
    return (value1 * value2);
};
console.log(multiply(10, 34));

//function types 
let myMultiply : (val1: number, val2: number) => number;
//myMultiply = returnHello;
//myMultiply(2, 4);
myMultiply = multiply;
console.log(myMultiply(2,5));

//objects 
let userData : { name: string, age : number } = {
    name: 'Sanjoy',
    age: 37
};
console.log(userData);
//type alias

type Complex = { data: any[], output: (all: boolean) => number []};

// complex objects
let complex : Complex = {
    data: [10641895, 10641045],
    output: function (all:boolean) : number [] {
        if (all){
            return this.data;
        }
        return this.data[0];
    }
};

let complex2 : Complex = {
    data: [10631456, 10641045],
    output: function (all:boolean) : number [] {
        if (all) {
            return this.data; 
        }
        return this.data[0];
    }
};
//union types
let myRealName : number | string | boolean = 27;
myRealName = "28";
myRealName = false;
console.log(myRealName);
//check types in runtime
let finalValues = 35;
if ( typeof finalValues == 'number') {
    console.log('Final values is number');
}
//never types
function returnNever(): never {
    throw new Error('Never Returns Exception Occured');
}
//console.log(returnNever());
// nullables types
let canBeNull : number | string | null = 12;
canBeNull = null;
console.log(canBeNull);
let canAlsoBeNull;
canAlsoBeNull = null;
console.log(canAlsoBeNull);
let thisCanBeAny : string | boolean | any | null = null;
thisCanBeAny = true;
console.log(thisCanBeAny);

function controlMe(isTrue: boolean, someThingElse: boolean) {
    let result: number = 12;
    if (isTrue){
        result = 12;
    } else if (someThingElse){
        result = result * 2;
    }
    result = 33;
    return result;
}
console.log(controlMe(true, false));

console.log('----------------------------------- LET & CONST --------------------------------------------------------------');

// let vs const vs var block scope
let variable = 12;
variable = 15;
console.log(variable);

const constVariable = 100;
//constVariable = 44;
console.log(constVariable);

// Block Scope
function reset() {
    //console.log(variable);
    
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

console.log('----------------------------------- Arrow Function --------------------------------------------------------------');

const addNumbers = function(a:number, b:number) : number {
    return a + b;
};
console.log(addNumbers(2,2));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(3,3));

const squareNumbers = (x : number) => x * x;
console.log(squareNumbers(2));

const greatFriends = friends => console.log(friends);
greatFriends('Sanjoy');
// default parameters has some rules in ES
const countDown = (start: number = 10) => {
    while(start > 0) {
        start--;
    }
    console.log(`Done ${start}`);    
};
countDown();
// REST and SPREAD operators

let numbers = [34, 12, 99, 55];
console.log(Math.max(45,11,8, 90, -3));
console.log(Math.max(...numbers));

function covertToArray1(number1: number, number2: number) : number [] {
    return [number1, number2];
    //return args;
}
console.log(covertToArray1(23, 45));

function covertToArray(...args: number[]) : number [] {
    return args;
}
console.log(covertToArray(13, 56, 78, 90, 12, 56, 787, 67));

//Array Destructuring 
console.log('---------------------------DESTRUCTURING---------------------------');
const myTeamHobbies = ['Swimming', 'Water Polo', 'Basket Ball'];
//let hobby4 = myTeamHobbies[0];
const [hobby1, hobby2, hobby3] = myTeamHobbies;
console.log(hobby1, hobby2, hobby3);

// Object Destructuring
const contractualWorker = {
    userId : 10641895,
    userName: 'Sanjoy Ganguly',
    dataOfJoin: new Date(),
    age: 45
};
/* 
let userId = contractualWorker.userId;
let userName = contractualWorker.userName;
let dateOfJoin = contractualWorker.dataOfJoin;
let age = contractualWorker.age; */

const {userId: id, userName: nma, dataOfJoin: doj, age: ag} = contractualWorker;
console.log(`Hi I am ${nma}, I am ${ag} old. My Id is ${id} & joined on ${doj} `);

// Template Literals
const employeeName = 'Sanjoy GANGULY';
const greetings = `This is the Heading
Hi, I am ${employeeName}
I am learning TS
`;
console.log(greetings);