---
title: Python slice() built-in function - Python Cheatsheet
description: Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python slice() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default).
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']

>>> furniture[0:4]
# ['table', 'chair', 'rack', 'shelf']

>>> furniture[1:3]
# ['chair', 'rack']

>>> furniture[0:-1]
# ['table', 'chair', 'rack']

>>> furniture[:2]
# ['table', 'chair']

>>> furniture[1:]
# ['chair', 'rack', 'shelf']

>>> furniture[:]
# ['table', 'chair', 'rack', 'shelf']
```

Slicing the complete list will perform a copy:

```python
>>> spam2 = spam[:]
# ['cat', 'bat', 'rat', 'elephant']

>>> spam.append('dog')
>>> spam
# ['cat', 'bat', 'rat', 'elephant', 'dog']

>>> spam2
# ['cat', 'bat', 'rat', 'elephant']
```
