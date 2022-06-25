---
title: Dictionaries
---

# Dictionaries and Structuring Data

Example Dictionary:

```python
myCat = {'size': 'fat', 'color': 'gray', 'disposition': 'loud'}
```

## The keys-values and items Methods

values():

```python
spam = {'color': 'red', 'age': 42}

for v in spam.values():
    print(v)
```

keys():

```python
for k in spam.keys():
    print(k)
```

items():

```python
for i in spam.items():
    print(i)
```

Using the keys(), values(), and items() methods, a for loop can iterate over the keys, values, or key-value pairs in a dictionary, respectively.

```python
spam = {'color': 'red', 'age': 42}

for k, v in spam.items():
    print('Key: {} Value: {}'.format(k, str(v)))
```

## Checking if a Key or Value Exists in a Dictionary

```python
spam = {'name': 'Zophie', 'age': 7}
'name' in spam.keys()
```

```python
'Zophie' in spam.values()
```

```python
# You can omit the call to keys() when checking for a key
'color' in spam
```

```python
'color' not in spam
```

```python
'color' in spam
```

## The get Method

```python
picnic_items = {'apples': 5, 'cups': 2}
'I am bringing {} cups.'.format(str(picnic_items.get('cups', 0)))
```

```python
'I am bringing {} eggs.'.format(str(picnic_items.get('eggs', 0)))
```

## The setdefault Method

Let's consider this code:

```python
spam = {'name': 'Pooka', 'age': 5}
if 'color' not in spam:
    spam['color'] = 'black'
```

Using `setdefault` we could make the same code more shortly:

```python
spam = {'name': 'Pooka', 'age': 5}
spam.setdefault('color', 'black')
```

```python
spam
```

```python
spam.setdefault('color', 'white')
```

```python
spam
```

## Pretty Printing

```python
import pprint

message = 'It was a bright cold day in April, and the clocks were striking thirteen.'
count = {}

for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)
```

## Merge two dictionaries

```python
# in Python 3.5+:
x = {'a': 1, 'b': 2}
y = {'b': 3, 'c': 4}
z = {**x, **y}
z
```
