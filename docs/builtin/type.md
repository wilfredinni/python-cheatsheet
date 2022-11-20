---
title: Python type() built-in function - Python Cheatsheet
description: With one argument, return the type of an object. The return value is a type object and generally the same object as returned by object.__class__.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python type() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    With one argument, return the type of an object. The return value is a type object and generally the same object as returned by object.__class__.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> type('span')
# <class 'str'>

>>> type(99)
# <class 'int'>

>>> type(1.1)
# <class 'float'>

>>> type([1, 2])
# <class 'list'>

>>> type((1, 2))
# <class 'tuple'>

>>> type({1, 2})
# <class 'set'>

>>> type({'a': 1, 'b': 2})
# <class 'dict'>
```
