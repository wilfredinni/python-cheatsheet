---
title: Python len() built-in function - Python Cheatsheet
description: Return the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python len() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).
  </base-disclaimer-content>
</base-disclaimer>

## Example

Return the the number of items of an object:

```python
>>> len('hello')
# 5

>>> len(['cat', 3, 'dog'])
# 3
```

## Test of emptiness

<base-warning>
  <base-warning-title>Test of emptiness</base-warning-title>
    <base-warning-content>
      Test of emptiness of strings, lists, dictionaries, etc., should not use
    <code>len</code>, but prefer direct boolean evaluation.
  </base-warning-content>
</base-warning>

```python
>>> a = [1, 2, 3]

# bad
>>> if len(a) > 0:  # evaluates to True
...     print("the list is not empty!")
...
# the list is not empty!

# good
>>> if a: # evaluates to True
...     print("the list is not empty!")
...
# the list is not empty!
```
