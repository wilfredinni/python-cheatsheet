---
title: Python sum() built-in function - Python Cheatsheet
description: Sums start and the items of an iterable from left to right and returns the total. The iterable’s items are normally numbers, and the start value is not allowed to be a string.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sum() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Sums start and the items of an iterable from left to right and returns the total. The iterable’s items are normally numbers, and the start value is not allowed to be a string.
  </base-disclaimer-content>
</base-disclaimer>

The `sum()` function calculates the sum of all items in an iterable (like a list or tuple). You can also provide an optional `start` value, which is added to the total.

### Examples

**Summing a list of numbers:**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))  # Output: 15
```

**Summing with a starting value:**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # Output: 16 (10 + 1 + 2 + 3)
```



```python
>>> sum([2, 4, 6])
# 12
>>> sum([10, 10, 10])
# 30
```

## See also

- <router-link to="/cheatsheet/lists-and-tuples/">Lists and Tuples</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/zip/">zip()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/builtin/min/">min()</router-link>
- <router-link to="/builtin/max/">max()</router-link>
