---
title: Python memoryview() built-in function - Python Cheatsheet
description: Return a “memory view” object created from the given argument. See Memory Views for more information.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python memoryview() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a “memory view” object created from the given argument. See Memory Views for more information.
  </base-disclaimer-content>
</base-disclaimer>

The `memoryview()` function creates a memory view object from a given argument. A memory view allows you to access the memory of another object, like a `bytes` or `bytearray` object, without making a copy. This is highly efficient for large data, as it avoids memory duplication.

### Examples

Here's how you can use `memoryview()`:

```python
# Create a bytearray
data = bytearray(b'hello world')

# Create a memory view of the data
view = memoryview(data)

# Access the data through the view
print(view[0])         # Output: 104 (ASCII for 'h')
print(view[6:11])      # Output: <memory at ...> (a slice of the memory)
print(view[6:11].tobytes()) # Output: b'world'

# You can also modify the underlying data through the view
view[0] = 72 # ASCII for 'H'
print(data)    # Output: bytearray(b'Hello world')
```
