---
title: Python dir() built-in function - Python Cheatsheet
description: Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dir() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> dir()
# ['__annotations__', '__builtins__', '__doc__', ...]

>>> dir(1)
# ['__abs__', '__add__', '__and__', '__bool__', ...]

>>> dir('a')
# ['__add__', '__class__', '__contains__', ...]
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
