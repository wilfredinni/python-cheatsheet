---
title: Python complex() built-in function - Python Cheatsheet
description: Return a complex number with the value real + imag*1j or convert a string or number to a complex number. [...] Each argument may be any numeric type (including complex). If imag is omitted, it defaults to zero and the constructor serves as a numeric conversion like int and float. If both arguments are omitted, returns 0j.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python complex() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a complex number with the value real + imag*1j or convert a string or number to a complex number. [...] Each argument may be any numeric type (including complex). If imag is omitted, it defaults to zero and the constructor serves as a numeric conversion like int and float. If both arguments are omitted, returns 0j.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> complex(1)
# (1+0j)
>>> complex('1')
# (1+0j)
>>> complex(100)
# (100+0j)
>>> complex('100')
# (100+0j)
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
