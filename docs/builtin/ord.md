---
title: Python ord() built-in function - Python Cheatsheet
description: Given a string representing one Unicode character, return an integer representing the Unicode code point of that character.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ord() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Given a string representing one Unicode character, return an integer representing the Unicode code point of that character.
  </base-disclaimer-content>
</base-disclaimer>

The `ord()` function is the inverse of `chr()`. It takes a single character string and returns its Unicode code point, which is an integer.

### Examples

```python
# Get the Unicode code point of a character
print(ord('A'))  # Output: 65
print(ord('€'))  # Output: 8364

# Original examples
print(ord('1'))  # Output: 49
print(ord('a'))  # Output: 97
```
