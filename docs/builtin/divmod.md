---
title: Python divmod() built-in function - Python Cheatsheet
description: Take two (non-complex) numbers as arguments and return a pair of numbers consisting of their quotient and remainder when using integer division. With mixed operand types, the rules for binary arithmetic operators apply.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python divmod() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Take two (non-complex) numbers as arguments and return a pair of numbers consisting of their quotient and remainder when using integer division. With mixed operand types, the rules for binary arithmetic operators apply.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `divmod()` function takes two numbers as arguments and returns a tuple containing the quotient and the remainder of their integer division. It's a convenient way to get both results in a single call.

### Examples

```python
# Get quotient and remainder
quotient, remainder = divmod(10, 3)
print(quotient)   # Output: 3
print(remainder)  # Output: 1

# Original examples
print(divmod(2, 2))   # Output: (1, 0)
print(divmod(10, 2))  # Output: (5, 0)
print(divmod(7, 2))   # Output: (3, 1)
```

## See also

- <router-link to="/cheatsheet/numbers">Numbers</router-link>
- <router-link to="/cheatsheet/operators">Operators</router-link>
