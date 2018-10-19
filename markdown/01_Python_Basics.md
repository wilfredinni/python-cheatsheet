# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## The Zen of Python

From the [PEP 20 -- The Zen of Python](https://www.python.org/dev/peps/pep-0020/):

> Long time Pythoneer Tim Peters succinctly channels the BDFL's guiding principles for Python's design into 20 aphorisms, only 19 of which have been written down.

```python
import this
```

## Python Basics

### Math Operators

From **Highest** to **Lowest** precedence:

| Operators | Operation        | Example         |
| --------- | ---------------- | --------------- |
| **        | Exponent         | `2 ** 3 = 8`    |
| %         | Modulus/Remaider | `22 % 8 = 6`    |
| //        | Integer division | `22 // 8 = 2`   |
| /         | Division         | `22 / 8 = 2.75` |
| *         | Multiplication   | `3 * 3 = 9`     |
| -         | Subtraction      | `5 - 2 = 3`     |
| +         | Addition         | `2 + 2 = 4`     |

Examples of expressions in the interactive shell:

```python
2 + 3 * 6
```

```python
(2 + 3) * 6
```

```python
2 ** 8
```

```python
23 // 7
```

```python
23 % 7
```

```python
(5 - 1) * ((7 + 1) / (3 - 1))
```

### Data Types

| Data Type              | Examples                                  |
| ---------------------- | ----------------------------------------- |
| Integers               | `-2, -1, 0, 1, 2, 3, 4, 5`                |
| Floating-point numbers | `-1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25` |
| Strings                | `'a', 'aa', 'aaa', 'Hello!', '11 cats'`   |

### String Concatenation and Replication

String concatenation:

```python
'Alice' 'Bob'
```

Note: Avoid `+` operator for string concatenation. Prefer string formatting.

String Replication:

```python
'Alice' * 5
```

### Variables

You can name a variable anything as long as it obeys the following three rules:

1. It can be only one word.
2. It can use only letters, numbers, and the underscore (`_`) character.
3. It can’t begin with a number.
4. Variable name starting with an underscore (`_`) are considered as "unuseful`.

Example:

```python
spam = 'Hello'
```

```python
_spam = 'Hello'
```

`_spam` should not be used again in the code.

### Comments

Inline comment:

```python
# This is a comment
```

Multiline comment:

```Python
# This is a
# multiline comment
```

Code with a comment:

```python
a = 1  # initialization
```

Please note the two spaces in front of the comment.

Function docstring:

```python
def foo():
    """
    This is a function docstring
    You can also use:
    ''' Function Docstring '''
    """
```

### The print Function

```python
print('Hello world!')
```

```python
a = 1
print('Hello world!', a)
```

### The input Function

Example Code:

```python
print('What is your name?')   # ask for their name
myName = input()
print('It is good to meet you, {}'.format(myName))
```

### The len Function

Evaluates to the integer value of the number of characters in a string:

```python
len('hello')
```

Note: test of emptiness of strings, lists, dictionary, etc, should **not** use len, but prefer direct
boolean evaluation.

```python
a = [1, 2, 3]
if a:
    print("the list is not empty!")
```

### The str, int, and float Functions

Integer to String or Float:

```python
str(29)
```

```python
print('I am {} years old.'.format(str(29)))
```

```python
str(-3.14)
```

Float to Integer:

```python
int(7.7)
```

```python
int(7.7) + 1
```
