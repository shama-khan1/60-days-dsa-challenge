/*
==========================================
Day 05
Binary Search Interview Questions
==========================================
*/

/*
------------------------------------------
Search Insert Position
------------------------------------------
*/

function searchInsert(arr, target) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return low;
}

console.log(searchInsert([10, 20, 30, 40, 50], 25)); // 2
console.log(searchInsert([10, 20, 30, 40, 50], 30)); // 2
console.log(searchInsert([10, 20, 30, 40, 50], 5));  // 0
console.log(searchInsert([10, 20, 30, 40, 50], 60)); // 5

/*
------------------------------------------
First Occurrence
------------------------------------------
*/

function firstOccurrence(arr, target) {

    let low = 0;
    let high = arr.length - 1;
    let ans = -1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            ans = mid;
            high = mid - 1;
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

console.log(firstOccurrence([10, 20, 20, 20, 30, 40], 20)); // 1
console.log(firstOccurrence([1, 1, 1, 1], 1)); // 0
console.log(firstOccurrence([10, 20, 30, 40], 30)); // 2
console.log(firstOccurrence([10, 20, 30, 40], 50)); // -1