---
title: Python id() built-in function - Python Cheatsheet
description: Return the “identity” of an object. This is an integer which is guaranteed to be unique and constant for this object during its lifetime. Two objects with non-overlapping lifetimes may have the same id() value.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python id() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the “identity” of an object. This is an integer which is guaranteed to be unique and constant for this object during its lifetime. Two objects with non-overlapping lifetimes may have the same id() value.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> id(1)
# 9788960
>>> id('1')
# 140269689726000
>>> id([1, 2])
# 140269672924928
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
