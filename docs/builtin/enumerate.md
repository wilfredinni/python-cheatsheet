---
title: Python enumerate() built-in function - Python Cheatsheet
description: Return an enumerate object. iterable must be a sequence, an iterator, or some other object which supports iteration. The __next__() method of the iterator returned by enumerate() returns a tuple containing a count (from start which defaults to 0) and the values obtained from iterating over iterable.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python enumerate() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return an enumerate object. iterable must be a sequence, an iterator, or some other object which supports iteration. The __next__() method of the iterator returned by enumerate() returns a tuple containing a count (from start which defaults to 0) and the values obtained from iterating over iterable.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> l = enumerate([1, 2, 3, 4, 5])
>>> l
# <enumerate object at 0x7fcac409cc40>
>>> l.__next__()
# (0, 1)
>>> l.__next__()
# (1, 2)
>>> l.__next__()
# (2, 3)
>>> l.__next__()
# (3, 4)
>>> l.__next__()
# (4, 5)
>>> l.__next__()
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# StopIteration
```

`enumerate` is usually used in a `for` loop to get the index of an item:

```python
>>> for i, item in enumerate([1, 2, 3, 4, 5]):
...     print(f"Index: {i}, Item: {item}")
...
# Index: 0, Item: 1
# Index: 1, Item: 2
# Index: 2, Item: 3
# Index: 3, Item: 4
# Index: 4, Item: 5
```
