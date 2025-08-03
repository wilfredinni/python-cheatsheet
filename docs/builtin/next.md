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

## Introduction

The `next()` function retrieves the next item from an iterator. If the iterator is exhausted, it raises a `StopIteration` exception.

You can also provide a default value to be returned if the iterator is exhausted, which prevents the `StopIteration` exception.

### Examples

**Using `next()` with an iterator:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))  # Output: 1
print(next(my_iter))  # Output: 2

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
# Output: Iterator is exhausted
```

**Using `next()` with a default value:**

```python
my_iter = iter([1])
print(next(my_iter, "default")) # Output: 1
print(next(my_iter, "default")) # Output: default
```

More examples:

```python
>>> i = iter([1, 2, 3])
>>> i
# <list_iterator object at ...>
>>> next(i)
# 1
>>> next(i)
# 2
>>> next(i)
# 3
```

## See also

- <router-link to="/builtin/iter">iter()</router-link>
