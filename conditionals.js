// if-else statements
let userAge = 20;
if (userAge >= 18){
    console.log("Welcome to club")
}
else{ 
    console.log("sorry, you are not allowed to  enter")
}

let gender = "non binary"
if (gender === "female"){
    console.log("welcome to the female sections")
}
else if (gender === "male"){
    console.log("welcome the male section")
}
else if (gender === "others"){
    console.log("welcome to others section")
}
else{
    console.log("gender not found")
}

let username = "richard"
let password = "Razor1234"
if (username === "richard" && password === "Razor1234"){
    console.log("Login succesful")
}
else if (username === "richard" || password === "Razor1234"){
    console.log("Username or password is correct")
}
else{
    console.log("Login failed")
}

let voterName = "Richard abraham"
let voterAge = 17
if (voterAge >= 18){
    console.log("you are a valid voter")
}
else{
    console.log("you are not a qualified voter")
}