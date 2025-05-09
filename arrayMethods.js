// // Array length ()
// // let fruits = ["apple", "banana", "orange"];
// // console.log(fruits.length); 
// // Output: 3
// //fruits array မှာ item 3 ခုရှိလို .length က 3 ကို return ပြန်


// // Array to string()
// // Syntax: array.toString()
// let colors = ["red", "yellow", "orange"];
// console.log(colors.toString());
//  // Output: "red,yellow,orange"

// let nested = [1, [2, 3], 4];
// console.log(nested.toString()); 
// // Output: "1,2,3,4"


// // Array join()
// // Syntax: array.join(separator)
// const words = ['Hello', 'world'];
// console.log(words.join(' ')); 
// // "Hello world"

// //Empty space သုံးခြင်း
// const chars = ['A', 'B', 'C'];
// console.log(chars.join('')); // "ABC"



// // pop()
// // Syntax: array.pop()
// const cars = ['bmw','suzuki'];
// console.log(cars.pop());    // ["apple", "banana"]

// // push()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("Kiwi"));
// //Banana,Orange,Apple,Mango,Kiwi
// //နောက်ဆုံးမှာထည့်


// // shift ()
// //array ထဲက 1st element ဖျက်
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift());
// //Orange,Apple,Mango



// // unshift ()
// const fruits = ["Orange", "Apple", "Mango"];
// console.log(fruits.unshift("Lemon"));
// //Lemon,Orange,Apple,Mango
// // unshift() က ‌အရှေ့မှာထည့်

// // delete ()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(delete fruits[0]);
// //"Orange", "Apple", "Mango"

// // concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// console.log("myGirls.concat(myBoys)");
// //Cecilie,Lone,Emil,Tobias,Linus

// const myArr = [[1,2],[3,4],[5,6]];
// console .log(myArr.flat());
// //1,2,3,4,5,6

// // flat()
// Syntax: array.flat(depth)
// const arr = [1, 2, [3, 4]];
// console.log(array.flat()); 
// // [1, 2, 3, 4]

// // splice()
// // syntax: array.splice(start, deleteCount, item1, item2, ...)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// //Banana,Orange,Lemon,Kiwi,Apple,Mango
// //The splice() method adds new elements to an array:

// // Syntax: array.slice(start, end)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1));
// //Orange,Lemon,Apple,Mango
// // element 1ကဖြုတ်


// // IndexOf ()
// Syntax: array.indexOf(searchElement, fromIndex)
// const fruits = ['apple', 'banana', 'cherry', 'banana'];
// console.log(fruits.indexOf('banana', 2)); 
// // 3 (index 2 ကစပြီး banana ကို ရှာ)

// // Includes()
// Syntax: array.includes(search-item)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"));
//  // true



// // find ()
// // array.find(callback(element, index, array), thisArg)
// const users = [
//   { id: 1, name: "Aye Aye" },
//   { id: 2, name: "Mg Mg" },
//   { id: 3, name: "Hla Hla" }
// ];

// const result = users.find(user => user.id === 2);

// console.log(result);
// // Output: { id: 2, name: "Mg Mg" }