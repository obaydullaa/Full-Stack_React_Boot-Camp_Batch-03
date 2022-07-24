/**
 * Title: Js for react start (23-jully-2022)
 * ===========================================
 * 
 * 1. Var, const, let
 * 2. Function declaration , arrow function and single line return
 * 3. Template string/literal
 * 4. Conditional and logical AND(&&)
 * 5. Array helper method (map, fileter, reduce)
 * 6. Destruring , rest, spread
 * 7. Promise, asunc await 
 * 
 */

// * 1. var, const let
//===========================

// var a = 7   // Dont use(to avoid unexpected error, bug)
// const b = 8 // We always use const
// let c = 9   // Some times use let ( basicaly  When decler or track value we use let ) 


//* 2. Function declaration , arrow function and single line return
//======================================================================

// Normal function 
// Function statement
// function sum(num1, num2) {  
//     return num1 + num2;
// }

// Function expression
// const sum = function (num1, num2) {
//     return num1 + num2;
// }

// Arro funcion
// const sum =  (num1, num2) => {
//     return num1 + num2;
// }

// const sum =  (num1, num2) => num1 + num2;

// const multiply = num1 => num1 * 10;


// console.log(multiply(10))


// * 3. Template string/literal
//===================================

// const firstName = 'obaydul';
// const lastName = 'islam';

// const fullName = firstName + ' ' + lastName
// Javasript ecpression can be written inside in curly braces
// statement - comane (;) ecpression - value or we write variable right side

// const fullName = `${firstName.toUpperCase()}  ${lastName.toUpperCase()}`

// console.log(fullName)


//* 4. Conditional and logical AND(&&)
// =======================================

//if-else statement
// const age = 19;
// const result = (age >= 18) ? 'You Can Vote' : 'You Can\'t Vote';

// console.log(result);

//logical && operator

// const a = age >= 15 && 'You are adult enogh'

// const b = age >= 20 || 'You are adult enogh'

// console.log(a);

// console.log(b);



//* 5. Array helper method (map, fileter, reduce)
//====================================================

const nums = [1, 2, 3, 4, 5]

function double(nums) {
//     const arr = [];
    // Imperative coding
    // for(let i = 0; i < nums.length; i++) {
    //     arr.push(nums[i] * 2)
    // }

    // declarative coding
    // for(let num of nums) {
    //     arr.push(num * 2)
    // }
    // return arr;

    return nums.map(num => {
        return num * 2
    })
}

console.log(double(nums))