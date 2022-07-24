---
title: Python callable() built-in function - Python Cheatsheet
description: Return True if the object argument appears callable, False if not. If this returns True, it is still possible that a call fails, but if it is False, calling object will never succeed. Note that classes are callable (calling a class returns a new instance); instances are callable if their class has a __call__() method.
---

# Python callable() built-in function

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return True if the object argument appears callable, False if not. If this returns True, it is still possible that a call fails, but if it is False, calling object will never succeed. Note that classes are callable (calling a class returns a new instance); instances are callable if their class has a __call__() method.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> def my_function():
...     print('this is a test function')
...
>>> callable(my_function)
# True
>>> callable(True)
# False
>>> callable(1)
# False
>>> callable('a')
# False
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
