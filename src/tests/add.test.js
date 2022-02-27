const add = (a, b) => a + b;

test("should add two number", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

const generateGreeting = (name = "Anonymous") => `Hello ${name}!@`;
test("should generate greeting from name", () => {
  const result = generateGreeting("Bola");
  expect(result).toBe("Hello Bola!@");
});
test("should generate greeting from no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!@");
});
