---
title: Python sorted() built-in function - Python Cheatsheet
description: Return a new sorted list from the items in iterable.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sorted() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a new sorted list from the items in iterable.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> sorted([1, 2, 3, 7, 4])
# [1, 2, 3, 4, 7]

>>> sorted(['a', 'h', 'e'])
# ['a', 'e', 'h']

>>> sorted([1, 2, 3, 7, 4], reverse=True)
# [7, 4, 3, 2, 1]

>>> sorted(['a', 'h', 'e'], reverse=True)
# ['h', 'e', 'a']
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
