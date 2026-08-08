# GFG - First and Last Occurrences of X

## Platform

GeeksforGeeks

## Topic

Binary Search

## Difficulty

Easy

## Problem Link

https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1

---

## Problem Summary

Given a sorted array that may contain duplicate values, find the first and last occurrence of a given target element.

If the target does not exist in the array, return `[-1, -1]`.

---

## Approach

The array is sorted, so Binary Search can be used to find both occurrences efficiently.

Two separate Binary Search operations are performed.

### First Occurrence

When the target is found:

1. Store the current index in `ans`.
2. Continue searching on the left side.
3. Update `high = mid - 1`.

This ensures that any earlier occurrence of the target is checked.

### Last Occurrence

When the target is found:

1. Store the current index in `ans`.
2. Continue searching on the right side.
3. Update `low = mid + 1`.

This ensures that any later occurrence of the target is checked.

---

## Algorithm

### First Occurrence

1. Initialize `low = 0`.
2. Initialize `high = arr.length - 1`.
3. Initialize `ans = -1`.
4. Calculate `mid`.
5. If `arr[mid] === x`, store `mid` and search the left half.
6. If `arr[mid] > x`, search the left half.
7. Otherwise, search the right half.
8. Return `ans`.

### Last Occurrence

1. Initialize `low = 0`.
2. Initialize `high = arr.length - 1`.
3. Initialize `ans = -1`.
4. Calculate `mid`.
5. If `arr[mid] === x`, store `mid` and search the right half.
6. If `arr[mid] > x`, search the left half.
7. Otherwise, search the right half.
8. Return `ans`.

---

## Example

```text
Array:
[1, 3, 5, 5, 5, 5, 67, 123, 125]

Target:
5
```

First occurrence:

```text
2
```

Last occurrence:

```text
5
```

Output:

```text
[2, 5]
```

---

## Edge Cases

### Target does not exist

```text
Array:
[1, 2, 3]

Target:
4
```

Output:

```text
[-1, -1]
```

### Target occurs only once

```text
Array:
[1, 3, 5, 7, 9]

Target:
7
```

Output:

```text
[3, 3]
```

### Target occurs multiple times

```text
Array:
[1, 5, 5, 5, 9]

Target:
5
```

Output:

```text
[1, 3]
```

---

## Time Complexity

Each Binary Search takes:

```text
O(log n)
```

Two Binary Searches are performed:

```text
O(log n) + O(log n)
```

Overall:

```text
O(log n)
```

---

## Space Complexity

```text
O(1)
```

Only a constant number of variables are used apart from the returned result.

---

## Concepts Practiced

- Binary Search
- First Occurrence
- Last Occurrence
- Searching in a Sorted Array
- Handling Duplicate Values
- Time Complexity Analysis
- Space Complexity Analysis

---

## Learning Outcome

This problem strengthened my understanding of how Binary Search can be modified to find specific occurrences instead of returning immediately when the target is found.

The key pattern learned was:

```text
First Occurrence
Target found -> store answer -> search left

Last Occurrence
Target found -> store answer -> search right
```