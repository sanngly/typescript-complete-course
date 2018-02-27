//A=2πrh+2πr2

export const PI = 3.14;

export function calculateAreaOfRightCylinder(radius: number, height: number) : number {
    return (2 * PI * radius * height) + (2 * PI * (radius * radius));
}
