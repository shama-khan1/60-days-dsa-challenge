# Day 07 - Binary Search Interview Questions (Part 3)

## Topic Covered

- Count Occurrences in a Sorted Array

---

# Problem Statement

Given a sorted array containing duplicate elements, return the total number of times the target element appears.

If the target is not present, return `0`.

---

## Example

Input

```text
Array  : [10, 20, 20, 20, 30, 40]
Target : 20
```

Output

```text
3
```

---

## Approach

Instead of writing a new Binary Search algorithm, reuse the previously implemented functions:

- First Occurrence
- Last Occurrence

If the target does not exist, return `0`.

Otherwise, calculate the count using:

```text
Count = Last Occurrence - First Occurrence + 1
```

---

## Algorithm

1. Find the first occurrence of the target.
2. If the first occurrence is `-1`, return `0`.
3. Find the last occurrence of the target.
4. Return:

```text
last - first + 1
```

---

## Why +1?

The difference between the last and first index gives the number of gaps, not the number of elements.

Example:

```text
Index : 2 3 4 5
```

```text
5 - 2 = 3
```

Actual elements:

```text
2, 3, 4, 5
```

Total elements:

```text
4
```

Therefore:

```text
Count = Last - First + 1
```

---

## Time Complexity

```text
O(log n)
```

Two Binary Search operations are performed:

- First Occurrence → O(log n)
- Last Occurrence → O(log n)

Overall:

```text
O(log n)
```

---

## Space Complexity

```text
O(1)
```

---

## Interview Points

- The array must be sorted.
- Reuse existing Binary Search functions.
- Handle the case where the target does not exist.
- Do not traverse the array linearly.
- Understand why `+1` is required in the formula.

---

## Common Mistakes

- Returning `-1` instead of `0` when the target is not found.
- Forgetting the `+1` in the formula.
- Writing a new Binary Search instead of reusing existing functions.
- Forgetting to check if the first occurrence is `-1`.