---
title: Comprehensions
description: List comprehensions provide a concise way to create lists
---

# Comprehensions

List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.

## List comprehension

```python
a = [1, 3, 5, 7, 9, 11]
[i - 1 for i in a]
```

## Set comprehension

```python
b = {"abc", "def"}
{s.upper() for s in b}
```

## Dict comprehension

```python
c = {'name': 'Pooka', 'age': 5}
{v, k for k, v in c.items()}
```

A List comprehension can be generated from a dictionary:

```python
c = {'name': 'Pooka', 'first_name': 'Oooka'}
["{}:{}".format(k.upper(), v.upper()) for k, v in c.items()]
```
