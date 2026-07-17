/**
 * Day 3 - Linear Search
 * Author: Shama Khan
 */

function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            return i;
        }

    }

    return -1;

}

// Test Cases

console.log(linearSearch([10,20,30,40],30));
// Expected Output: 2

console.log(linearSearch([10,20,30,40],100));
// Expected Output: -1

console.log(linearSearch([5,8,12,15,20],15));
// Expected Output: 3

console.log(linearSearch([8,4,6,1,9],9));
// Expected Output: 4

console.log(linearSearch([8,4,6,1,9],5));
// Expected Output: -1