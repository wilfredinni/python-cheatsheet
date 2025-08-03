---
title: Python tuple() built-in function - Python Cheatsheet
description: Rather than being a function, tuple is actually an immutable sequence type, as documented in Tuples and Sequence Types — list, tuple, range.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python tuple() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Rather than being a function, tuple is actually an immutable sequence type, as documented in Tuples and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

While `tuple` is technically a type, it can be used like a function to create tuples. Tuples are immutable sequences, meaning they cannot be changed after they are created.

The `tuple()` constructor can be used to create an empty tuple or to convert an iterable (like a list) into a tuple.

### Examples

**Create an empty tuple:**

```python
empty_tuple = tuple()
print(empty_tuple)  # Output: ()
```

**Create a tuple from a list:**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)  # Output: (1, 2, 3)
```



```python
>>> t = tuple()
>>> type(t)
# <class 'tuple'>
>>> t
# ()

>>> l = [1, 2, 3]
>>> tuple(l)
# (1, 2, 3)
```

## See also

- <router-link to="/cheatsheet/lists-and-tuples/">Lists and Tuples</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
- <router-link to="/blog/python-data-types/">Python Data Types</router-link>
