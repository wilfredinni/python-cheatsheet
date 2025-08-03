---
title: Python property() built-in function - Python Cheatsheet
description: Return a property attribute.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python property() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a property attribute.
  </base-disclaimer-content>
</base-disclaimer>

The `property()` function is used to create property attributes. A property attribute is a special kind of attribute that has getter, setter, and deleter methods. This allows you to add logic to getting, setting, or deleting an attribute's value.

It's more common to use the `@property` decorator, which is a more convenient way to use `property()`.

### Example

Here's an example of using `property()` to create a read-only attribute:

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Getting name")
        return self._name

    # Create a property
    name = property(get_name)

p = Person("John")
print(p.name)  # This calls get_name()
# Output:
# Getting name
# John

# p.name = "Jane" # This would raise an AttributeError because there is no setter
```

And here is the more common way to do it with the `@property` decorator:

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Getting name")
        return self._name

p = Person("John")
print(p.name)
# Output:
# Getting name
# John
```

## See also

- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
