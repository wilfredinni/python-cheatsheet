---
title: Python hash() built-in function - Python Cheatsheet
description: Return the hash value of the object (if it has one). Hash values are integers. They are used to quickly compare dictionary keys during a dictionary lookup. Numeric values that compare equal have the same hash value (even if they are of different types, as is the case for 1 and 1.0).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hash() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the hash value of the object (if it has one). Hash values are integers. They are used to quickly compare dictionary keys during a dictionary lookup. Numeric values that compare equal have the same hash value (even if they are of different types, as is the case for 1 and 1.0).
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> hash(1)
# 1
>>> hash('1')
# -3658718886659147670
>>> hash('10')
# 5216539490891759533
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
