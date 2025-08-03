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

The `iter()` function returns an iterator object. An iterator is an object that can be iterated (looped) upon. It's what powers `for` loops in Python.

You can use `iter()` to get an iterator from any iterable object, like a list, tuple, or string.

### Examples

**Getting an iterator from a list:**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))  # Output: 1
print(next(my_iter))  # Output: 2
print(next(my_iter))  # Output: 3
```



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
