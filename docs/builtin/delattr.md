---
title: Python delattr() built-in function - Python Cheatsheet
description: This is a relative of setattr(). The arguments are an object and a string. The string must be the name of one of the object’s attributes. The function deletes the named attribute, provided the object allows it. For example, delattr(x, 'foobar') is equivalent to del x.foobar.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python delattr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   This is a relative of setattr(). The arguments are an object and a string. The string must be the name of one of the object’s attributes. The function deletes the named attribute, provided the object allows it. For example, delattr(x, 'foobar') is equivalent to del x.foobar.
  </base-disclaimer-content>
</base-disclaimer>

The `delattr()` function is used to delete an attribute from an object. It takes two arguments: the object and the name of the attribute to delete (as a string). It's the counterpart to `setattr()`.

### Examples

**Deleting an attribute from an object:**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("John", 30)
print(person.__dict__)  # Output: {'name': 'John', 'age': 30}

delattr(person, 'age')
print(person.__dict__)  # Output: {'name': 'John'}
```

**Trying to delete a non-existent attribute:**

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

car = Car("Toyota", "Corolla")
try:
    delattr(car, 'year')
except AttributeError as e:
    print(f"Error: {e}")
# Error: 'Car' object has no attribute 'year'
```
