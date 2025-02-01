# JavaScript Null Comparison Bug

This repository demonstrates a common yet subtle bug in JavaScript related to null comparisons. The bug lies in the function's incomplete handling of null and undefined values.

## Bug Description

The `foo` function intends to return 0 if either `a` or `b` is null, and the sum of `a` and `b` otherwise. However, it only explicitly checks for null, not undefined.  This creates unexpected behavior when one or both inputs are undefined.

## Solution

The solution involves explicitly checking for both `null` and `undefined` using the loose equality operator (`==`) or the strict equality operator (`===`).  The strict equality operator (`===`) is generally preferred because it provides more precise comparisons.

## How to reproduce
1. Clone this repository
2. Run `bug.js` in a JavaScript environment (e.g., node.js, browser's console).
3. Observe the output and notice that passing `undefined` unexpectedly returns `NaN` instead of 0.