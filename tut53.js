console.log("this is tutorial 53");

function greet(name,greetText="greeting from javascript"){
    console.log(greetText + " " + name), greetText
    console.log(name + "is a good boy");
}
function sum(a,b,c){
    let d = a+b+c;
    return d;
    // console.loge("function is return");                    this line will never execute(unreachable code)
}
let name1 = "harry" 
let name2 = "sohan"
let name3 = "rohan"
let name4 = "mohan"
let name5 = "sagar"
let greetText = "good morning"
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
greet(name5);
// let returnval = greet(name1);
// console.log(returnval)

let returnval = sum(1,2,3);
console.log(returnval)
// console.log(name1 + "is a good boy")
// console.log(name2 + "is a good boy")
// console.log(name3 + "is a good boy")
// console.log(name4 + "is a good boy")
// console.log(name5 + "is a good boy")