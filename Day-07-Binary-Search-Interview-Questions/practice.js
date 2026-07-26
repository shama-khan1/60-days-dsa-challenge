/*
==========================================
Day 07
Binary Search Interview Questions
Topic : Count Occurrences
==========================================
*/

function firstOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let first = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            first = mid;
            high = mid - 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return first;
}

function lastOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let last = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            last = mid;
            low = mid + 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return last;
}

function countOccurrences(arr, target) {
    let first = firstOccurrence(arr, target);

    if (first === -1) {
        return 0;
    }

    let last = lastOccurrence(arr, target);

    return last - first + 1;
}

// Test Cases
console.log(countOccurrences([10, 20, 20, 20, 30, 40], 20)); // 3
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); // 5
console.log(countOccurrences([10, 20, 30, 40], 50)); // 0
console.log(countOccurrences([1], 1)); // 1
console.log(countOccurrences([1], 2)); // 0