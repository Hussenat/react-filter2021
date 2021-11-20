const add=(a, b)=>a+b;

// test() its a global method form jest framework.
// pass in two argument onto test method 1st argument is the test title and 2nd argument is the block of code which will be executed when running the jest suite

// test case 1
test("should add two numbers", ()=>{
    const result = add(2,3);
})

// test("should add two numbers", ()=>{
//     const result = add(3, 4);
//     // using if statement as assertion -> means check if a statement is true or not
//     if(result !== 7){
//         throw new Error (`You added 3 and 4. the result was ${result}. Expect 7`) 
//     }
// })

// test("should add two numbers", ()=>{
//     const result = add(3, 4);
//     // using expect() global method give to us by jest framework
//     expect(result).toBe(7)
// })

// -how to run jest in watch mode on the command line -- --watch

// Challenge Area
// const generateGreeting = (name="Anonymous") => `Hello ${name}!`;
// create two test cases with the following titles
// "should generate greeting from name"
// "should generate greeting from no name"

const generateGreeting = (name="Anonymous") => `Hello ${name}!`;
// const generateGreeting = (name="") => `Hello ${name}!`;

test("should generate greeting from name", ()=>{
    const myName = generateGreeting("Jola")
    expect(myName).toBe("Hello Jola!")
})

test("should generate greeting from no name", ()=>{
    const noName = generateGreeting("Anonymous")
    expect(noName).toBe("Hello Anonymous!")
})