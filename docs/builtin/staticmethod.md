---
title: Python staticmethod() built-in function - Python Cheatsheet
description: Transform a method into a static method.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python staticmethod() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Transform a method into a static method.
  </base-disclaimer-content>
</base-disclaimer>
The @staticmethod is a function decorator that will transform a class method into a static method that functions in a similar behavior to a C++ or other oop language static methods.

You can turn a class method into a static method by applying the <code>@staticmethod</code> decorator to a function in a class. For example:

```python
>>> class C:
>>>    @staticmethod
>>>    def function(): ....
```

Static methods can be called on the class itself like

```python
>>> class Class:
>>>    @staticmethod
>>>    def function():
>>>        print("X")
>>>
>>> Class.function()
>>> # X
```

Or on an instance of the class like

```python
>>> class Class:
>>>    @staticmethod
>>>    def function():
>>>        print("X")
>>>
>>> new_class = Class()
>>> new_class.function()
>>> # X
```

The <code>@staticmethod</code> is in the form of a decorator the basics being it is a function that will return another function. This will be documented at a later time.
