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

## Introduction

The `all()` function in Python is a built-in function that checks if all elements in an iterable are `True`. It returns `True` if every element evaluates to true, or if the iterable is empty. This is useful for validating conditions across a collection of items, such as checking if all numbers in a list are positive or if all required fields in a form are filled.

## Examples

```python
>>> all([True, True, True])
# True

>>> all((0, True, False))
# False

>>> all({1, 1, 1})
# True
```

## See Also

- <router-link :to="'/builtin/any'">any()</router-link>
