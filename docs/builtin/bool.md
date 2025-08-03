---
title: Python bool() built-in function - Python Cheatsheet
description: Return a Boolean value, i.e. one of True or False. x is converted using the standard truth testing procedure. If x is false or omitted, this returns False; otherwise, it returns True. The bool class is a subclass of int. It cannot be subclassed further. Its only instances are False and True.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bool() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a Boolean value, True or False. x is converted using the standard truth testing procedure. If x is false or omitted, this returns False; otherwise, it returns True. The bool class is a subclass of int. It cannot be subclassed further. Its only instances are False and True.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `bool()` function in Python is a built-in function that converts a value to a Boolean (`True` or `False`). It follows the standard truth testing procedure, where values like `0`, `None`, and empty collections are considered `False`, while most other values are `True`. This is fundamental for controlling the flow of your program with conditional statements.

## Examples

```python
>>> bool(0)
# False

>>> bool(1)
# True

>>> bool(2)
# True

>>> bool('3')
# True

>>> bool(False)
# False

>>> bool(True)
# True
```

## See Also

- <router-link :to="'/builtin/int'">int()</router-link>
