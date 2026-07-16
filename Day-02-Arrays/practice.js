// =======================================
// Day 2 - Arrays
// 60 Days DSA Challenge
// Language: JavaScript
// =======================================

// Creating an Array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// ---------------------------------------
// Access - O(1)
// ---------------------------------------

console.log("Element at index 2:", arr[2]);

// ---------------------------------------
// Update - O(1)
// ---------------------------------------

arr[2] = 100;

console.log("After Update:", arr);

// ---------------------------------------
// Push - O(1)
// ---------------------------------------

arr.push(60);

console.log("After Push:", arr);

// ---------------------------------------
// Pop - O(1)
// ---------------------------------------

arr.pop();

console.log("After Pop:", arr);

// ---------------------------------------
// Unshift - O(n)
// ---------------------------------------

arr.unshift(5);

console.log("After Unshift:", arr);

// ---------------------------------------
// Shift - O(n)
// ---------------------------------------

arr.shift();

console.log("After Shift:", arr);

// ---------------------------------------
// Traversal - O(n)
// ---------------------------------------

console.log("Traversal:");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ---------------------------------------
// Final Array
// ---------------------------------------

console.log("Final Array:", arr);