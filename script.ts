
// 1. Calculate your age
var birthYear = 2000; // Replace with your birth year
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
console.log(`Your age is: ${age}`);

// 2. Area of a rectangle
var length = 5; // Example value
var width = 10; // Example value
var areaOfRectangle = length * width;
console.log(`Area of the rectangle: ${areaOfRectangle}`);

// 3. Area of a circle
var radius = 7; // Example value
var areaOfCircle = Math.PI * radius * radius;
console.log(`Area of the circle: ${areaOfCircle}`);

// 4. Area of a cube
var side = 4; // Example value
var areaOfCube = 6 * side * side;
console.log(`Area of the cube: ${areaOfCube}`);

// 5. Temperature conversion
var fahrenheit = 98; // Example value
var celsius = (fahrenheit - 32) * (5 / 9);
console.log(`${fahrenheit}F is equal to ${celsius.toFixed(2)}C`);
var reverseFahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius.toFixed(2)}C is equal to ${reverseFahrenheit}F`);

// 6. Convert seconds into minutes and seconds
var totalSeconds = 125; // Example value
var minutes = Math.floor(totalSeconds / 60);
var seconds = totalSeconds % 60;
console.log(`${totalSeconds} seconds is equal to ${minutes} minutes and ${seconds} seconds.`);

// 7. Calculate percentage
var totalMarks = 500; // Example value
var obtainedMarks = 450; // Example value
var percentage = (obtainedMarks / totalMarks) * 100;
console.log(`Percentage: ${percentage}%`);

// Increment and Decrement Operator Questions

// Q1
var a = 2;
var b = ++a * 2;
console.log(`Q1: b = ${b}`); // b = 6

// Q2
var x = 5;
var y = x-- + 2;
console.log(`Q2: y = ${y}`); // y = 7

// Q3
x = 3;
y = ++x + x++ + ++x;
console.log(`Q3: y = ${y}`); // y = 15

// Q4
var m = 2;
var n = ++m * m++ * --m;
console.log(`Q4: n = ${n}`); // n = 12

// Q5
var result;
a = 3;
b = 5;
result = ++a + b-- - a++ + --b;
console.log(`Q5: result = ${result}`); // result = 6

// Q6
m = 2;
n = 4;
var p = m++ + ++n - --m + n--;
console.log(`Q6: m = ${m}, n = ${n}, p = ${p}`); // m = 2, n = 4, p = 9

// Q7
a = 5;
b = 3;
var c = 2;
var d = 7;
result = ++a * (b-- + c) / --d;
console.log(`Q7: a = ${a}, b = ${b}, c = ${c}, d = ${d}, result = ${result}`); // a = 6, b = 2, c = 2, d = 6, result = 4

// Q8
m = 2;
n = 3;
var o = 4;
result = m++ * (--n + m) / (o-- - n);
console.log(`Q8: m = ${m}, n = ${n}, o = ${o}, result = ${result}`); // m = 3, n = 2, o = 3, result = 3
