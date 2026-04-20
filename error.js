// console.log(add)

//refrence error

//console.log(add)

//let age = 25
// console.log(age.length())

try {
    // code that might fail goes here
    let result = 10 / 0;
    undefinedFunction(); // this will cause an error!
    console.log("This line will NOT run.");
} catch (error) {
    // this runs only if something goes wrong
    console.log("An error occurred: " + error.name, error.message);
}

console.log("The program continues here.");


try{
let age = 24
console.log(age.length())
}catch(error){
    console.log("An error occurred: " + error.message);
}

function loadUserData(userId) {
    console.log("starting to load data...");
    try {
        if (!userId.startswith("BAD")) {
            throw new Error("User ID must start with BAD");
        }
        console.log("Data loaded for user: " + userId);
    } catch(error) {
        console.log("Failed: " + error.message);
    } finally{
        console.log("Loading complete. Closing connection."); // always runs
    }
}

loadUserData("BAD-1234"); 