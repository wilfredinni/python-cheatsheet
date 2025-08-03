---
title: Python object() built-in function - Python Cheatsheet
description: Return a new featureless object. object is a base for all classes. It has methods that are common to all instances of Python classes. This function does not accept any arguments.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python object() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a new featureless object. object is a base for all classes. It has methods that are common to all instances of Python classes. This function does not accept any arguments.
  </base-disclaimer-content>
</base-disclaimer>

The `object()` function returns a new, empty, featureless object. This object is the base for all classes in Python. It doesn't have any special attributes or methods.

While you can create `object` instances, it's not something you'll do often in day-to-day programming. It's more of a fundamental building block of Python's object model.

### Example

```python
# Create a new object
o = object()

# See its type
print(type(o))  # Output: <class 'object'>

# It has no attributes you can set
# o.name = "test" # This would raise an AttributeError
```

## See also

- <router-link to="/cheatsheet/classes">Classes</router-link>
