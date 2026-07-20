// ==========================================
// Day 4 - Binary Search
// 60 Days DSA Challenge
// ==========================================

// Binary Search Function

function binarySearch(arr, target) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

// Test Cases

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 60)); // 5

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 25)); // -1

console.log(binarySearch([5, 10, 15, 20, 25], 5)); // 0

console.log(binarySearch([5, 10, 15, 20, 25], 25)); // 4