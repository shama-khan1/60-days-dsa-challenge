# Day 3 - Linear Search

## 📌 Definition

Linear Search is a searching algorithm that checks each element one by one until the target element is found or the array ends.

---

## 🧠 Key Points

- Works on both sorted and unsorted arrays.
- Checks elements sequentially.
- Returns the index of the target if found.
- Returns -1 if the target does not exist.

---

## 📝 Algorithm

1. Start from index 0.
2. Compare the current element with the target.
3. If both are equal, return the current index.
4. Otherwise, move to the next element.
5. If the loop ends, return -1.

---

## ⏱ Time Complexity

| Case | Complexity |
|------|------------|
| Best Case | O(1) |
| Average Case | O(n) |
| Worst Case | O(n) |

---

## 💾 Space Complexity

O(1)

---

## ✅ Advantages

- Simple to implement.
- Works on unsorted arrays.
- No preprocessing required.

---

## ❌ Disadvantages

- Slow for large datasets.
- Not efficient compared to Binary Search.

---

## 📚 Example

Array:

[10,20,30,40,50]

Target:

40

Comparisons:

10 ❌

20 ❌

30 ❌

40 ✅

Output:

Index = 3

---

## 💡 Interview Notes

Why do we return -1?

Because -1 is not a valid array index.

If we returned 0, we could not distinguish between:

- Element found at index 0
- Element not found

---

## 🚀 Today's Learning

Today I learned:

- What Linear Search is.
- How it works.
- Why it returns -1.
- Best, Average and Worst Case.
- Time Complexity analysis.