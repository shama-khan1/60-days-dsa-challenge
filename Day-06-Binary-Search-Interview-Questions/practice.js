/*
==========================================
Day 06
Binary Search Interview Questions
Topic : Last Occurrence
==========================================
*/

function lastOccurrence(arr, target) {

    let low = 0;
    let high = arr.length - 1;
    let ans = -1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            ans = mid;
            low = mid + 1;
        }
        else if (arr[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return ans;
}

// Test Case 1
console.log(lastOccurrence([10, 20, 20, 20, 30, 40], 20));
// Expected Output: 3

// Test Case 2
console.log(lastOccurrence([1, 1, 1, 1, 1], 1));
// Expected Output: 4

// Test Case 3
console.log(lastOccurrence([10, 20, 30, 40], 30));
// Expected Output: 2

// Test Case 4
console.log(lastOccurrence([10, 20, 30, 40], 50));
// Expected Output: -1

// Test Case 5
console.log(lastOccurrence([5], 5));
// Expected Output: 0

// Test Case 6
console.log(lastOccurrence([5], 10));
// Expected Output: -1