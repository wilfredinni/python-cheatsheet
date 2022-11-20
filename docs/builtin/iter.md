---
title: Python iter() built-in function - Python Cheatsheet
description: Return an iterator object. The first argument is interpreted very differently depending on the presence of the second argument. Without a second argument, object must be a collection object which supports the iterable protocol, or it must support the sequence protocol. If it does not support either of those protocols, TypeError is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python iter() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return an iterator object. The first argument is interpreted very differently depending on the presence of the second argument. Without a second argument, object must be a collection object which supports the iterable protocol, or it must support the sequence protocol. If it does not support either of those protocols, TypeError is raised.
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
