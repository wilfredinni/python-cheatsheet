---
title: Python ascii() built-in function - Python Cheatsheet
description: As repr(), return a string containing a printable representation of an object, but escape the non-ASCII characters in the string returned by repr() using \x, \u, or \U escapes.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ascii() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    As <code>repr()</code>, return a string containing a printable representation of an object, but escape the non-ASCII characters in the string returned by <code>repr()</code> using <code>\x</code>, <code>\u</code>, or <code>\U</code> escapes.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> ascii('A')
# 'A'

>>> ascii('ë')
# '\xeb'

>>> ascii(['A', 'ë'])
# ['A', '\xeb']
```
