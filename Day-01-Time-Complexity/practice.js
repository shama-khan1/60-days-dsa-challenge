// Day 1 - Time Complexity

// O(1)
let arr = [10, 20, 30];
console.log(arr[1]);

// O(n)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// O(n²)
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

// O(log n)
for (let i = 1; i < 32; i *= 2) {
    console.log(i);
}