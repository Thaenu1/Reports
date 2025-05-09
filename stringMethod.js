

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("text").innerHTML = text.length;
// console.log(text);


// //charAt() Method
// let Message ="HELLO WORLD";
// document.getElementById("Message").innerHTML = Message.charAt(0);
// console.log("Message");


//At()
// const name = "thaenuwin";
// console.log(name.at(2));


// String [ ]
// let text = "HELLO WORLD";
// console.log(text[0]);



// slice(start, end)
// substring(start, end)
// substr(start, length)



// String slice()
// let text = "Apple, Banana, Kiwi";
// console.log(text.slice(7, 13));
//Banana
// The method takes 2 parameters: start position, and end position (end not included).
// If a parameter is negative, the position is counted from the end of the string:


// let text = "Apple, Banana, Kiwi";
// console.log(text.slice(-12));
// //Banana kiwi


// let text ="Apple, Banana, Kiwi";
// console.log(text.slice(-12,-6));
// //Banana

// substring ()
// let str = "Grape, Banana, Kiwi";
// console.log(str.substr(7,6));
// //Banana

// let str1= "English , Math, Science";
// console.log(str1.substr(7));
// //, Math, Science

// let text = "Hello, world!";
// console.log(text.substring(7));
//  // "world!"


// toUpperCase()
// let text1 = "Hello World!";
// console.log(text1.toUpperCase());


// // toLowerCase()
// let text2= "Hello World!";       
// console.log(text2.toLowerCase());

// // concat()
// let t1 = "Hello";
// let t2= "World";
// let t3 = t1.concat(" ", t2);
// console.log("t3");

// // string.padStart(targetLength [, padString])
// let str = "5";
// console.log(str.padStart(3, "0")); 
// // "005"

// let str2 = "hello";
// console.log(str2.padStart(10));
//  // "      hello"

// let str3 = "42";
// console.log(str3.padStart(6, "*")); // "****42"

// let numb = 5;
// let result = numb.toString();
// console.log(result.padStart(4,0));
// //00004

// // padEnd()
// let value = "5";
// console.log(value.padEnd(4,"x"));
// //5xxx


// repeat ()
// Syntax: str.repeat(count)
// let text4 = "Hi! ";
// console.log(text4.repeat(3)); 
// "Hi! Hi! Hi! "


// replace ()
// str.replace(searchValue, newValue)
// let text5 = "I love cats";
// console.log(text5.replace("cat","dogs")); 
// // I love dogs


// // replace()
// // Syntax: regular expression + g flag
// let value="apple,banana,apple"
// console.log(value.replace(/apple/g, "orange"));
// "orange banana orange"
// /apple/ က Regular Expression
// g flag ဆိုတာက global replace ကို ပြုလုပ်ဖို့  
// apple ဆိုတဲ့စကားလုံးတွေအားလုံးကို "orange" နဲ့ အစားထိုး

// // replace all()
// // Syntax:string.replaceAll(searchValue, replaceValue)
// let sentence = "The sky is blue. Blue is a nice color.";
// console.log(sentence.replaceAll("Blue","Red"));  
// // "The sky is blue. Red is a nice color."



//split
// string.split(separator, limit);
// let str = "a,b,c,d";
// let result = str.split(",", 2);
// console.log(result); 
// ["a", "b"]
// Sperator မှာ comma,| ,  space, limit သုံးခွဲလိုရ


// // indexOf()
// // string.indexOf(searchValue, start);
// let str = "banana";
// console.log(str.indexOf("a",2)); 
// // 3 (index 2 နောက်က "a")


// includes()
// Syntax: string.includes(searchString, position); 
// Boolean တန်ဖိုးကို return ပြန်

// let str = "Hello world";
// console.log(str.includes("world"));
 // true



//  match()
// string.match(regexp);
// let str = "cat, bat, mat";
// console.log(str.match(/.at/g)); 
// ["cat", "bat", "mat"]


// String template 
//   ${expression} တွေပါ
let name = "John";
message = `hello,${name}`;
console.log(message);
 // "Hello, John!"

