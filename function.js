
// function greeting(){
//     console.log("hi");
// }
// greeting();


// function getName(name){
//     console.log(name);
// }
// getName("code lab");




function sum(num1,num2){
    let result= num1+num2;
    console.log(result);
}
sum(100,200);


// function sayHello(name) {
//     console.log("Hello, " + name + "!");
//   }
//   sayHello("Aung Aung"); // Output: Hello, Aung Aung!




//Nested function
// function outerFunction(name) {
//     function innerFunction() {
//         console.log("Hello " + name);
//     }
//     innerFunction(); 
// }
// outerFunction("Aung Aung"); 
// -----------------------------------

// inner function ကို return ပြန်ပေးခြင်း
function multiplyBy(x) {
    return function(y) {
        return x * y;
    }
}
const double = multiplyBy(2);
console.log(double);

console.log(double(5)); // Output: 10
// ---------------------------------------


    // //callback function
    // function greet (name,callback){
    //     console.log("Hi"+name);
    //     callback();
    // }
    // function sayBye (){
    //     console.log("Bye");
    // }
    // greet("Alice",sayBye);
    // // -------------------------------------


    // const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
    // const fruitCount = fruits.reduce((accumulator, fruit) => {
    //         console.log(accumulator);
    //         console.log(fruit)
    //         console.log(accumulator[fruit]);
    //     accumulator[fruit] = (accumulator[fruit] || 0) + 1;
    //     return accumulator;
    //     }, {});
    // -----------------------------------------------------

    //arrow function
    let arrowFun = (name) => {
        console.log("hi"+ name);
    }
    arrowFun("Thaenuwin");
    // ------------------------------------------


//map function
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]



// const users = [
//     { name: "Aung", age: 25 },
//     { name: "Mya", age: 30 }
//   ];
  
//   const names = users.map(user => user.name);0
//   console.log(names); // Output: ["Aung", "Mya"]
  

  const users = [
    { name: "Aung", age: 25 },
    { name: "Mya", age: 30 }
  ];
  
  const age = users.map(function(user) {
    return user.age;
  });
//   console.log(age); // Output: ["25", "30"]
  

