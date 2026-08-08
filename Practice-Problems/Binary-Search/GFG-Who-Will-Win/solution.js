/**
 * Problem:
 * GFG - Who Will Win
 *
 * Topic:
 * Binary Search
 *
 * Time Complexity:
 * O(log n)
 *
 * Space Complexity:
 * O(1)
 */

class Solution {

    binarySearch(arr, k) {

        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {

            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === k) {
                return true;
            }
            else if (arr[mid] > k) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }

        return false;
    }

}