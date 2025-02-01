function foo(a, b) {
  if (a == null || b == null) {
    return 0; 
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3
console.log(foo(undefined, 1)); // Output: 0
console.log(foo(1, undefined)); // Output: 0