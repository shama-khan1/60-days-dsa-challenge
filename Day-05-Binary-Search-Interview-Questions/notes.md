# Day 05 - Binary Search Interview Questions (Part 1)

## Topics Covered

- Search Insert Position
- First Occurrence

---

# 1. Search Insert Position

## Problem

Given a sorted array and a target value:

- Return the index if the target exists.
- Otherwise, return the index where the target should be inserted.

The array should **not** be modified.

---

## Example

Input

```text
Array  : [10, 20, 30, 40, 50]
Target : 25
```

Output

```text
2
```

---

## Key Idea

Binary Search remains the same.

The only difference is the return statement.

Normal Binary Search

```js
return -1;
```

Search Insert Position

```js
return low;
```

When the loop finishes, `low` represents the correct insertion index.

---

## Time Complexity

```
O(log n)
```

---

## Space Complexity

```
O(1)
```

---

# 2. First Occurrence

## Problem

Given a sorted array containing duplicate elements, return the index of the **first occurrence** of the target.

If the target is not found, return **-1**.

---

## Example

Input

```text
Array  : [10, 20, 20, 20, 30, 40]
Target : 20
```

Output

```text
1
```

---

## Key Idea

Normal Binary Search returns immediately after finding the target.

For First Occurrence:

- Store the current index in `ans`.
- Continue searching on the left.
- Update `ans` whenever another occurrence is found.

---

## Why do we use ans?

If we return immediately after finding the target, we cannot guarantee that it is the first occurrence.

Therefore,

```js
ans = mid;
```

stores the current answer and the search continues on the left.

---

## Important Difference

Normal Binary Search

```js
return mid;
```

First Occurrence

```js
ans = mid;
high = mid - 1;
```

---

## Time Complexity

```
O(log n)
```

---

## Space Complexity

```
O(1)
```

---

# Key Takeaways

- Binary Search requires a sorted array.
- Search Insert Position returns `low`.
- First Occurrence uses `ans`.
- Never return immediately in First Occurrence.
- Continue searching on the left after finding the target.
- Always use `if - else if - else` to avoid incorrect logic.