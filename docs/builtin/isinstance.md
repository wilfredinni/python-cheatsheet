---
title: Python isinstance() built-in function - Python Cheatsheet
description: Return True if the object argument is an instance of the classinfo argument, or of a (direct, indirect, or virtual) subclass thereof. If object is not an object of the given type, the function always returns False. If classinfo is a tuple of type objects (or recursively, other such tuples) or a Union Type of multiple types, return True if object is an instance of any of the types. If classinfo is not a type or tuple of types and such tuples, a TypeError exception is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python isinstance() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return True if the object argument is an instance of the classinfo argument, or of a (direct, indirect, or virtual) subclass thereof. If object is not an object of the given type, the function always returns False. If classinfo is a tuple of type objects (or recursively, other such tuples) or a Union Type of multiple types, return True if object is an instance of any of the types. If classinfo is not a type or tuple of types and such tuples, a TypeError exception is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> isinstance(1, int)
# True
>>> isinstance(1, str)
# False
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
