let item1 = "milk" // without an array
let item2 = "milo"
let item3 = "rice"

let items = ["milk", "milo", "rice", 1, 2, 4, true] //with an array

console.log(items[0])
console.log(items.length)

//forEach
let fruits = ["apple", "banana", "orange", "grapes", "mango"]
let names = ["richard", "john", "saraj", "jane", "scott"]

names.forEach(function(name){
    console.log("TECH_CRUSH_2026_COHORT_6" + name) //name function
})

fruits.forEach(function(fruit){
    console.log("i eat " + fruit)
})

let scores = [90, 80,70, 60, 55]
let newScores = scores.map(student => {
    console.log("as a good teacher, i decided to add 5 marks to all students")
     return student + 5
}) //arrow funtion
console.log(newScores) 

let students = ["esther", "john", "smith", "abigail", "jeffery"]
let nameTag = students.map(function(tag){
    return "TECH_CRUSH_2026_COHORT_6 " + tag
})
console.log(nameTag)

//filter method
let jambScores = [200, 250, 300, 150, 280, 180, 160, 290, 100] //arrow function
let passed = jambScores.filter(score=>{
return score >= 200
})
console.log(passed)

let ages = [18, 24, 15, 30, 20, 35, 40]  //name function
let adults = ages.filter(function(age){
    return age >= 18
})
console.log(adults) 

//find method
const studentName = ["john", "john", "ada", "doe", "smith", "bola", "daniel"]
const found = studentName.find((name1)=>{
    return name1 === "john"
})
console.log(found)

//reduce method means return one single output from list of arrays
let cartPrices = [1500, 800, 2200, 450, 1000, 750]
let total = cartPrices.reduce(function(accumulator, currentPrice){
    return accumulator + currentPrice;
}, 0); //accumulator, current value, initial value

console.log(total);

//arrow function version
let grandTotal = cartPrices.reduce((acc, price)=>{
    return acc + price;
},0);
console.log(grandTotal);

//push, pop, shift, unshift
let colors = ["red", "blue", "green"];
colors.push("yellow")

let lastColor = colors.pop()
console.log(colors);
console.log(lastColor);

let firstColor = colors.shift();
console.log(colors)
console.log(firstColor)

let newLength = colors.unshift("purple");
console.log(colors);
console.log(newLength);