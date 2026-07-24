# Dry Run

# 1. Search Insert Position

## Example

```text
Array  : [10, 20, 30, 40, 50]
Target : 25
```

---

### Iteration 1

```text
low = 0
high = 4
mid = 2

arr[mid] = 30

30 > 25

high = 1
```

---

### Iteration 2

```text
low = 0
high = 1
mid = 0

arr[mid] = 10

10 < 25

low = 1
```

---

### Iteration 3

```text
low = 1
high = 1
mid = 1

arr[mid] = 20

20 < 25

low = 2
```

---

Loop Ends

```text
low = 2
high = 1
```

Return

```js
return low;
```

Output

```text
2
```

---

# 2. First Occurrence

## Example

```text
Array

Index : 0   1   2   3   4   5
Value :10  20  20  20  30  40

Target : 20
```

---

### Iteration 1

```text
low = 0
high = 5
mid = 2

arr[mid] = 20
```

Target Found

```text
ans = 2
high = 1
```

---

### Iteration 2

```text
low = 0
high = 1
mid = 0

arr[mid] = 10

10 < 20

low = 1
```

---

### Iteration 3

```text
low = 1
high = 1
mid = 1

arr[mid] = 20
```

Target Found Again

```text
ans = 1
high = 0
```

---

Loop Ends

```text
low = 1
high = 0
```

Return

```js
return ans;
```

Output

```text
1
```