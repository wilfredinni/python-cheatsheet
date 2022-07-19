---
title: Dictionaries - Python Cheatsheet
description: In Python, a dictionary is an ordered (from Python > 3.7) collection of key, value pairs.
---

# Dictionaries

In Python, a dictionary is an _ordered_ (from Python > 3.7) collection of `key`: `value` pairs.

<base-disclaimer>
  <base-disclaimer-title>
    From the Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    The main operations on a dictionary are storing a value with some key and extracting the value given the key. It is also possible to delete a key:value pair with <code>del</code>.
  </base-disclaimer-content>
</base-disclaimer>

Example Dictionary:

```python
myCat = {
    'size': 'fat',
    'color': 'gray',
    'disposition': 'loud'
}
```

## The values() method

Get the **values** of the dictionary:

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for value in pet.values():
...     print(value)
...
# red
# 42
```

## The keys() method

Get the **keys** of the dictionary:

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for key in pet.keys():
...     print(key)
...
# color
# age
```

## The items() method

Get the **items** of a dictionary and return them as a [Tuple](/cheatsheet/lists-and-tuples#the-tuple-data-type):

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for item in pet.items():
...     print(item)
...
# ('color', 'red')
# ('age', 42)
```

Using the `keys()`, `values()`, and `items()` methods, a for loop can iterate over the keys, values, or key-value pairs in a dictionary, respectively.

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for key, value in pet.items():
...     print(f'Key: {key} Value: {value}')
...
# Key: color Value: red
# Key: age Value: 42
```

## Checking keys in a Dictionary

```python
>>> person = {'name': 'Rose', 'age': 33}

>>> 'name' in person.keys()
# True

>>> 'height' in person.keys()
# False

>>> 'skin' in person # You can omit keys()
# False
```

## Checking values in a Dictionary

```python
>>>  person = {'name': 'Rose', 'age': 33}

>>> 'Rose' in person.values()
# True

>>> 33 in person.values()
# False
```

## The get() Method

The `get` method returns the value of an item with by using the key. If the key doesn't exist, it returns `None`:

```python
>>> wife = {'name': 'Rose', 'age': 33}

>>> f'My wife name is {wife.get("name")}'
# 'My wife name is Rose'

>>> f'She is {wife.get("age")} years old.'
# 'She is 33 years old.'

>>> f'She is deeply in love with {wife.get("husband")}'
# 'She is deeply in love with None'
```

You can also change the default `None` value for other of your choice:

```python
>>> wife = {'name': 'Rose', 'age': 33}

>>> f'She is deeply in love with {wife.get("husband", "sweetheart")}'
# 'She is deeply in love with sweetheart'
```

## The setdefault() Method

It's possible to add an item to a dictionary in this way:

```python
>>> wife = {'name': 'Rose', 'age': 33}
>>> if 'has_hair' not in wife:
...     wife['has_hair'] = True
```

Using `setdefault` we could make the same code more short:

```python
>>> wife = {'name': 'Rose', 'age': 33}
>>> wife.setdefault('has_hair', True)
>>> wife
# {'name': 'Rose', 'age': 33, 'has_hair': True}
```

## Pretty Printing

```python
>>> import pprint

>>> wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
>>> pprint.pprint(wife)
# {'age': 33,
#  'eye_color': 'brown',
#  'hair_color': 'brown',
#  'has_hair': True,
#  'height': 1.6,
#  'name': 'Rose'}
```

## Merge two dictionaries

For Python 3.5+:

```python
>>> dict_a = {'a': 1, 'b': 2}
>>> dict_b = {'b': 3, 'c': 4}
>>> dict_c = {**dict_a, **dict_b}
>>> dict_c
# {'a': 1, 'b': 3, 'c': 4}
```
