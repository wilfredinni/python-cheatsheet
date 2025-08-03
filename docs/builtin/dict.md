---
title: Python dict() built-in function - Python Cheatsheet
description: Create a new dictionary. The dict object is the dictionary class. See dict and Mapping Types — dict for documentation about this class.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dict() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#dict">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Create a new dictionary. The dict object is the dictionary class. See dict and Mapping Types — dict for documentation about this class.
  </base-disclaimer-content>
</base-disclaimer>

The `dict()` constructor creates a new dictionary. A dictionary is a collection of key-value pairs.

You can create an empty dictionary, or create a dictionary from keyword arguments or from an iterable of key-value pairs.

### Examples

**Create an empty dictionary:**

```python
my_dict = dict()
print(my_dict)  # Output: {}
```

**Create a dictionary with keyword arguments:**

```python
my_dict = dict(name="John", age=30)
print(my_dict)  # Output: {'name': 'John', 'age': 30}
```

**Create a dictionary from a list of tuples:**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)  # Output: {'name': 'Jane', 'age': 25}
```



```python
>>> a = dict()
>>> type(a)
# <class 'dict'>
```
