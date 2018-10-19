# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Flow Control

### Comparison Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `<`      | Less than                |
| `>`      | Greater Than             |
| `<=`     | Less than or Equal to    |
| `>=`     | Greater than or Equal to |

These operators evaluate to True or False depending on the values you give them.

Examples:

```python
42 == 42
```

```python
40 == 42
```

```python
'hello' == 'hello'
```

```python
'hello' == 'Hello'
```

```python
'dog' != 'cat'
```

```python
42 == 42.0
```

```python
42 == '42'
```

### Boolean evaluation

Never use `==` or `!=` operator to evaluate boolean operation. Use the `is` or `is not` operators,
or use implicit boolean evaluation.

NO (even if they are valid Python):

```python
True == True
```

```python
True != False
```

YES (even if they are valid Python):

```python
True is True
```

```python
True is not False
```

These statements are equivalent:

```Python
if a is True:
   pass
if a is not False:
   pass
if a:
   pass
```

And these as well:

```Python
if a is False:
   pass
if a is not True:
   pass
if not a:
   pass
```

### Boolean Operators

There are three Boolean operators: and, or, and not.

The *and* Operator’s *Truth* Table:

| Expression      | Evaluates to |
| --------------- | ------------ |
| True and True   | True         |
| True and False  | False        |
| False and True  | False        |
| False and False | False        |

The *or* Operator’s *Truth* Table:

| Expression     | Evaluates to |
| -------------- | ------------ |
| True or True   | True         |
| True or False  | True         |
| False or True  | True         |
| False or False | False        |

The *not* Operator’s *Truth* Table:

| Expression | Evaluates to |
| ---------- | ------------ |
| not True   | False        |
| not False  | True         |

### Mixing Boolean and Comparison Operators

```python
(4 < 5) and (5 < 6)
```

```python
(4 < 5) and (9 < 6)
```

```python
(1 == 2) or (2 == 2)
```

You can also use multiple Boolean operators in an expression, along with the comparison operators:

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

### if Statements

```python
if name == 'Alice':
    print('Hi, Alice.')
```

### else Statements

```python
name = 'Bob'

if name == 'Alice':
    print('Hi, Alice.')
else:
    print('Hello, stranger.')
```

### elif Statements

```python
name = 'Bob'
age = 5

if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')
```

```python
name = 'Bob'
age = 30

if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')
else:
    print('You are neither Alice nor a little kid.')
```

### while Loop Statements

```python
spam = 0

while spam < 5:
    print('Hello, world.')
    spam = spam + 1
```

### break Statements

 If the execution reaches a break statement, it immediately exits the while loop’s clause:

```python
while True:
    print('Please type your name.')
    name = input()
    if name == 'your name':
        break

print('Thank you!')
```

### continue Statements

When the program execution reaches a continue statement, the program execution immediately jumps back to the start of the loop.

```python
while True:
    print('Who are you?')
    name = input()
    if name != 'Joe':
        continue
    print('Hello, Joe. What is the password? (It is a fish.)')
    password = input()
    if password == 'swordfish':
        break

print('Access granted.')
```

### for Loops and the range() Function

```python
print('My name is')
for i in range(5):
    print('Jimmy Five Times ({})'.format(str(i)))
```

The *range()* function can also be called with three arguments. The first two arguments will be the start and stop values, and the third will be the step argument. The step is the amount that the variable is increased by after each iteration.

```python
for i in range(0, 10, 2):
   print(i)
```

You can even use a negative number for the step argument to make the for loop count down instead of up.

```python
for i in range(5, -1, -1):
    print(i)
```

### For else statement

This allows to specify a statement to execute in case of the full loop has been executed. Only
useful when a `break` condition can occur in the loop:

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item of the list is equal to 3")
```

### Importing Modules

```python
import random

for i in range(5):
    print(random.randint(1, 10))
```

```python
import random, sys, os, math
```

```python
from random import *.
```

### Ending a Program with sys.exit

```python
import sys

while True:
    print('Type exit to exit.')
    response = input()
    if response == 'exit':
        sys.exit()
    print('You typed {}.'.format(response))
```
