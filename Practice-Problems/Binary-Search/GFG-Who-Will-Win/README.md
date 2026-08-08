# GFG - Who Will Win

## Platform

GeeksforGeeks

## Topic

Binary Search

## Difficulty

Easy

---

## Problem Link

https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1

---

## Problem Summary

Given a sorted array and a target value, determine whether the target exists in the array.

Return:

- `true` if the target is present.
- `false` if the target is not present.

---

## Approach

This problem can be solved efficiently using Binary Search because the array is sorted.

Algorithm:

1. Initialize two pointers:
   - `low = 0`
   - `high = arr.length - 1`
2. Calculate the middle index.
3. Compare the middle element with the target.
4. If the target is found, return `true`.
5. If the middle element is greater than the target, search in the left half.
6. Otherwise, search in the right half.
7. If the loop ends without finding the target, return `false`.

---

## Time Complexity

```text
O(log n)
```

---

## Space Complexity

```text
O(1)
```

---

## Concepts Practiced

- Binary Search
- Searching in a Sorted Array
- Two Pointer Technique
- Time Complexity Analysis

---

## Learning Outcome

While solving this problem, I practiced implementing Binary Search from scratch and strengthened my understanding of updating the `low`, `high`, and `mid` pointers efficiently.