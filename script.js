//დავალება პირველი
let add = (a, b) => a + b;

console.log(add(5, 6));

//დავალება მეორე
function anonymous (a, b) {
    return a - b;
}
console.log(anonymous(8, 3));

//დავალება მესამე
let isEven =(num) => num % 2 === 0; 
console.log(isEven(21));

//დავალება მეოთხე
function multyplayNumber (a, b, callback){
    return callback(a, b);
}

function multplay (x, y){
    return x * y;
}

console.log(multyplayNumber (10, 10, multplay));


//დავალება მეხუთე
let number = (num) => {
    if (num > 0){
        console.log("your number is positive ")
    } else {
        console.log("your number is negative");
    }
}

//დავალება მეექვსე

let double = (num) => {
    return num * 2;
}
console.log(double(25));

// //დავალება მეშვიდე
function doublee(a, callback){
    return callback(a);
}
function dob(x){
    return x * x;
}
console.log(doublee(100,dob));


//დავალება მერვე
let dividing = (number) => {
    if(number % 3 === 0){
        console.log("is dividing on 3 is 0")
    }else{
        console.log(`your remainder when divided is ${number % 3} `)
    }
}
dividing(19);

//დავალება მეცხრე

function chek (a, callback){
    return callback(a);
}
function chekNum (x){
    return x % 2 === 0;
}
console.log(chek(11, chekNum));



//დავალება მეათე
let numberCub = (n) => n ** 3;
console.log(numberCub(5));

//დავალება მეთერთმეტე
function twoNumberMult(a, b, callback){
    return callback(a, b);
}

function doubleNumber (x, y){
    return x * y;
}
console.log(twoNumberMult(10, 2, doubleNumber));



//დავალება მეთორმეტე
let isBiggerThanZero = (n) => {
    if(n > 0) {
        console.log("your number is bigger than zero");
    }else {
        console.log("your number is less than zero");
    }
}
isBiggerThanZero(-1);

// //დავალება მეცამეტე
let num = (n) => {
    return n / 2;
} 
console.log(num(10));

//დავალება მეთოთხმეტე

function plus (a, b, callback){
    return callback(a, b);
}
function plusNumber(x, y){
    return x + y;
}
console.log(plus(10, 2, plusNumber));

// //დავალება მეთხუთმეტე
let square = (num) => num * num;
console.log(square(3));