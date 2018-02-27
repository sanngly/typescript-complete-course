namespace MyMath {
    export namespace Circle {
        const PI = 3.14;
        export function calculateAreaOfCircle(radius: number) : number {
            return PI * (radius * radius);
        }
    }

    export namespace Trapezoid {
        export function calculateAreaOfTrapezoid(base_a: number, base_b: number, height: number) : number {
            return ((base_a * base_b) / 2 ) * height;
        }
    }

    export function calculateAreaOfRectangle(length: number, breadth: number) : number {
        return length * breadth;
    }
}