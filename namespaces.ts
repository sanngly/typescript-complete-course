/* /// <reference path="area.ts"/>
/// <reference path="circumference.ts"/>
import CircleMath = MyMath.Circle; */
import {calculateAreaOfCube } from "./math/cube";
import {PI, calculateAreaOfRightCylinder}  from "./math/cylinder";

//const PI = 2.99;

/* console.log(MyMath.calculateCircumferenceOfCircle(34));
console.log(MyMath.calculateAreaOfRectangle(10,30));

console.log(CircleMath.calculateAreaOfCircle(2));
console.log(MyMath.Trapezoid.calculateAreaOfTrapezoid(10,20, 30)); */

// Area of Cube and RightCylinder
console.log(calculateAreaOfCube(3));
console.log(calculateAreaOfRightCylinder(10,40));
console.log(PI);



