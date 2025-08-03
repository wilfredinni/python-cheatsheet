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

## Introduction

The `str()` function in Python is a built-in function that returns a string version of an object. If no object is provided, it returns an empty string. It's a versatile function for converting other data types to strings.

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

## See also

- <router-link to="/cheatsheet/manipulating-strings/">Manipulating Strings</router-link>
- <router-link to="/cheatsheet/string-formatting/">String Formatting</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</tool-code>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
- <router-link to="/blog/python-data-types/">Python Data Types</router-link>
