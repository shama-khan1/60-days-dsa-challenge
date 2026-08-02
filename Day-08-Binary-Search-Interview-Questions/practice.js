/*
==========================================
Day 08
Binary Search Interview Questions

Topics
1. Lower Bound
2. Upper Bound
==========================================
*/

function lowerBound(arr, target) {

    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

function upperBound(arr, target) {

    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

/* Lower Bound */

console.log(lowerBound([10, 20, 30, 40, 50], 25));
console.log(lowerBound([10, 20, 20, 20, 30], 20));
console.log(lowerBound([10, 20, 30, 40, 50], 60));

/* Upper Bound */

console.log(upperBound([10, 20, 30, 40, 50], 30));
console.log(upperBound([10, 20, 20, 20, 30], 20));
console.log(upperBound([10, 20, 30, 40, 50], 60));