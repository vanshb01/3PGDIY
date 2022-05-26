/*
Day 3: Exercises
Exercises: Level 1
Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

Check if type of '10' is equal to 10

Check if parseInt('9.8') is equal to 10

Boolean value is either true or false.

Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
*/

const firstName = "Vansh"
const lastName = "Bansal"
const country = "India"
const city = "Ghaziabad"
const age = 21;
const isMarried = false;
const year = new Date().getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof year);


console.log("10" === 10)
console.log(parseInt(9.8) === 10);


console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`month:${date.getMonth()}`);
console.log(`date:${date.getDate()}`);
console.log(`day:${date.getDay()}`);
console.log(`hour:${date.getHours()}`)
console.log(`minutes:${date.getMinutes()}`)
console.log(`second:${date.getSeconds()}`);


/*
Exercises: Level 2
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

Calculate the slope, x-intercept and y-intercept of y = 2x -2

Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

Compare the slope of above two questions.

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
If the length of your name is greater than 7 say, your name is long else say your name is short.

Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

*/
var Number;

let base = Number(prompt("enter base of the triangle"));
let height = Number(prompt("enter height of the triangle"));
let area = 0.5 * base * height;
console.log(`the area of the triangle is ${area}`);


let sideA = Number(prompt("enter side A of the triangle"));
let sideB = Number(prompt("enter side B of the triangle"));
let sideC = Number(prompt("enter side C of the triangle"));
let perimeter = sideA + sideB + sideC;
console.log(`the perimeter of the triangle is ${perimeter}`)


let length = Number(prompt("enter length of the rectangle"));
let width = Number(prompt("enter width of the rectangle"));
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(`the area of the rectangle is ${areaOfRectangle} while the perimeter is ${perimeterOfRectangle}`)


const pi = 3.14
let radius = Number(prompt("enter radius of a circle"));
let areaOfCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`the area of the circle is ${areaOfCircle} while the circumference is ${circumference}`)

let xint=Number(prompt("enter x intercept"));
let yint=2*xint-2;
console.log(` x intercept is ${xint} and y intercept is ${yint}`);
let x1=Number(prompt("enter x1 "));
let x2=Number(prompt("enter x2 "));
let y1=Number(prompt("enter y1 "));
let y2=Number(prompt("enter y2 "));
let slope=(y2-y1)/(x2-x1);
console.log(`slope is ${slope}`);


let hours = Number(prompt("enter your hours"));
let rate = Number(prompt("enter your rate"));
let pay = hours * rate;
console.log(`your pay is ${pay}`)



const fName = "vansh"
const lName = "bansal"
fName.length > lName.length ? console.log(`your first Name is greater than your family name`) : console.log(`your last name is greater than your name`);


let agey = Number(prompt("what is your age"));
if (agey > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${agey}, you will be allowed to drive after ${18 - agey} years`)
}


let secondsInseconds = 60;
let secondsInHour = secondsInseconds * 60;
let secondsInDay = secondsInHour * 24;
let secondsInYear = secondsInDay * 365;
let yearsLive = Number(prompt("how many years have you live?"));
let secondsOld = yearsLive * secondsInYear;
console.log(`you are ${secondsOld} seconds olds`)

let datey = new Date();
let YYYMMDD = `${datey.getFullYear()}-${datey.getMonth()}-${datey.getDate()} ${datey.getHours()}-${datey.getMinutes()}-${datey.getSeconds()}`
let DDMMYYYY = `${datey.getDate()}-${datey.getMonth()}-${datey.getFullYear()} ${datey.getHours()}-${datey.getMinutes()}-${datey.getSeconds()}`
let DdMmYYy = `${datey.getDate()}/${datey.getMonth()}/${datey.getFullYear()} ${datey.getHours()}-${datey.getMinutes()}-${datey.getSeconds()}`
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);






