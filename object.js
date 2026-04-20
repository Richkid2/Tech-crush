let obj = {
    name: "richard",
    age : 25,
    profession : "Developer",
}

let student = {
    name: "Abraham charles",
    age : 22,
    department : "computer science",
    isEnrolled : true,
};
console.log(student.name)

let employee = {
    name: "Tunde balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};

let newName = employee.name
let newRole = employee.role

const {name , salary} = employee
console.log(name)
console.log(salary)

let courses = {
    CSC401 : "Data Structure",
    CSC402 : "Algorithms",
    CSC403 : "Database Systems"
}

let {CSC401 : CSC400} = courses
console.log(CSC400)


let person = {
    name: "Amina",
    opay : true,
}
console.log(person) 
let {opay: palmpay, name : myName} = person
console.log(palmpay)
console.log(myName)

let profile = { name: "Ada", age: 24};

// copy and add new properties
let updatedProfile = {
    ...profile,
    city: "Abuja"
};

console.log(updatedProfile)

// const { nombre, ....rest } = {
//      nombre: "emeka",
//      age: 25,
//      city: "Lagos"
// };

// console.log(nombre); // "emeka"
// console.log(rest);
// // {age: 25, city: "Lagos"}

const user = {
    name: "Esther",
    password : "12345",
    isFemale : true,
    city : "Lagos",
    age : 30
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//for in
for (let key in user){
    console.log("these are the keys : " + key)
    console.log("these are the values : " + user[key])
}