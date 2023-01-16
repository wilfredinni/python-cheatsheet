---
title: Python bytearray() built-in function - Python Cheatsheet
description: Return a new array of bytes. The bytearray class is a mutable sequence of integers in the range [...]. It has most of the usual methods of mutable sequences, described in Mutable Sequence Types, as well as most methods that the bytes type has [...]
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytearray() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a new array of bytes. The bytearray class is a mutable sequence of integers in the range [...]. It has most of the usual methods of mutable sequences, described in Mutable Sequence Types, as well as most methods that the bytes type has [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

A `bytearray` object in Python is similar to a list of integers, but instead of storing numbers, it stores bytes. These bytes can represent binary data, such as an image or a file, or they can represent ASCII or UTF-8 encoded text.

A `bytearray` object is mutable, meaning its elements can be changed after it is created. It also has a variety of built-in methods that allow you to manipulate the bytes, such as `append()`, `extend()`, `insert()`, and `remove()`.

You can create a `bytearray` object in several ways. One way is to use the `bytearray()` constructor and pass it a string, a bytes object, or a `bytearray` object. For example:

```python
>>> data = "Hello, World!"
>>> bytearray_obj = bytearray(data, "utf-8")
>>> print(bytearray_obj)
# bytearray(b'Hello, World!')
```

Another way is to use the bytes() function and then convert it to a bytearray object using the bytearray() function:

```python
>>> data = b"Hello, World!"
>>> bytearray_obj = bytearray(data)
>>> print(bytearray_obj)
# bytearray(b'Hello, World!')
```

Bytearray objects are useful in situations where you need to manipulate binary data or when you want to efficiently modify large amounts of data.