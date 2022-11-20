---
title: Python oct() built-in function - Python Cheatsheet
description: Convert an integer number to an octal string prefixed with “0o”. The result is a valid Python expression. If x is not a Python int object, it has to define an __index__() method that returns an integer.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python oct() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convert an integer number to an octal string prefixed with “0o”. The result is a valid Python expression. If x is not a Python int object, it has to define an __index__() method that returns an integer.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> oct(1)
# '0o1'
>>> oct(10)
# '0o12'
>>> oct(100)
# '0o144'
>>> oct(1000)
# '0o1750'
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
