---
title: Python all() built-in function - Python Cheatsheet
description: Return True if all elements of the iterable are true (or if the iterable is empty).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python all() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return True if all elements of the iterable are true (or if the iterable is empty).
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> all([True, True, True])
# True

>>> all((0, True, False))
# False

>>> all({1, 1, 1})
# True
```
