---
title: Python open() built-in function - Python Cheatsheet
description: Open file and return a corresponding file object. If the file cannot be opened, an OSError is raised. See Reading and Writing Files for more examples of how to use this function.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python open() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Open file and return a corresponding file object. If the file cannot be opened, an OSError is raised. See Reading and Writing Files for more examples of how to use this function.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> spam = open('spam.txt', mode='x')
>>> spam.write('My first line\n\n')
>>> spam.close()
# Opens a brand new file (in 'x' mode will throw if already exists)

>>> with open('spam.txt', mode='a') as spam:
...     spam.write('My second line')
# Appends to file and automatically closes afterward

>>> with open('spam.txt') as spam:
...     content = spam.read()
...     print(content)
# My first line
#
# My second line
```
