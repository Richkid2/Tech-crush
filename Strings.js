//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)

let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

let str = "  Hello, World  "
let trimmedstr = str.trim()
let frontTrimmedstr = str.trimStart() //camel casing
let endTrimmedstr = str.trimEnd()
console.log(trimmedstr)
console.log(frontTrimmedstr)
console.log(endTrimmedstr)

let signupName = " Esther"
let signinName = "Esther"

if((signupName.trim()) === signinName){
    console.log("Welcome back, Esther")
}
else {
    console.log("Invalid login information")
}

//indexOf and includes
let user_email = "richardowoyemi224@techcrush@gmail.com"
let email_index = user_email.indexOf("@") //return datatype : number
console.log(email_index)

let email_contains_at = user_email.includes("@") //return datatype : boolean
console.log(email_contains_at)


//startsWith and endsWith
let userName = "techcrush Richard 6"
let starts = userName.startsWith("techcrush") //returns a boolean
console.log(starts)

let ends = userName.endsWith("6")
console.log(ends)


//slice and substring
let testString = "my name is Richard!"
let slicedString = testString.slice(0, 10)
let substringString = testString.substring(0, 10)
console.log(slicedString)
console.log(substringString)

//replace and replaceAll
let text = "Richard is a techie. Richard loves coding and Richard loves teaching"
let replacedText = text.replace("Richard", "He")
let replacedAllText = text.replaceAll("Richard", "He")
console.log(replacedText)
console.log(replacedAllText)

//split
const sentence = "LANGUAGES: Javascript, Python, Java, c++"
let splitSentence = sentence.split(" ") // return datatype: array
console.log(splitSentence)

let example = "she is a girl, she is a teacher, she is eating"
console.log(example.split(",")) 