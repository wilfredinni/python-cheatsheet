---
title: Python String Formatting - Python Cheatsheet
description: If your are using Python 3.6+, string f-strings are the recommended way to format strings.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python String Formatting
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a href="https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    The formatting operations described here (<b>% operator</b>) exhibit a variety of quirks that lead to a number of common errors [...]. Using the newer <a href="#formatted-string-literals-or-f-strings">formatted string literals</a> [...] helps avoid these errors. These alternatives also provide more powerful, flexible and extensible approaches to formatting text.
  </base-disclaimer-content>
</base-disclaimer>

## % operator

<base-warning>
  <base-warning-title>
    Prefer String Literals
  </base-warning-title>
  <base-warning-content>
    For new code, using <a href="#strformat">str.format</a>, or <a href="#formatted-string-literals-or-f-strings">formatted string literals</a> (Python 3.6+) over the <code>%</code> operator is strongly recommended.
  </base-warning-content>
</base-warning>

```python
>>> name = 'Pete'
>>> 'Hello %s' % name
# "Hello Pete"
```

We can use the `%d` format specifier to convert an int value to a string:

```python
>>> num = 5
>>> 'I have %d apples' % num
# "I have 5 apples"
```

## str.format

Python 3 introduced a new way to do string formatting that was later back-ported to Python 2.7. This makes the syntax for string formatting more regular.

```python
>>> name = 'John'
>>> age = 20

>>> "Hello I'm {}, my age is {}".format(name, age)
# "Hello I'm John, my age is 20"

>>> "Hello I'm {0}, my age is {1}".format(name, age)
# "Hello I'm John, my age is 20"
```

## Formatted String Literals or f-Strings

If your are using Python 3.6+, string `f-Strings` are the recommended way to format strings.

<base-disclaimer>
  <base-disclaimer-title>
    From the <a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A formatted string literal or f-string is a string literal that is prefixed with `f` or `F`. These strings may contain replacement fields, which are expressions delimited by curly braces {}. While other string literals always have a constant value, formatted strings are really expressions evaluated at run time.
  </base-disclaimer-content>
</base-disclaimer>

```python
>>> name = 'Elizabeth'
>>> f'Hello {name}!'
# 'Hello Elizabeth!'
```

It is even possible to do inline arithmetic with it:

```python
>>> a = 5
>>> b = 10
>>> f'Five plus ten is {a + b} and not {2 * (a + b)}.'
# 'Five plus ten is 15 and not 30.'
```

### Multiline f-Strings

```python
>>> name = 'Robert'
>>> messages = 12
>>> (
... f'Hi, {name}. '
... f'You have {messages} unread messages'
... )
# 'Hi, Robert. You have 12 unread messages'
```

### The `=` specifier

This will print the expression and its value:

```python
>>> from datetime import datetime
>>> now = datetime.now().strftime("%b/%d/%Y - %H:%M:%S")
>>> f'date and time: {now=}'
# "date and time: now='Nov/14/2022 - 20:50:01'"
```

### Adding spaces or characters

```python
>>> f"{name.upper() = :-^20}"
# 'name.upper() = -------ROBERT-------'
>>>
>>> f"{name.upper() = :^20}"
# 'name.upper() =        ROBERT       '
>>>
>>> f"{name.upper() = :20}"
# 'name.upper() = ROBERT              '
```

## Formatting Digits

Adding thousands separator

```python
>>> a = 10000000
>>> f"{a:,}"
# '10,000,000'
```

Rounding

```python
>>> a = 3.1415926
>>> f"{a:.2f}"
# '3.14'
```

Showing as Percentage

```python
>>> a = 0.816562
>>> f"{a:.2%}"
# '81.66%'
```

### Number formatting table

| Number     | Format  | Output    | description                                   |
| ---------- | ------- | --------- | --------------------------------------------- |
| 3.1415926  | {:.2f}  | 3.14      | Format float 2 decimal places                 |
| 3.1415926  | {:+.2f} | +3.14     | Format float 2 decimal places with sign       |
| -1         | {:+.2f} | -1.00     | Format float 2 decimal places with sign       |
| 2.71828    | {:.0f}  | 3         | Format float with no decimal places           |
| 4          | {:0>2d} | 04        | Pad number with zeros (left padding, width 2) |
| 4          | {:x<4d} | 4xxx      | Pad number with x’s (right padding, width 4)  |
| 10         | {:x<4d} | 10xx      | Pad number with x’s (right padding, width 4)  |
| 1000000    | {:,}    | 1,000,000 | Number format with comma separator            |
| 0.35       | {:.2%}  | 35.00%    | Format percentage                             |
| 1000000000 | {:.2e}  | 1.00e+09  | Exponent notation                             |
| 11         | {:11d}  | 11        | Right-aligned (default, width 10)             |
| 11         | {:<11d} | 11        | Left-aligned (width 10)                       |
| 11         | {:^11d} | 11        | Center aligned (width 10)                     |

## Template Strings

A simpler and less powerful mechanism, but it is recommended when handling strings generated by users. Due to their reduced complexity, template strings are a safer choice.

```python
>>> from string import Template
>>> name = 'Elizabeth'
>>> t = Template('Hey $name!')
>>> t.substitute(name=name)
# 'Hey Elizabeth!'
```
