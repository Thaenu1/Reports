
// //Boolean to String
// let boolval=true;

// let st1=String(val);
// let st2=val.toString();
// let st3=`${val}`;
// console.log(st1,st2,st3);


// ---------------------------
// //Boolean to Number
// let boolvalue=false;

// let num1=Number(boolvalue);
// let num2=boolvalue ? 1 : 0;
// console.log(num1,num2);

// ----------------------------
// //Boolean to object
// let boolVal = true;

// let obj = Object(boolVal);

// console.log(obj);           // [Boolean: true]
// console.log(typeof obj);    // "object"


//----------------------------

//Boolean to array
//1. Boolean တန်ဖိုးကို Array ထဲထည့်ခြင်း

// let boolVal = true;

// let arr1 = [boolVal]; 
// console.log(arr1); // [true]

// let arr2 = Array.of(boolVal); 
// console.log(arr2); // [true]

// let arr = boolVal ? [1] : [];
// console.log(arr);
// // ----------------------------


// //change array to string
// let fruits=['mango','apple'];
// let newString= fruits.toString()
// console.log(newString);

// //change string to array
// let Message="Myanmar language"/"English language"/"Japan language";
// let newArray= Message.split("/")
// console.log(newArray);

//object 6789
let obj1={
    name:"aung aung",
    age:23,
}
let obj2={...obj1};
obj2.email="thaenuwin11@gmail.com";
obj1.email="thaenuwin62@gmail.com";
console.log(obj1);
console.log(obj2);

let str1="orange";
let str2=str1;
str2="mango";
console.log(str1);
console.log(str2);




