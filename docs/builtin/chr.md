---
title: Python chr() built-in function - Python Cheatsheet
description: Return the string representing a character whose Unicode code point is the integer i. For example, chr(97) returns the string 'a', while chr(8364) returns the string '€'. This is the inverse of ord().
---

<base-title :title="frontmatter.title" :description="frontmatter.description">

# Python chr() built-in function

</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the string representing a character whose Unicode code point is the integer i. For example, chr(97) returns the string 'a', while chr(8364) returns the string '€'. This is the inverse of ord().
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> chr(1)
# '\x01'
>>> chr(10)
# '\n'
>>> chr(100)
# 'd'
>>> chr(1000)
# 'Ϩ'
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
