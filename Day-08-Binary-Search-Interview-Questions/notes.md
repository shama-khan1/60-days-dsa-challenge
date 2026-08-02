# Day 08 - Binary Search Interview Questions (Part 4)

## Topics Covered

- Lower Bound
- Upper Bound

---

# Lower Bound

## Problem Statement

Given a sorted array and a target value, return the index of the first element that is greater than or equal to the target.

If no such element exists, return `arr.length`.

---

## Definition

Lower Bound is the index of the first element that satisfies:

```text
element >= target
```

---

## Example 1

Input

```text
Array  : [10, 20, 30, 40, 50]
Target : 25
```

Output

```text
2
```

Explanation

The first element greater than or equal to 25 is 30 at index 2.

---

## Example 2

Input

```text
Array  : [10, 20, 20, 20, 30]
Target : 20
```

Output

```text
1
```

---

## Algorithm

1. Initialize `low`, `high`, and `ans`.
2. Set `ans = arr.length`.
3. Calculate `mid`.
4. If `arr[mid] >= target`
   - Store `mid` in `ans`.
   - Search on the left.
5. Otherwise search on the right.
6. Return `ans`.

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

# Upper Bound

## Problem Statement

Given a sorted array and a target value, return the index of the first element that is strictly greater than the target.

If no such element exists, return `arr.length`.

---

## Definition

Upper Bound is the index of the first element that satisfies:

```text
element > target
```

---

## Example 1

Input

```text
Array  : [10, 20, 30, 40, 50]
Target : 30
```

Output

```text
3
```

Explanation

The first element greater than 30 is 40 at index 3.

---

## Example 2

Input

```text
Array  : [10, 20, 20, 20, 30]
Target : 20
```

Output

```text
4
```

---

## Algorithm

1. Initialize `low`, `high`, and `ans`.
2. Set `ans = arr.length`.
3. Calculate `mid`.
4. If `arr[mid] > target`
   - Store `mid` in `ans`.
   - Search on the left.
5. Otherwise search on the right.
6. Return `ans`.

---

## Difference Between Lower Bound and Upper Bound

Lower Bound

```text
arr[mid] >= target
```

Upper Bound

```text
arr[mid] > target
```

The only difference is the comparison operator.

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
- Initialize the answer with `arr.length`.
- Search on the left after finding a valid answer.
- Lower Bound returns the first element greater than or equal to the target.
- Upper Bound returns the first element strictly greater than the target.

---

## Common Mistakes

- Initializing the answer with `-1` instead of `arr.length`.
- Using `>` instead of `>=` in Lower Bound.
- Using `>=` instead of `>` in Upper Bound.
- Returning immediately after finding a valid element.
- Forgetting to continue searching on the left.