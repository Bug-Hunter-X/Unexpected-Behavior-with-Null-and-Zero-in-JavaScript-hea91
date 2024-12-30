function foo(a, b) {
  if (a === null || b === null) {
    return NaN; //Improved handling of null
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: NaN
console.log(foo(5, null)); // Output: NaN
console.log(foo(5, 5)); // Output: 10