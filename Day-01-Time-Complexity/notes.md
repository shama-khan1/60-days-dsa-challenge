# 📘 Day 1 - Time Complexity (Big O Notation)

## 🎯 Objective

Understand what Time Complexity is and how to analyze the efficiency of an algorithm.

---

## 📖 What is Time Complexity?

Time Complexity tells us how the running time of an algorithm grows as the input size increases.

It helps us compare different algorithms and choose the most efficient one.

---

## 📌 Common Time Complexities

| Complexity | Meaning |
|------------|---------|
| O(1) | Constant Time |
| O(log n) | Logarithmic Time |
| O(n) | Linear Time |
| O(n²) | Quadratic Time |

---

## 📚 Key Concepts

- Big O measures algorithm efficiency.
- Ignore constants in Big O.
- Ignore smaller terms.

Example:

O(2n) → O(n)

O(n² + n) → O(n²)

---

## 📝 Examples

### O(1)

```javascript
console.log(arr[2]);
```

### O(n)

```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

### O(n²)

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

### O(log n)

```javascript
for (let i = 1; i < n; i *= 2) {
    console.log(i);
}
```

---

## 💡 Key Learnings

- Sequential loops → Add the complexities.
- Nested loops → Multiply the complexities.
- Always keep the dominant term.
- Arrays provide O(1) index access because elements are stored in contiguous memory.

---

## 🚀 Status

✅ Day 1 Completed