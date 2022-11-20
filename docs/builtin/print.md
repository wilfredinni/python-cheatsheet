---
title: Python print() built-in function - Python Cheatsheet
description: Print objects to the text stream file, separated by sep and followed by end. sep, end, file, and flush, if present, must be given as keyword arguments.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python print() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Print objects to the text stream file, separated by sep and followed by end. sep, end, file, and flush, if present, must be given as keyword arguments.
  </base-disclaimer-content>
</base-disclaimer>

The `print()` function writes the value of the argument(s) it is given. [...] it handles multiple arguments, floating point-quantities, and strings. Strings are printed without quotes, and a space is inserted between items, so you can format things nicely:

```python
>>> print('Hello world!')
# Hello world!

>>> a = 1
>>> print('Hello world!', a)
# Hello world! 1
```

## The end keyword

The keyword argument `end` can be used to avoid the newline after the output, or end the output with a different string:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
>>> for word in phrase:
...     print(word, end='-')
...
# printed-with-a-dash-in-between-
```

## The sep keyword

The keyword `sep` specify how to separate the objects, if there is more than one:

```python
print('cats', 'dogs', 'mice', sep=',')
# cats,dogs,mice
```
