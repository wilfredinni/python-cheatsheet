---
title: Sets
---

# sets

<base-disclaimer>
  <base-disclaimer-title>
    From the Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries.
    Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.
  </base-disclaimer-content>
</base-disclaimer>

## Initializing a set

There are two ways to create sets: using curly braces `{}` and the bult-in function `set()`

```python
s = {1, 2, 3}
s = set([1, 2, 3])
```

When creating an empty set, be sure to not use the curly braces `{}` or you will get an empty dictionary instead.

```python
s = {}
type(s)
```

## Unordered collections of unique elements

A set automatically remove all the duplicate values.

```python
s = {1, 2, 3, 2, 3, 4}
s
```

And as an unordered data type, they can't be indexed.

```python
s = {1, 2, 3}
s(0)
```

## set add and update

Using the `add()` method we can add a single element to the set.

```python
s = {1, 2, 3}
s.add(4)
s
```

And with `update()`, multiple ones .

```python
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])
s  # remember, sets automatically remove duplicates
```

## set remove and discard

Both methods will remove an element from the set, but `remove()` will raise a `key error` if the value doesn't exist.

```python
s = {1, 2, 3}
s.remove(3)
s
```

```python
s.remove(3)
```

`discard()` won't raise any errors.

```python
s = {1, 2, 3}
s.discard(3)
s
```

```python
s.discard(3)
```

## set union

`union()` or `|` will create a new set that contains all the elements from the sets provided.

```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2'
```

## set intersection

`intersection` or `&` will return a set containing only the elements that are common to all of them.

```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3'
```

## set difference

`difference` or `-` will return only the elements that are in one of the sets.

```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.difference(s2)  # or 's1 - s2'
```

## set symetric_difference

`symetric_difference` or `^` will return all the elements that are not common between them.

```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2'
```
