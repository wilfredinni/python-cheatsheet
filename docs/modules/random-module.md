---
title: Python Random Module - Python Cheatsheet
description: The random module is a built-in module that allow us to generate random elements.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Random Module
</base-title>

The [random](https://docs.python.org/3/library/random.html) module is a built-in module that allow us to generate random elements.

```python
import random
```

## seed()

The `seed` method is used to initialize the random number generator.

```python
>>> random.seed(1)
>>> random.random()
# 0.13436424411240122
```

Setting the seed to a number will always return the same random number:

```python
>>> random.seed(1)
>>> random.random()
# 0.13436424411240122

>>> random.seed(1)
>>> random.random()
# 0.13436424411240122

>>> random.seed(1)
>>> random.random()
# 0.13436424411240122

>>> random.seed(1)
>>> random.random()
# 0.13436424411240122

>>> random.seed(1)
>>> random.random()
# 0.13436424411240122
```

The default value of the `seed` method is the _current system time_, that is why we always get a different number:

```python
>>> random.random()
# 0.8474337369372327
>>> random.random()
# 0.763774618976614
>>> random.random()
# 0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

This method returns a random number between a given start and stop parameters:

```python
>>> random.randint(1, 5)
# 3
>>> random.randint(1, 5)
# 2
>>> random.randint(1, 5)
# 5
>>> random.randint(1, 5)
# 1
>>> random.randint(1, 5)
# 3
>>> random.randint(1, 5)
# 1
```

## choice()

The `choice` method return a randomly selected element from an iterable, like a `list`, `set` or `str`:

```python
>>> random.choice([1, 2, 3, 4])
# 1
>>> random.choice([1, 2, 3, 4])
# 2
>>> random.choice([1, 2, 3, 4])
# 4
>>> random.choice([1, 2, 3, 4])
# 4
```

## shuffle()

The `shuffle` method takes in an iterable and shuffle it:

```python
>>> my_list = [1, 2, 3, 4]

>>> random.shuffle(my_list)
>>> my_list
# [1, 4, 3, 2]

>>> random.shuffle(my_list)
>>> my_list
# [2, 4, 3, 1]

>>> random.shuffle(my_list)
>>> my_list
# [4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample` returns a list with a random selection from an iterable. The number of elements returned is equal to the `k` parameter:

```python
>>> random.sample([1, 2, 3, 4], 1)
# [3]
>>> random.sample([1, 2, 3, 4], 2)
# [3, 4]
>>> random.sample([1, 2, 3, 4], 3)
# [4, 3, 2]
>>> random.sample([1, 2, 3, 4], 4)
# [1, 2, 4, 3]
```

## random()

The `random` method returns a random floating point number between 0.0 and 1.0:

```python
>>> random.random()
# 0.4143139993007743
>>> random.random()
# 0.17300740157905092
>>> random.random()
# 0.548798761388153
>>> random.random()
# 0.7030407620656315
```

## uniform()

the `uniform` method is similar to `randint`, but return a floating point number:

```python
>>> random.uniform(1, 5)
# 3.697943322009309
>>> random.uniform(1, 5)
# 2.498812082006561
>>> random.uniform(1, 5)
# 2.7558465201782525
>>> random.uniform(1, 5)
# 3.0337059529999273
```
