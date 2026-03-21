1. Difference between var, let, and const

var :-
      i. Old way (before ES6)  
     ii. Function scoped
    iii. Can be re-declared and updated



let :-
      i. Block scoped { }
     ii. Can be updated but NOT re-declared


const :-
      i. Block scoped
     ii. Cannot be updated or re-declared


///////////////////////////////////////////


2. What is the Spread Operator ...?

Used to expand or copy values (arrays/objects).Useful for copying & merging

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
output: [1, 2, 3, 4]

const obj1 = { name: "Mahim" };
const obj2 = { ...obj1, age: 20 };
output: { name: "Mahim", age: 20 }


///////////////////////////////////////////


3. Difference between map(), filter(), forEach()


map() :-
      i. Returns a new array
     ii. Transforms data

const nums = [1,2,3];
const doubled = nums.map(n => n * 2);
output:- [2,4,6]


filter():-
      i. Returns a new array
     ii. Selects items based on condition

const nums = [1,2,3];
const big = nums.filter(n => n > 1);
output:- [2,3]


forEach():-
      i. Does NOT return anything
     ii. Just loops

nums.forEach(n => console.log(n));


///////////////////////////////////////////


4. What is an Arrow Function?

Shorter way to write functions

Normal way:-
function add(a, b) {
  return a + b;
}

Arrow way:-
const add = (a, b) => a + b;


///////////////////////////////////////////


5. What are Template Literals?

Used to write strings easily with variables

const name = "Mahim";
const msg = `Hello ${name}`;

Features:
       i. Use backticks `
      ii. Supports multi-line
     iii. Embed variables with ${}


///////////////////////////////////////////