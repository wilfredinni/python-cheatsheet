---
title: Python max() built-in function - Python Cheatsheet
description: Return the largest item in an iterable or the largest of two or more arguments.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python max() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the largest item in an iterable or the largest of two or more arguments.
  </base-disclaimer-content>
</base-disclaimer>

The `max()` function can be used in two ways:

1.  With an iterable (like a list or tuple), it returns the largest item.
2.  With two or more arguments, it returns the largest of them.

### Examples

**Finding the max in an iterable:**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))  # Output: 40

letters = ('a', 'b', 'z')
print(max(letters)) # Output: 'z'
```

**Finding the max of several arguments:**

```python
print(max(10, 20, 5)) # Output: 20
```



```python
>>> max([1, 2, 10, 40, 5])
# 40
>>> max((1, 2, 10, 40, 5))
# 40
```
