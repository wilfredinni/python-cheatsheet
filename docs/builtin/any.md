---
title: Python any() built-in function - Python Cheatsheet
description: Return True if any element of the iterable is true. If the iterable is empty, return False.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python any() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return True if any element of the iterable is true. If the iterable is empty, return False.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> any([False, False, False])
# False

>>> any((0, True, False))
# True

>>> any({0, 0, 0})
# False
```
