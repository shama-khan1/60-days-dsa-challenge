/**
 * GFG - First and Last Occurrences of X
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

    find(arr, x) {

        // Find the first occurrence of x
        function firstOccurrence(arr, x) {

            let low = 0;
            let high = arr.length - 1;
            let ans = -1;

            while (low <= high) {

                let mid = Math.floor((low + high) / 2);

                if (arr[mid] === x) {
                    ans = mid;
                    high = mid - 1;
                }
                else if (arr[mid] > x) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }

            return ans;
        }

        // Find the last occurrence of x
        function lastOccurrence(arr, x) {

            let low = 0;
            let high = arr.length - 1;
            let ans = -1;

            while (low <= high) {

                let mid = Math.floor((low + high) / 2);

                if (arr[mid] === x) {
                    ans = mid;
                    low = mid + 1;
                }
                else if (arr[mid] > x) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }

            return ans;
        }

        return [
            firstOccurrence(arr, x),
            lastOccurrence(arr, x)
        ];
    }
}


