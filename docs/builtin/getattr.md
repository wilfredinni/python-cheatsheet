---
title: Python getattr() built-in function - Python Cheatsheet
description: Return the value of the named attribute of object. name must be a string. If the string is the name of one of the object’s attributes, the result is the value of that attribute.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python getattr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the value of the named attribute of object. name must be a string. If the string is the name of one of the object’s attributes, the result is the value of that attribute.
  </base-disclaimer-content>
</base-disclaimer>

## Syntax

```python
getattr(object, name)
```
or
```python
getattr(object, name, default)
```
-`object`: The object whose attribute you want to access.

-`name`: The name of the attribute you want to retrieve.

-`default`: (Optional) The value to be returned if the attribute is not found. If not provided, `None` is returned.

## Example

```python
class Example:
    attribute = "Hello, World!"

# Creating an instance of the class
obj = Example()

# Using getattr to access the attribute
value = getattr(obj, 'attribute', 'Nothing found')

print(value)  # Output: Hello, World!

# If the 'attribute' does not exist then 'Nothing found' will be printed.
```


