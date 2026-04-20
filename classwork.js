let str = "coding is fun"
//extract the word coding
let word = str.slice(0, 6)
console.log(word)
let fun = str.substring(10, 13)
console.log(fun)
console.log(str.slice(7, 9)) 

//challenge 2
const colors = "red, green, blue, yellow"
const comma = colors.split(",")
console.log(comma)
const joined = comma.join(" - ")
console.log(joined)

console.log("richard abraham charles".split(' ').join("-"))

//challenge 3
const url = "/api/v1/users";
const slash = url.split("/")
console.log(slash[2])

//chalenge 4: extract richard
const matricNumber = "TECHCRUSH-RICHARD-2026"
const splitMartic = matricNumber.split("-")
console.log(splitMartic[1]) 