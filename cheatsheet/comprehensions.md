---
title: Comprehensions
---

## Comprehensions

### List comprehension

```python
a = [1, 3, 5, 7, 9, 11]
[i - 1 for i in a]
```

### Set comprehension

```python
b = {"abc", "def"}
{s.upper() for s in b}
```

### Dict comprehension

```python
c = {'name': 'Pooka', 'age': 5}
{v, k for k, v in c.items()}
```

A List comprehension can be generated from a dictionary:

```python
c = {'name': 'Pooka', 'first_name': 'Oooka'}
["{}:{}".format(k.upper(), v.upper()) for k, v in c.items()]
```
