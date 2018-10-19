# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

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
