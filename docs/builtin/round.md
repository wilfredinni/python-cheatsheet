---
title: Python round() built-in function - Python Cheatsheet
description: Return number rounded to ndigits precision after the decimal point. If ndigits is omitted or is None, it returns the nearest integer to its input.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python round() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return number rounded to ndigits precision after the decimal point. If ndigits is omitted or is None, it returns the nearest integer to its input.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> round(1.4)
# 1
>>> round(1.5)
# 2
>>> round(2.1)
# 2
>>> round(2.9)
# 3
>>> round(2/3, ndigits=3)
# 0.667
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
