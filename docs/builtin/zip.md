---
title: Python zip() built-in function - Python Cheatsheet
description: Iterate over several iterables in parallel, producing tuples with an item from each one.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python zip() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Iterate over several iterables in parallel, producing tuples with an item from each one.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> price = [100, 50, 80, 40]
>>>
>>> for item, amount in zip(furniture, price):
...     print(f'The {item} costs ${amount}')
# The table costs $100
# The chair costs $50
# The rack costs $80
# The shelf costs $40
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
