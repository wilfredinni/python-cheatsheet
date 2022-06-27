---
title: Basics
description: The basics of python
---

# Python Basics

## Math Operators

From **Highest** to **Lowest** precedence:

| Operators | Operation         | Example         |
| --------- | ----------------- | --------------- |
| \*\*      | Exponent          | `2 ** 3 = 8`    |
| %         | Modulus/Remainder | `22 % 8 = 6`    |
| //        | Integer division  | `22 // 8 = 2`   |
| /         | Division          | `22 / 8 = 2.75` |
| \*        | Multiplication    | `3 * 3 = 9`     |
| -         | Subtraction       | `5 - 2 = 3`     |
| +         | Addition          | `2 + 2 = 4`     |

Examples of expressions in the interactive shell:

```python
>>> 2 + 3 * 6
20
```

```python
>>> (2 + 3) * 6
30
```

```python
>>> 2 ** 8
256
```

```python
>>> 23 // 7
3
```

```python
>>> 23 % 7
2
```

```python
>>> (5 - 1) * ((7 + 1) / (3 - 1))
16.0
```

## Data Types

| Data Type              | Examples                                  |
| ---------------------- | ----------------------------------------- |
| Integers               | `-2, -1, 0, 1, 2, 3, 4, 5`                |
| Floating-point numbers | `-1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25` |
| Strings                | `'a', 'aa', 'aaa', 'Hello!', '11 cats'`   |

## Concatenation and Replication

String concatenation:

```python
>>> 'Alice' 'Bob'
'AliceBob'
```

Note: Avoid `+` operator for string concatenation. Prefer string formatting.

String Replication:

```python
>>> 'Alice' * 5
'AliceAliceAliceAliceAlice'
```

## Variables

You can name a variable anything as long as it obeys the following rules:

1. It can be only one word.
1. It can use only letters, numbers, and the underscore (`_`) character.
1. It can’t begin with a number.
1. Variable name starting with an underscore (`_`) are considered as "unuseful`.

Example:

```python
>>> spam = 'Hello'
>>> spam
'Hello'
```

```python
>>> _spam = 'Hello'
```

`_spam` should not be used again in the code.

## Comments

Inline comment:

```python
# This is a comment
```

Multiline comment:

```python
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

## The print() Function

```python
>>> print('Hello world!')
Hello world!
```

```python
>>> a = 1
>>> print('Hello world!', a)
Hello world! 1
```

## The input() Function

Example Code:

```python
>>> print('What is your name?')   # ask for their name
>>> myName = input()
>>> print('It is good to meet you, {}'.format(myName))
What is your name?
Al
It is good to meet you, Al
```

## The len() Function

Evaluates to the integer value of the number of characters in a string:

```python
>>> len('hello')
5
```

Note: test of emptiness of strings, lists, dictionary, etc, should **not** use len, but prefer direct
boolean evaluation.

```python
>>> a = [1, 2, 3]
>>> if a:
>>>     print("the list is not empty!")
```

## The str(), int(), and float() Functions

Integer to String or Float:

```python
>>> str(29)
'29'
```

```python
>>> print('I am {} years old.'.format(str(29)))
I am 29 years old.
```

```python
>>> str(-3.14)
'-3.14'
```

Float to Integer:

```python
>>> int(7.7)
7
```

```python
>>> int(7.7) + 1
8
```
