---
title: Python abs() built-in function - Python Cheatsheet
description: Return the absolute value of a number. The argument may be an integer, a floating point number, or an object implementing __abs__(). If the argument is a complex number, its magnitude is returned.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python abs() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return the absolute value of a number. The argument may be an integer, a floating point number, or an object implementing <code>__abs__()</code>. If the argument is a complex number, its magnitude is returned.
  </base-disclaimer-content>
</base-disclaimer>

```python
>>> abs(-1)
# 1
>>> abs(0)
# 0
>>> abs(1)
# 1
>>> abs(3.14)
# 3.14
>>> abs(3 + 2j)
# 3.6055512754639896
>>> abs(0x10)
# 16
>>> abs(0b10)
# 2
>>> abs(0o20)
# 16
```
