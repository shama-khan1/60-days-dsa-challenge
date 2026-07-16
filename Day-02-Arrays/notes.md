# Day 2 - Arrays

📅 Challenge: 60 Days DSA Challenge

🎯 Goal:
Understand how arrays work internally, their memory layout, and the time complexity of common operations.

## 📌 What is an Array?

An array is a data structure that stores multiple elements in contiguous memory locations. Each element is accessed using its index.

Example:

```javascript
let arr = [10, 20, 30, 40, 50];
```

---

## 📌 Why Do We Use Arrays?

- To store multiple values in a single variable.
- To access elements quickly using an index.
- To perform operations like traversal, insertion, deletion, and updating.

---

## 📌 Key Concepts

### 1. Contiguous Memory

Array elements are stored one after another in memory.

### 2. Indexing

The first element starts at index **0**.

Example:

```javascript
arr[0] // 10
arr[1] // 20
arr[2] // 30
```

---

## 📌 Common Operations

| Operation | Time Complexity |
|-----------|-----------------|
| Access | O(1) |
| Traversal | O(n) |
| Push | O(1) |
| Pop | O(1) |
| Shift | O(n) |
| Unshift | O(n) |
| Update | O(1) |

---

## 📌 Why?

### Access - O(1)

The computer directly accesses the required memory location using the index.

### Traversal - O(n)

Every element must be visited one by one.

### Push - O(1)

Adds an element at the end of the array.

### Pop - O(1)

Removes the last element.

### Shift - O(n)

Removes the first element, so all remaining elements shift one position to the left.

### Unshift - O(n)

Adds an element at the beginning, so all existing elements shift one position to the right.

### Update - O(1)

Updating an existing index replaces the value directly without shifting any elements.

---

## 📌 Today's Learning

- Learned how arrays are stored in memory.
- Understood why array indexing is O(1).
- Learned the time complexity of common array operations.
- Practiced accessing, updating, inserting, deleting, and traversing arrays.

---

## 📌 Interview Questions

1. Why is array access O(1)?
2. Why are Shift and Unshift O(n)?
3. What is contiguous memory?
4. What is the difference between updating and inserting an element?