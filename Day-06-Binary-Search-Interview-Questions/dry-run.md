# Dry Run

## Example

```text
Array

Index : 0   1   2   3   4   5
Value :10  20  20  20  30  40

Target : 20
```

---

## Iteration 1

```text
low = 0
high = 5

mid = 2

arr[mid] = 20
```

Target Found

```text
ans = 2

low = 3
```

---

## Iteration 2

```text
low = 3
high = 5

mid = 4

arr[mid] = 30
```

30 > 20

```text
high = 3
```

---

## Iteration 3

```text
low = 3
high = 3

mid = 3

arr[mid] = 20
```

Target Found Again

```text
ans = 3

low = 4
```

---

## Loop Ends

```text
low = 4
high = 3
```

Condition

```text
low <= high
```

becomes false.

Return

```js
return ans;
```

---

## Final Output

```text
3
```

This is the last occurrence of the target.