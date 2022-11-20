---
title: Python eval() built-in function - Python Cheatsheet
description: The arguments are a string and optional globals and locals. If provided, globals must be a dictionary. If provided, locals can be any mapping object.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eval() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   The arguments are a string and optional globals and locals. If provided, globals must be a dictionary. If provided, locals can be any mapping object.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> eval('1 + 4')
# 5

>>> eval('print("Hello World!")')
# Hello World!

>>> x = 10
>>> eval('x == 10')
# True
```
