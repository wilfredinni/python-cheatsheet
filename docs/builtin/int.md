---
title: Python int() built-in function - Python Cheatsheet
description: Return an integer object constructed from a number or string x, or return 0 if no arguments are given.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python int() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return an integer object constructed from a number or string x, or return 0 if no arguments are given.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `int()` function in Python is a built-in function that allows you to convert a value into an integer. It can take a string or a number as an argument and will return the integer equivalent. This is particularly useful when you need to perform mathematical operations that require whole numbers or when you need to ensure that a value is of the integer type.

## Examples

```python
>>> # transform a string to an integer
>>> from_integer = int('29')
>>> from_integer
# 29
>>> type(from_integer)
# <class 'int'>

>>> # transform a float to integer
>>> from_float = int(-3.14)
>>> from_float
# -3
>>> type(from_float)
# <class 'int'>

>>> # return an empty string
>>> int()
# 0
```

## See also

- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
