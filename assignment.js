const customerName = "Richard";
const customerAge = 25;
const bookTitle = "Behold the sun";
let bookPrice = 2000
let quantity = 4;
const isStudent = true

let totalprice = bookPrice * quantity;
let isAdult = customerAge >= 18;
let buyingManyBooks = quantity > 3;
let isBookFiveThousand = bookPrice === 5000;

// use a Non-Primitive Data Type 
customerOrder = {
    customerName: "Richard",
    bookTitle: "Behold the sun",
    quantity: 4,
    totalprice: bookPrice * quantity
}

console.log("customerName: ", customerName);
console.log("totalprice: ", totalprice);
console.log("Is Customer an Adult?: ", isAdult);
console.log("Buying More Than 3 Books?: ", buyingManyBooks);
console.log("Is Book Price 5000?: ", isBookFiveThousand);