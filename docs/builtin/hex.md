---
title: Python hex() built-in function - Python Cheatsheet
description: Convert an integer number to a lowercase hexadecimal string prefixed with “0x”. If x is not a Python int object, it has to define an __index__() method that returns an integer.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hex() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convert an integer number to a lowercase hexadecimal string prefixed with “0x”. If x is not a Python int object, it has to define an __index__() method that returns an integer.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> hex(1)
# '0x1'
>>> hex(10)
# '0xa'
>>> hex(100)
# '0x64'
>>> hex(1000)
# '0x3e8'
```
