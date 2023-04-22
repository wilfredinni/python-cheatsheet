---
title: Python Comprehensions - Python Cheatsheet
description: List comprehensions provide a concise way to create lists
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Comprehensions
</base-title>

List Comprehensions are a special kind of syntax that let us create lists out of other lists, and are incredibly useful when dealing with numbers and with one or two levels of nested for loops.

<base-disclaimer>
  <base-disclaimer-title>
    From the Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    List comprehensions provide a concise way to create lists. [...] or to create a subsequence of those elements that satisfy a certain condition.
  </base-disclaimer-content>
</base-disclaimer>

Read <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link> for a more in-deep or introduction.

## List comprehension

This is how we create a new list from an existing collection with a For Loop:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)
...
>>> new_list
# ['Charles', 'Susan', 'Patrick', 'George']
```

And this is how we do the same with a List Comprehension:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George']

>>> new_list = [n for n in names]
>>> new_list
# ['Charles', 'Susan', 'Patrick', 'George']
```

We can do the same with numbers:

```python
>>> n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
>>> n
# [(1, 1), (1, 2), (2, 1), (2, 2)]
```

## Adding conditionals

If we want `new_list` to have only the names that start with C, with a for loop, we would do it like this:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)
...
>>> print(new_list)
# ['Charles', 'Carol']
```

In a List Comprehension, we add the `if` statement at the end:

```python
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

To use an `if-else` statement in a List Comprehension:

```python
>>> nums = [1, 2, 3, 4, 5, 6]
>>> new_list = [num*2 if num % 2 == 0 else num for num in nums]
>>> print(new_list)
# [1, 4, 3, 8, 5, 12]
```

<base-disclaimer>
  <base-disclaimer-title>
    Set and Dict comprehensions
  </base-disclaimer-title>
  <base-disclaimer-content>
    The basics of `list` comprehensions also apply to <b>sets</b> and <b>dictionaries</b>.
  </base-disclaimer-content>
</base-disclaimer>

## Set comprehension

```python
>>> b = {"abc", "def"}
>>> {s.upper() for s in b}
{"ABC", "DEF"}
```

## Dict comprehension

```python
>>> c = {'name': 'Pooka', 'age': 5}
>>> {v: k for k, v in c.items()}
{'Pooka': 'name', 5: 'age'}
```

A List comprehension can be generated from a dictionary:

```python
>>> c = {'name': 'Pooka', 'age': 5}
>>> ["{}:{}".format(k.upper(), v) for k, v in c.items()]
['NAME:Pooka', 'AGE:5']
```
