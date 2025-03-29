---
title: Python pow() built-in function - Python Cheatsheet
description: The pow() function returns the power of a number.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python pow() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      The pow() function returns the power of a number.It takes two or three arguments:
      pow(base, exp): Returns base raised to the power of exp (base ** exp).
      pow(base, exp, mod): Returns (base ** exp) % mod (for modular arithmetic).
      Result is computed more efficiently than base ** exp % mod, if mod arg is present.
  </base-disclaimer-content>
</base-disclaimer>

## Example

```python
# Basic exponentiation
>>> pow(2, 3)
# 8

# Using three arguments (modular exponentiation)
>>> pow(2, 3, 5)
# 3  (since 2^3 = 8, and 8 % 5 = 3)

# Works with negative exponents (returns float)
>>> pow(2, -3)
# 0.125  (since 2^(-3) = 1/8)
```


<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
