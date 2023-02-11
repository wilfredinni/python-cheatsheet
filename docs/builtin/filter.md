---
title: Python filter() built-in function - Python Cheatsheet
description: Construct an iterator from those elements of iterable for which function returns true. iterable may be either a sequence, a container which supports iteration, or an iterator. If function is None, the identity function is assumed, that is, all elements of iterable that are false are removed.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python filter() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Construct an iterator from those elements of iterable for which function returns true. iterable may be either a sequence, a container which supports iteration, or an iterator. If function is None, the identity function is assumed, that is, all elements of iterable that are false are removed.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `filter` method in Python is a built-in function that allows you to `filter` a sequence (e.g., a list, a tuple, etc.) by applying a certain condition to each element in the sequence. The filter method returns a new sequence containing only the elements that meet the specified condition.

Here is a simple example of using the filter method to filter a list of numbers and keep only the even numbers:

## Example

```python
>>> def is_even(num):
...     return num % 2 == 0
...
>>> numbers = [1, 2, 3, 4, 5, 6]
>>> even_numbers = list(filter(is_even, numbers))
>>> print(even_numbers)
>>> [2, 4, 6]
```

In this example, the `is_even` function is defined to determine whether a number is even or not. The filter method takes `two arguments`: the `first argument` is the function to apply to each element of the list, and the `second argument` is the list to be filtered. The filter method returns an iterable, which is then converted to a list and stored in the even_numbers variable. The final output is the list of even numbers from the original list.
