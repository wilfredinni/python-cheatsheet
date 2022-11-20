---
title: Python str() built-in function - Python Cheatsheet
description: Return a string version of object. If object is not provided, returns the empty string. Otherwise, the behavior of str() depends on whether encoding or errors is given.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python str() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a string version of object. If object is not provided, returns the empty string. Otherwise, the behavior of str() depends on whether encoding or errors is given.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> # transform an integer to a string
>>> from_integer = str(29)
>>> from_integer
# '29'
>>> type(from_integer)
# <class 'str'>

>>> # transform a float to string
>>> from_float = str(-3.14)
>>> from_float
# '-3.14'
>>> type(from_float)
# <class 'str'>

>>> # return an empty string
>>> str()
# ''
```
