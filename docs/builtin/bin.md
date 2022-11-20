---
title: Python bin() built-in function - Python Cheatsheet
description: Convert an integer number to a binary string prefixed with “0b”. The result is a valid Python expression. If x is not a Python int object, it has to define an __index__() method that returns an integer.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bin() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Convert an integer number to a binary string prefixed with “0b”. The result is a valid Python expression. If x is not a Python int object, it has to define an <code>__index__()</code> method that returns an integer.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> bin(1)
# '0b1'

>>> bin(10)
# '0b1010'

>>> bin(100)
# '0b1100100'

>>> bin(1000)
# '0b1111101000'
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
