# Day 06 - Binary Search Interview Questions (Part 2)

## Topic Covered

- Last Occurrence

---

# Last Occurrence

## Problem Statement

Given a sorted array containing duplicate elements, return the index of the **last occurrence** of the target element.

If the target is not present, return **-1**.

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

Normal Binary Search returns immediately after finding the target.

For Last Occurrence:

- Store the current index in `ans`.
- Continue searching on the right side.
- Update `ans` whenever another occurrence is found.
- Return `ans` after the search completes.

---

## Algorithm

1. Initialize:

```text
low = 0
high = arr.length - 1
ans = -1
```

2. Repeat while `low <= high`

- Calculate `mid`
- If `arr[mid] == target`
    - Store the current index in `ans`
    - Move to the right
- Else if `arr[mid] > target`
    - Search left
- Else
    - Search right

3. Return `ans`

---

## Why do we use ans?

If we return immediately after finding the target, we cannot guarantee that it is the last occurrence.

By storing the current answer and continuing the search on the right, we can find a later occurrence if it exists.

---

## Difference Between First and Last Occurrence

### First Occurrence

```js
ans = mid;
high = mid - 1;
```

### Last Occurrence

```js
ans = mid;
low = mid + 1;
```

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

## Interview Points

- The array must be sorted.
- Never return immediately after finding the target.
- Store the answer in `ans`.
- Continue searching on the right.
- Return `ans` after the loop ends.

---

## Common Mistakes

- Returning immediately after finding the target.
- Updating `high` instead of `low`.
- Forgetting to initialize `ans = -1`.
- Returning inside the loop.
- Using separate `if` statements instead of `if-else if-else`.