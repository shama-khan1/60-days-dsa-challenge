# Dry Run

## Lower Bound

Example

```text
Array

Index : 0   1   2   3   4
Value :10  20  30  40  50

Target : 25
```

---

Iteration 1

```text
low = 0
high = 4

mid = 2

arr[mid] = 30
```

30 is greater than or equal to 25.

```text
ans = 2

high = 1
```

---

Iteration 2

```text
low = 0
high = 1

mid = 0

arr[mid] = 10
```

10 is smaller than 25.

```text
low = 1
```

---

Iteration 3

```text
low = 1
high = 1

mid = 1

arr[mid] = 20
```

20 is smaller than 25.

```text
low = 2
```

---

Loop Ends

```text
low = 2
high = 1
```

Return

```text
2
```

---

# Upper Bound

Example

```text
Array

Index : 0   1   2   3   4
Value :10  20  30  40  50

Target : 30
```

---

Iteration 1

```text
low = 0
high = 4

mid = 2

arr[mid] = 30
```

30 is not greater than 30.

```text
low = 3
```

---

Iteration 2

```text
low = 3
high = 4

mid = 3

arr[mid] = 40
```

40 is greater than 30.

```text
ans = 3

high = 2
```

---

Loop Ends

```text
low = 3
high = 2
```

Return

```text
3
```