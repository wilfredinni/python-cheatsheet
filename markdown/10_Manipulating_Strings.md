# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Manipulating Strings

### Escape Characters

| Escape character | Prints as            |
| ---------------- | -------------------- |
| `\'`             | Single quote         |
| `\"`             | Double quote         |
| `\t`             | Tab                  |
| `\n`             | Newline (line break) |
| `\\`             | Backslash            |

Example:

```python
print("Hello there!\nHow are you?\nI\'m doing fine.")
Hello there!
How are you?
```

### Raw Strings

A raw string completely ignores all escape characters and prints any backslash that appears in the string.

```python
print(r'That is Carol\'s cat.')
```

Note: mostly used for regular expression definition (see `re` package)

### Multiline Strings with Triple Quotes

```python
print('''Dear Alice,

Eve's cat has been arrested for catnapping, cat burglary, and extortion.

Sincerely,
Bob''')
```

To keep a nicer flow in your code, you can use the `dedent` function from the `textwrap` standard package.

```python
from textwrap import dedent

def my_function():
    print('''
        Dear Alice,

        Eve's cat has been arrested for catnapping, cat burglary, and extortion.

        Sincerely,
        Bob
        ''').strip()
```

This generates the same string than before.

### Indexing and Slicing Strings

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

```python
spam = 'Hello world!'
spam[0]
```

```python
spam[4]
```

```python
spam[-1]
```

Slicing:

```python

spam[0:5]
```

```python
spam[:5]
```

```python
spam[6:]
```

```python
spam[6:-1]
```

```python
spam[:-1]
```

```python
spam[::-1]
```

```python
spam = 'Hello world!'
fizz = spam[0:5]
fizz
```

### The in and not in Operators with Strings

```python
'Hello' in 'Hello World'
```

```python
'Hello' in 'Hello'
```

```python
'HELLO' in 'Hello World'
```

```python
'' in 'spam'
```

```python
'cats' not in 'cats and dogs'
```

### The in and not in Operators with list

```python
a = [1, 2, 3, 4]
5 in a
```

```python
2 in a
```

### The upper, lower, isupper, and islower String Methods

`upper()` and `lower()`:

```python
spam = 'Hello world!'
spam = spam.upper()
spam
```

```python
spam = spam.lower()
spam
```

isupper() and islower():

```python
spam = 'Hello world!'
spam.islower()
```

```python
spam.isupper()
```

```python
'HELLO'.isupper()
```

```python
'abc12345'.islower()
```

```python
'12345'.islower()
```

```python
'12345'.isupper()
```

### The isX String Methods

- **isalpha()** returns True if the string consists only of letters and is not blank.
- **isalnum()** returns True if the string consists only of lettersand numbers and is not blank.
- **isdecimal()** returns True if the string consists only ofnumeric characters and is not blank.
- **isspace()** returns True if the string consists only of spaces,tabs, and new-lines and is not blank.
- **istitle()** returns True if the string consists only of wordsthat begin with an uppercase letter followed by onlylowercase letters.

### The startswith and endswith String Methods

```python
'Hello world!'.startswith('Hello')
```

```python
'Hello world!'.endswith('world!')
```

```python
'abc123'.startswith('abcdef')
```

```python
'abc123'.endswith('12')
```

```python
'Hello world!'.startswith('Hello world!')
```

```python
'Hello world!'.endswith('Hello world!')
```

### The join and split String Methods

join():

```python
', '.join(['cats', 'rats', 'bats'])
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

split():

```python
'My name is Simon'.split()
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

```python
'My name is Simon'.split('m')
```

### Justifying Text with rjust, ljust, and center

rjust() and ljust():

```python
'Hello'.rjust(10)
```

```python
'Hello'.rjust(20)
```

```python
'Hello World'.rjust(20)
```

```python
'Hello'.ljust(10)
```

An optional second argument to rjust() and ljust() will specify a fill character other than a space character. Enter the following into the interactive shell:

```python
'Hello'.rjust(20, '*')
```

```python
'Hello'.ljust(20, '-')
```

center():

```python
'Hello'.center(20)
```

```python
'Hello'.center(20, '=')
```

### Removing Whitespace with strip, rstrip, and lstrip

```python
spam = '    Hello World     '
spam.strip()
```

```python
spam.lstrip()
```

```python
spam.rstrip()
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

### Copying and Pasting Strings with the pyperclip Module

First, install `pypeerclip` with pip:

```shell
pip install pyperclip
```

```python
import pyperclip

pyperclip.copy('Hello world!')
pyperclip.paste()
```
