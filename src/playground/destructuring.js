// - open webpack.config.js then change the entry point from
// entry:"./src/playground/redux-101.js", to
// entry:"./src/playground/destructuring.js",
// restart dev-server
// console.log("destructuring.js")

const person = {
    // name: "Jola",
    age: 20,
    location: {
        city: "Lagos Island",
        temp: 32,
    }
}

// we can print the object property like this
// console.log(`${person.name} is ${person.age} years old.`)
// It's 30c in Lagos Island.
// console.log(`It's ${person.location.temp}oc in ${person.location.city}.`) 

// Alternative
// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age}`)

// const temp = person.location.temp;
// const city = person.location.city;
// console.log(`It's ${temp}oc in ${city}`)

// Object Destructing means converting object properties into variable for the purpose of easy access.
// const { name, age } = person
// console.log(`${name} is ${age}`)
// const { temp, city } = person.location
// console.log(`It's ${temp}oc in ${city}`)

// Changing the local destructing variables
// const { temp: temperature, city } = person.location
// console.log(`It's ${temperature}oc in ${city}`)

// Creating default value with changing of local destructing variable
// const { name: firstName = "Aramijola", age } = person
// console.log(`${firstName} is ${age}`)

// Challenge Area
const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        // name: "Pen",
    }
}
// Print out console.log(publisherName) using object destructuring
// Add default value on the local destructuring variable called Self-Published if there is no publisher name

// const { name: publisherName = "Self-Published" } = book.publisher
// console.log(publisherName)

// ES6 Array destructing
// Array destructing means converting an array item or element into variable for the purpose of reuseability
const address = [
    "22 Koilo Street",
    "Lagos Island",
    "Lagos State",
    "Nigeria",
    "+123"
]

// traditional way to access array item or element
// console.log(`You are in ${address[1]}, ${address[2]}`)

// const city = address[1];
// const state = address[2];
// console.log(`You are in ${city}, ${state}`)

// Using Array destructing
const [ street, city, state, country, zip] = address; //matching the local variable with its position
console.log(`You are in ${city}, ${state}, with zip code of ${zip}`)

// challenge area
const item = ["coffee(hot)", "N100.00", "N200.00", "N300.00"]
// Print out console.log (`A medium coffee(hot) costs N200.00`)
// Using array destructuring to print out the first item, second item and last item in the array of string.

const [drink, amount1, amount2, amount3] = item;
console.log(`A medium ${drink} costs ${amount2}`)
console.log(`A high ${drink} costs ${amount3}`)

// Refactoring and Organizing
// -Open webpack.config.js to switch the entry point from
// entry:"./src/playground/destructuring.js",
// entry:"./src/playground/redux-101.js", to
// restart dev-server