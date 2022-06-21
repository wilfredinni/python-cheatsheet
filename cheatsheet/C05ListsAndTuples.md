# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Lists

```python
['cat', 'bat', 'rat', 'elephant']
```

### Getting Individual Values in a List with Indexes

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[0]
```

```python
spam[1]
```

```python
spam[2]
```

```python
spam[3]
```

### Negative Indexes

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[-1]
```

```python
spam[-3]
```

```python
'The {} is afraid of the {}.'.format(spam[-1], spam[-3])
```

### Getting Sublists with Slices

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[0:4]
```

```python
spam[1:3]
```

```python
spam[0:-1]
```

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[:2]
```

```python
spam[1:]
```

```python
spam[:]
```

### Getting a list Length with len

```python
spam = ['cat', 'dog', 'moose']
len(spam)
```

### Changing Values in a List with Indexes

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[1] = 'aardvark'
spam
```

```python
spam[2] = spam[1]
spam
```

```python
spam[-1] = 12345
spam
```

### List Concatenation and List Replication

```python
[1, 2, 3] + ['A', 'B', 'C']
```

```python
['X', 'Y', 'Z'] * 3
```

```python
spam = [1, 2, 3]
spam = spam + ['A', 'B', 'C']
spam
```

### Removing Values from Lists with del Statements

```python
spam = ['cat', 'bat', 'rat', 'elephant']
del spam[2]
spam
```

```python
del spam[2]
spam
```

### Using for Loops with Lists

```python
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']

for i, supply in enumerate(supplies):
    print('Index {} in supplies is: {}'.format(str(i), supply))
```

### Looping Through Multiple Lists with zip

```python
name = ['Pete', 'John', 'Elizabeth']
age = [6, 23, 44]

for n, a in zip(name, age):
    print('{} is {} years old'.format(n, a))
```

### The in and not in Operators

```python
'howdy' in ['hello', 'hi', 'howdy', 'heyas']
```

```python
spam = ['hello', 'hi', 'howdy', 'heyas']
False
```

```python
'howdy' not in spam
```

```python
'cat' not in spam
```

### The Multiple Assignment Trick

The multiple assignment trick is a shortcut that lets you assign multiple variables with the values in a list in one line of code. So instead of doing this:

```python
cat = ['fat', 'orange', 'loud']
size = cat[0]
color = cat[1]
disposition = cat[2]
```

You could type this line of code:

```python
cat = ['fat', 'orange', 'loud']
size, color, disposition = cat
```

The multiple assignment trick can also be used to swap the values in two variables:

```python
a, b = 'Alice', 'Bob'
a, b = b, a
print(a)
```

```python
print(b)
```

### Augmented Assignment Operators

| Operator    | Equivalent        |
| ----------- | ----------------- |
| `spam += 1` | `spam = spam + 1` |
| `spam -= 1` | `spam = spam - 1` |
| `spam *= 1` | `spam = spam * 1` |
| `spam /= 1` | `spam = spam / 1` |
| `spam %= 1` | `spam = spam % 1` |

Examples:

```python
spam = 'Hello'
spam += ' world!'
spam
```

```python
bacon = ['Zophie']
bacon *= 3
bacon
```

### Finding a Value in a List with the index Method

```python
spam = ['Zophie', 'Pooka', 'Fat-tail', 'Pooka']
spam.index('Pooka')
```

### Adding Values to Lists with append and insert

**append()**:

```python
spam = ['cat', 'dog', 'bat']
spam.append('moose')
spam
```

**insert()**:

```python
spam = ['cat', 'dog', 'bat']
spam.insert(1, 'chicken')
spam
```

### Removing Values from Lists with remove

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam.remove('bat')
spam
```

If the value appears multiple times in the list, only the first instance of the value will be removed.

### Sorting the Values in a List with sort

```python
spam = [2, 5, 3.14, 1, -7]
spam.sort()
spam
```

```python
spam = ['ants', 'cats', 'dogs', 'badgers', 'elephants']
spam.sort()
spam
```

You can also pass True for the reverse keyword argument to have sort() sort the values in reverse order:

```python
spam.sort(reverse=True)
spam
```

If you need to sort the values in regular alphabetical order, pass str. lower for the key keyword argument in the sort() method call:

```python
spam = ['a', 'z', 'A', 'Z']
spam.sort(key=str.lower)
spam
```

You can use the built-in function `sorted` to return a new list:

```python
spam = ['ants', 'cats', 'dogs', 'badgers', 'elephants']
sorted(spam)
```

## Tuple Data Type

```python
eggs = ('hello', 42, 0.5)
eggs[0]
```

```python
eggs[1:3]
```

```python
len(eggs)
```

The main way that tuples are different from lists is that tuples, like strings, are immutable.

## Converting Types with the list and tuple Functions

```python
tuple(['cat', 'dog', 5])
```

```python
list(('cat', 'dog', 5))
```

```python
list('hello')
```
