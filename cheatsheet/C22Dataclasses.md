# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Dataclasses

`Dataclasses` are python classes but are suited for storing data objects.
This module provides a decorator and functions for automatically adding generated special methods such as `__init__()` and `__repr__()` to user-defined classes.

### Features

1. They store data and represent a certain data type. Ex: A number. For people familiar with ORMs, a model instance is a data object. It represents a specific kind of entity. It holds attributes that define or represent the entity.

2. They can be compared to other objects of the same type. Ex: A number can be greater than, less than, or equal to another number.

Python 3.7 provides a decorator dataclass that is used to convert a class into a dataclass.

python 2.7

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

with dataclass

```python
from dataclasses import dataclass

@dataclass
class Number:
    val: int

obj = Number(2)
obj.val
```

### Default values

It is easy to add default values to the fields of your data class.

```python
from dataclasses import dataclass

@dataclass
class Product:
    name: str
    count: int = 0
    price: float = 0.0

obj = Product("Python")
obj.name
```

```python
obj.count
```

```python
obj.price
```

### Type hints

It is mandatory to define the data type in dataclass. However, If you don't want specify the datatype then, use `typing.Any`.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```
