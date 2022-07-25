/**
 * Title: Js for react start (23-jully-2022)
 * ===========================================
 * 
 * 1. Var, const, let
 * 2. Function declaration , arrow function and single line return
 * 3. Template string/literal
 * 4. Conditional and logical AND(&&)
 * 5. Array helper method (map, filter, find)
 * 6. Destructuring , rest, spread
 * 7. Promise, async await 
 * 8. Class
 * 
 */

/**
 * * 1. var, const let
 */

// var a = 7   // Don't use(to avoid unexpected error, bug)
// const b = 8 // We always use const
// let c = 9   // Some times use let ( basically  When dealer or track value we use let ) 


/**
 * 2. Function declaration , arrow function and single line return
 */

// Normal function 
// Function statement
// function sum(num1, num2) {  
//     return num1 + num2;
// }

// Function expression
// const sum = function (num1, num2) {
//     return num1 + num2;
// }

// Arrow function
// const sum =  (num1, num2) => {
//     return num1 + num2;
// }

// const sum =  (num1, num2) => num1 + num2;

// const multiply = num1 => num1 * 10;


// console.log(multiply(10))


/**
 * 3. Template string/literal
 */

// const firstName = 'obaydul';
// const lastName = 'islam';

// const fullName = firstName + ' ' + lastName
// Javascript expression can be written inside in curly braces
// statement - command (;) expression - value or we write variable right side

// const fullName = `${firstName.toUpperCase()}  ${lastName.toUpperCase()}`

// console.log(fullName)


/**
 * 4. Conditional and logical AND(&&)
 */

//if-else statement
// const age = 19;
// const result = (age >= 18) ? 'You Can Vote' : 'You Can\'t Vote';

// console.log(result);

//logical && operator

// const a = age >= 15 && 'You are adult'

// const b = age >= 20 || 'You are adult'

// console.log(a);

// console.log(b);



/**
 * 5. Array helper method (map, filter, reduce)
 */

// map

// const nums = [1, 2, 3, 4, 5]

// function double(nums) {
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

//     return nums.map(num => {
//         return num * 2
//     })
// }

// console.log(double(nums))


// find ( find return immediate result not multiple result)
// function findElm (recArr, searchelm) {
//     return recArr.find((elm) => {
//         // condition
//         return elm > searchelm
//     })
// }
// const nums = [1, 2, 3, 4, 5]

// console.log(findElm(nums, 4));

// filter ( filter return all result not immediate result)
// function filterElm (recArr, searchelm) {
//     return recArr.filter((elm) => {
//         // condition
//         return elm > searchelm
//     })
// }
// const nums = [1, 2, 3, 4, 5]

// console.log(filterElm(nums, 2));


/**
 * 6. Destructuring , rest, spread
 */

// Note: spread and rest operator modified original array.

// Destructuring 
// const person = {
//     firstName: 'Obaydul',
//     lastName: 'Islam',
//     age: 25,
// }


// normally access
// console.log(person.fistName + ' ' + person.lastName)

// const {firstName, age, lastName} = person

// console.log( age, lastName, firstName )

// rest operator
// const {firstName, ...restValues} = person
// console.log(firstName)
// console.log(restValues)


// spared operator
// const newPersonObj = {
//     ...person,
//     profession: 'Programmer',
// }

// console.log(newPersonObj)

// const arr = [1, 2, 3, 4]
// const [num1, num2, ...restArr] = arr
// console.log(restArr)

// const newArr = [...arr, 5]
// console.log(newArr)

// function viewPerson({firstName, lastName, age}){
//     console.log(firstName, lastName, age)

// }

// const person = {
//     firstName: 'Obaydul',
//     lastName: 'Islam',
//     age: 25,
// }

// viewPerson(person)

/**
 *  * 7. Promise, async await 
 * ================================
 * 
 * Data Process oR Deal 3 ways
 *  1. Callback, 2, Promise. 3. Async
 * 
 */

// Pending
// Resolved
// Rejected

// Promise way
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))
 
//   // Async await 
//   async function run() {
//    try{
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await res.json();
//     console.log(data)
//    }catch(err) {
//     console.log(err)
//    }

//   }
//  run();

// Follow this code (Miraz Vai)
///==================================
// (() => {
  /**
   * Promise with Error handling
   * 
   */

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   // Pending State
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error("DATA Loaded failed while Fetching ...");
    //   })
    //   // Resolved State
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   // Rejected State
    //   .catch((error) => {
    //     console.log(error);
    //   });


  /**
   * async await with Error handling
   */

    // async function run() {
    //   try {
    //     let response = await fetch(
    //       "https://jsonplaceholder.typicode.com/todos/1"
    //     );
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     let data = await response.json();
    //     console.log(data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // run();
// })();


/**
 * 8. Class
 */

class Person {
  //filed/property
  // name = 'obaydul';
  // age = 24;

  constructor(mName, mAge) {
    console.log(mName, mAge)
    this.name = mName
    this.age = mAge
  }

  //method
  showInfo(){
    return this.name + '-' + this.age
  }
}

// const person = new Person('islam', 27)
// console.log(person)
// console.log(person.name)
// console.log(person.age)
//   console.log(person.showInfo()

class Student extends Person{
  constructor(name, age, course) {
    super(name, age)
    this.course = course;
  }

  showProfInfo() {
    
    return super.showInfo() + ' - ' + this.course 
  }
}

const student = new Student('Razue', 26, 'React Student')
console.log(student)
console.log(student.showInfo())

console.log(student)