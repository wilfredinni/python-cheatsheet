---
title: Python next() built-in function - Python Cheatsheet
description: Retrieve the next item from the iterator by calling its __next__() method. If default is given, it is returned if the iterator is exhausted, otherwise StopIteration is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python next() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retrieve the next item from the iterator by calling its __next__() method. If default is given, it is returned if the iterator is exhausted, otherwise StopIteration is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> i = iter([1, 2, 3])
>>> i
# <list_iterator object at 0x7f93158badc0>
>>> i.__next__()
# 1
>>> i.__next__()
# 2
>>> i.__next__()
# 3
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
