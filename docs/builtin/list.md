---
title: Python list() built-in function - Python Cheatsheet
description: Rather than being a function, list is actually a mutable sequence type, as documented in Lists and Sequence Types — list, tuple, range.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python list() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Rather than being a function, list is actually a mutable sequence type, as documented in Lists and Sequence Types — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

In Python, `list` is not a function but a built-in mutable sequence type. This means it's a data structure that can hold an ordered collection of items, and you can change its contents. You can create a list using square brackets `[]` or the `list()` constructor.

## Examples

```python
>>> l = list()
>>> l
# []
>>> l.append(1)
>>> l.append(2)
>>> l
# [1, 2]
```

## See also

- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/cheatsheet/basics/#list-comprehensions">List Comprehensions</router-link>
