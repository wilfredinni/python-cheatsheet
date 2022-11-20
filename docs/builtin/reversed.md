---
title: Python reversed() built-in function - Python Cheatsheet
description: Return a reverse iterator. seq must be an object which has a __reversed__() method or supports the sequence protocol (the __len__() method and the __getitem__() method with integer arguments starting at 0).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python reversed() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a reverse iterator. seq must be an object which has a __reversed__() method or supports the sequence protocol (the __len__() method and the __getitem__() method with integer arguments starting at 0).
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> i = reversed([1, 2, 3])
>>> i.__next__()
# 3
>>> i.__next__()
# 2
>>> i.__next__()
# 1
>>> i
# <list_reverseiterator object at 0x7f93159ded00>
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
