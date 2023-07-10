---
title: Python issubclass() built-in function - Python Cheatsheet
description: Return True if class is a subclass (direct, indirect, or virtual) of classinfo. A class is considered a subclass of itself. classinfo may be a tuple of class objects (or recursively, other such tuples) or a Union Type, in which case return True if class is a subclass of any entry in classinfo. In any other case, a TypeError exception is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python issubclass() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return True if class is a subclass (direct, indirect, or virtual) of classinfo. A class is considered a subclass of itself. classinfo may be a tuple of class objects (or recursively, other such tuples) or a Union Type, in which case return True if class is a subclass of any entry in classinfo. In any other case, a TypeError exception is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))  # True
print(issubclass(First, Second)) # False
```
