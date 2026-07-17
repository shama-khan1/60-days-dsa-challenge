# Day 3 - Linear Search (Dry Run)

## 🎯 Problem

Find the index of the target element using the **Linear Search** algorithm.

---

## Example

**Input**

```js
let arr = [10, 20, 30, 40, 50];
let target = 40;
```

---

## Dry Run

| Iteration | Index (`i`) | Current Element | Comparison | Result      |
| --------- | ----------: | --------------: | ---------- | ----------- |
| 1         |           0 |              10 | 10 === 40  | ❌ Not Found |
| 2         |           1 |              20 | 20 === 40  | ❌ Not Found |
| 3         |           2 |              30 | 30 === 40  | ❌ Not Found |
| 4         |           3 |              40 | 40 === 40  | ✅ Found     |

**Return Value**

```text
3
```

The function stops immediately after finding the target.

---

# Example 2

**Input**

```js
let arr = [10, 20, 30, 40, 50];
let target = 100;
```

## Dry Run

| Iteration | Index (`i`) | Current Element | Comparison | Result |
| --------- | ----------: | --------------: | ---------- | ------ |
| 1         |           0 |              10 | 10 === 100 | ❌      |
| 2         |           1 |              20 | 20 === 100 | ❌      |
| 3         |           2 |              30 | 30 === 100 | ❌      |
| 4         |           3 |              40 | 40 === 100 | ❌      |
| 5         |           4 |              50 | 50 === 100 | ❌      |

No element matches the target.

**Return Value**

```text
-1
```

---

# Algorithm Flow

```text
Start

↓

Initialize i = 0

↓

Compare arr[i] with target

↓

Match Found?
   │
 ┌─┴──────────────┐
 │                │
Yes              No
 │                │
Return i      Move to next index
 │                │
 └────────────┬───┘
              │
     End of Array?
              │
         ┌────┴────┐
         │         │
        No        Yes
         │         │
         └──Loop───┘
                   │
              Return -1
```

---

# Time Complexity Analysis

| Case         | Explanation                                    | Complexity |
| ------------ | ---------------------------------------------- | ---------- |
| Best Case    | Target is found at the first index.            | **O(1)**   |
| Average Case | Target is found somewhere in the middle.       | **O(n)**   |
| Worst Case   | Target is at the last index or does not exist. | **O(n)**   |

---

# Space Complexity

```text
O(1)
```

Reason:

* No extra array or data structure is created.
* Only a loop variable (`i`) is used.

---

# Key Observations

* Linear Search checks elements **one by one**.
* It works on **both sorted and unsorted arrays**.
* The algorithm stops immediately once the target is found.
* If the target is not found, it returns **-1** because **-1 is not a valid array index**.

---

# Interview Notes

### Why do we return `-1` instead of `0`?

Because:

* `0` is a valid array index.
* Returning `0` for "not found" would create ambiguity.
* `-1` clearly indicates that the target element does not exist.

---

# Today's Learning

* ✅ Understood the Linear Search algorithm.
* ✅ Performed a manual dry run.
* ✅ Learned Best, Average, and Worst Case analysis.
* ✅ Understood why `-1` is returned.
* ✅ Implemented Linear Search in JavaScript.
