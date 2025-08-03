---
title: Python frozenset() built-in function - Python Cheatsheet
description: Return a new frozenset object, optionally with elements taken from iterable. frozenset is a built-in class. See frozenset and Set Types — set, frozenset for documentation about this class.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python frozenset() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a new frozenset object, optionally with elements taken from iterable. <router-link to="/builtin/frozenset">frozenset</router-link> is a built-in class. See <router-link to="/builtin/frozenset">frozenset</router-link> and Set Types — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> for documentation about this class.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> frozenset([1, 2, 3])
# frozenset({1, 2, 3})

>>> frozenset({1, 2, 3})
# frozenset({1, 2, 3})

>>> frozenset((1, 2, 3))
# frozenset({1, 2, 3})
```

## See also

- <router-link to="/builtin/set">`set()`</router-link>
