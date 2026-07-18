# Day 4 - Binary Search (Part 1) Dry Run

## Problem

Find the index of the target element using Binary Search.

---

# Input

```js
let arr = [3, 7, 11, 18, 24, 31, 42, 50];
let target = 42;
```

---

# Initial Values

```text
low = 0
high = 7
```

---

# Dry Run

| Step | low | high | mid | arr[mid] | Comparison | Decision                           |
| ---: | --: | ---: | --: | -------: | ---------- | ---------------------------------- |
|    1 |   0 |    7 |   3 |       18 | 42 > 18    | Update `low = mid + 1` → `low = 4` |
|    2 |   4 |    7 |   5 |       31 | 42 > 31    | Update `low = mid + 1` → `low = 6` |
|    3 |   6 |    7 |   6 |       42 | 42 == 42   | Target Found. Return `6`           |

---

# Step-by-Step Explanation

## Step 1

```text
low = 0
high = 7
mid = 3
arr[mid] = 18
```

Since

```text
42 > 18
```

Search the right half.

Update

```text
low = 4
high = 7
```

---

## Step 2

```text
low = 4
high = 7
mid = 5
arr[mid] = 31
```

Since

```text
42 > 31
```

Search the right half.

Update

```text
low = 6
high = 7
```

---

## Step 3

```text
low = 6
high = 7
mid = 6
arr[mid] = 42
```

Since

```text
42 == 42
```

Target found.

Return

```text
6
```

---

# Search Space Visualization

Initial Search Space

```text
[3, 7, 11, 18, 24, 31, 42, 50]
```

After Step 1

```text
[24, 31, 42, 50]
```

After Step 2

```text
[42, 50]
```

After Step 3

```text
Target Found
```

---

# Observations

* The target was found in only three comparisons.
* Half of the search space was discarded after every comparison.
* Binary Search is significantly faster than Linear Search for large sorted arrays.

---

# Complexity Summary

| Complexity       | Value    |
| ---------------- | -------- |
| Best Case        | O(1)     |
| Average Case     | O(log n) |
| Worst Case       | O(log n) |
| Space Complexity | O(1)     |

---

# Conclusion

Binary Search efficiently finds an element by repeatedly dividing the search space into two halves. This approach makes it much faster than Linear Search for searching in sorted arrays.
