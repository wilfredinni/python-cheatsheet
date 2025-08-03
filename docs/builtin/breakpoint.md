---
title: Python breakpoint() built-in function - Python Cheatsheet
description: This function drops you into the debugger at the call site. Specifically, it calls sys.breakpointhook(), passing args and kws straight through. By default, sys.breakpointhook() calls pdb.set_trace() expecting no arguments. In this case, it is purely a convenience function so you don’t have to explicitly import pdb or type as much code to enter the debugger. However, sys.breakpointhook() can be set to some other function and breakpoint() will automatically call that, allowing you to drop into the debugger of choice.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python breakpoint() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    This function drops you into the debugger at the call site [...].
    <br/>
    Python breakpoint() calls Python debugger at a given line 
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `breakpoint()` function in Python, introduced in Python 3.7, provides an easy way to enter the Python debugger (`pdb`) at a specific point in your code. It's a convenient alternative to manually importing `pdb` and calling `pdb.set_trace()`. This function simplifies the debugging process, allowing you to inspect variables and step through your code interactively.

## Example

```python
>>> # Create a loop over 5 integers
>>> for i in range(5):
...     # Stream i to stdout
...     print(i)
...     # Create breakpoint at # 3
...     if i == 3:
...         breakpoint()
...
# 0
# 1
# 2
# 3
# > c:\users\user\path\to\your\project\example.py(24)<module>()
# -> for i in range(5):
# (Pdb)
```

## See Also

- <router-link :to="'/modules/pdb'">pdb module</router-link>
