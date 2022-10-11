let age: number = 20;
let speed: string =  'fast';
let hasName: boolean = false;

let nothigMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'yellow'];
let ages: number[] = [24, 26, 10];
let truths: boolean[] = [false, true, false]

// classes
class Person {

}

let firstPerson: Person = new Person()

// Object literal
let point: {x: number; y: string} = {
    x: 20,
    y: '100'
}

// function

const logNumber: (j: number) => void = (j: number) => {
    console.log(j)
}

// when to use annotation
// Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json)
console.log(coordinates)


// when we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true
    }
}