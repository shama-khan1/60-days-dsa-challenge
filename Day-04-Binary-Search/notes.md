# Day 4 - Binary Search (Part 1)

## Definition

Binary Search is a searching algorithm used to find an element in a **sorted array** by repeatedly dividing the search space into two halves.

Unlike Linear Search, Binary Search does not check every element one by one. Instead, it compares the target element with the middle element and eliminates half of the remaining search space after every comparison.

---

# Prerequisite

Binary Search works only on a **sorted array**.

Example:

```js
[2, 5, 8, 12, 15, 18, 21, 25]
```

Binary Search cannot be applied efficiently on an unsorted array because it is impossible to determine which half should be discarded.

---

# How Binary Search Works

1. Initialize two pointers:

   * `low = 0`
   * `high = arr.length - 1`

2. Find the middle index.

3. Compare the target with the middle element.

4. If the target is equal to the middle element, return the index.

5. If the target is greater than the middle element, search the right half.

6. If the target is smaller than the middle element, search the left half.

7. Repeat the process until the element is found or the search space becomes empty.

---

# Search Rules

### Case 1

```text
target == arr[mid]
```

Return the index.

---

### Case 2

```text
target > arr[mid]
```

Discard the left half.

Update:

```js
low = mid + 1;
```

---

### Case 3

```text
target < arr[mid]
```

Discard the right half.

Update:

```js
high = mid - 1;
```

---

# Variables Used

| Variable | Purpose                                  |
| -------- | ---------------------------------------- |
| low      | Starting index of the search space       |
| high     | Ending index of the search space         |
| mid      | Middle index of the current search space |

---

# Example

Array

```js
[2, 5, 8, 12, 15, 18, 21, 25]
```

Target

```text
18
```

Initial values

```text
low = 0
high = 7
mid = 3
arr[mid] = 12
```

Since

```text
18 > 12
```

Discard the left half and continue searching in the right half.

---

# Linear Search vs Binary Search

| Feature          | Linear Search     | Binary Search          |
| ---------------- | ----------------- | ---------------------- |
| Array Type       | Sorted / Unsorted | Sorted Only            |
| Searching Method | One by one        | Divide into two halves |
| Best Case        | O(1)              | O(1)                   |
| Average Case     | O(n)              | O(log n)               |
| Worst Case       | O(n)              | O(log n)               |

---

# Time Complexity

| Case         | Complexity |
| ------------ | ---------- |
| Best Case    | O(1)       |
| Average Case | O(log n)   |
| Worst Case   | O(log n)   |

---

# Space Complexity

```text
O(1)
```

Only three variables (`low`, `high`, and `mid`) are used.

---

# Advantages

* Faster than Linear Search.
* Eliminates half of the search space after every comparison.
* Efficient for large sorted datasets.

---

# Limitations

* Works only on sorted arrays.
* Cannot be directly applied to unsorted data.

---

# Interview Notes

Binary Search is faster than Linear Search because it reduces the search space by half after every comparison instead of checking each element sequentially.

---

# Key Takeaways

* Binary Search requires a sorted array.
* The search space is divided into two halves after every comparison.
* Three variables are used: `low`, `high`, and `mid`.
* If the target is greater than the middle element, search the right half.
* If the target is smaller than the middle element, search the left half.
* Binary Search has a time complexity of `O(log n)`.

# Day 4 - Binary Search (Part 2)

## Binary Search Algorithm

Binary Search works only on a sorted array.

It repeatedly checks the middle element and removes half of the search space until the target is found or the search space becomes empty.

---

## Steps

1. Initialize:

```js
let low = 0;
let high = arr.length - 1;
```

2. Calculate Middle

```js
let mid = Math.floor((low + high) / 2);
```

3. Compare

```js
arr[mid] === target
```

Return index.

4. If

```js
arr[mid] > target
```

Search Left

```js
high = mid - 1;
```

5. If

```js
arr[mid] < target
```

Search Right

```js
low = mid + 1;
```

6. Repeat until

```js
low > high
```

7. Return

```js
return -1;
```

if target is not found.

---

# Time Complexity

Best Case

O(1)

Worst Case

O(log n)

Average Case

O(log n)

---

# Space Complexity

O(1)

---

# Why Binary Search is Fast?

Because in every iteration it removes half of the remaining search space.

Example

16 elements

↓

8

↓

4

↓

2

↓

1

This is why Binary Search runs in O(log n).

---

# Important Interview Points

- Works only on sorted arrays.
- low, high and mid store indexes.
- Return index, not value.
- Stop when low becomes greater than high.
- Return -1 if target is not present.
