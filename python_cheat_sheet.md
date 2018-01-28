# Python Cheatsheet

Basic cheatsheet for Python based on the book writted by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/).

## PDF Version

[Download](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)

### Table of Content:

- [Python Basics](#python-basics)
  - [Math Operators](#math-operators)
  - [Data Types](#data-types)
  - [String Concatenation and Replication](#string-concatenation-and-replication)
  - [Variables](#variables)
  - [Comments](#comments)
  - [The print() Function](#the-print-function)
  - [The input() Function](#the-input-function)
  - [The len() Function](#the-len-function)
  - [The str(), int(), and float() Functions](#the-str-int-and-float-functions)
- [Flow Control](#flow-control)
  - [Comparison Operators](#comparison-operators)
  - [Boolean Operators](#boolean-operators)
  - [Mixing Boolean and Comparison Operators](#mixing-boolean-and-comparison-operators)
  - [if Statements](#if-statements)
  - [else Statements](#else-statements)
  - [elif Statements](#elif-statements)
  - [while Loop Statements](#while-loop-statements)
  - [break Statements](#break-statements)
  - [continue Statements](#continue-statements)
  - [for Loops and the range() Function]loops-and-the-range-function)
  - [Importing Modules](#importing-modules)
  - [Ending a Program Early with sys.exit()](#ending-a-program-early-with-sysexit)
- [Functions](#functions)
  - [Return Values and return Statements](#return-values-and-return-statements)
  - [The None Value](#the-none-value)
  - [Keyword Arguments and print()](#keyword-arguments-and-print)
  - [Local and Global Scope](#local-and-global-scope)
  - [The global Statement](#the-global-statement)
- [Exception Handling](#exception-handling)
- [Dictionaries and Structuring Data](#dictionaries-and-structuring-data)
  - [The keys(), values(), and items() Methods](#the-keys-values-and-items-methods)
  - [Checking Whether a Key or Value Exists in a Dictionary](#checking-whether-a-key-or-value-exists-in-a-dictionary)
  - [The get() Method](#the-get-method)
  - [The setdefault() Method](#the-setdefault-method)
  - [Pretty Printing](#pretty-printing)

## Python Basics

### Math Operators

From **Higuest** to **Lowest** precedence:

| Operators | Operation        | Example       |
| --------- | ---------------- | ------------- |
| **        | Exponent         | 2 ** 3 = 8    |
| %         | Modulus/Remaider | 22 % 8 = 16   |
| //        | Integer division | 22 // 8 = 2   |
| /         | Division         | 22 / 8 = 2.75 |
| *         | Multiplication   | 3 * 3 = 15    |
| -         | Subtraction      | 5 - 2 = 3     |
| +         | Addition         | 2 + 2 = 4     |

Examples of expressions in the interactive shell:

```python
>>> 2 + 3 * 6
20

>>> (2 + 3) * 6
30

>>> 2 ** 8
256

>>> 23 // 7
3

>>> 23 % 7
2

>>> (5 - 1) * ((7 + 1) / (3 - 1))
16.0
```

### Data Types

| Data Type              | Examples                                |
| ---------------------- | --------------------------------------- |
| Integers               | -2, -1, 0, 1, 2, 3, 4, 5                |
| Floating-point numbers | -1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25 |
| Strings                | 'a', 'aa', 'aaa', 'Hello!', '11 cats'   |

### String Concatenation and Replication

String concatenation:

```python
>>> 'Alice' + 'Bob'
'AliceBob'
```

String Replication:

```python
>>> 'Alice' * 5
'AliceAliceAliceAliceAlice'
```

### Variables

You can name a variable anything as long as it obeys the following three rules:

1. It can be only one word.
1. It can use only letters, numbers, and the underscore (_) character.
1. It can’t begin with a number.

Example:

```python
>>> spam = 'Hello'
>>> spam
'Hello'
```

### Comments

Inline comment:

```python
# This is a comment
```

Multiline Comment:

```python
"""
This is a Multiline Comment
You can also use:
''' multiline comment '''
"""
```

### The print() Function

```python
>>> print('Hello world!')
Hello world!
```

### The input() Function

Example Code:

```python
>>> print('What is your name?')    # ask for their name
>>> myName = input()
>>> print('It is good to meet you, ' + myName)
```

Output:

```python
What is your name?
Al
It is good to meet you, Al
```

### The len() Function

Evaluates to the integer value of the number of characters in a string:

```python
>>> len('hello')
5
```

### The str(), int(), and float() Functions

Convert Between Data Types:

Integer to String or Float:

```python
>>> str(29)
'29'
>>> print('I am ' + str(29) + ' years old.')
I am 29 years old.
>>> str(-3.14)
'-3.14'
```

Float to Integer:

```python
>>> int(7.7)
7
>>> int(7.7) + 1
8
```

## Flow Control

### Comparison Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| ==       | Equal to                 |
| !=       | Not equal to             |
| <        | Less than                |
| >        | Greater Than             |
| <=       | Less than or Equal to    |
| >=       | Greater than or Equal to |

These operators evaluate to True or False depending on the values you give them:

Examples:

```python
>>> 42 == 42
True
>>> 40 == 42
False
>>> 'hello' == 'hello'
True
>>> 'hello' == 'Hello'
False
>>> 'dog' != 'cat'
True
>>> True == True
True
>>> True != False
True
>>> 42 == 42.0
True
>>> 42 == '42'
False
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
>>> (4 < 5) and (5 < 6)
True
>>> (4 < 5) and (9 < 6)
False
>>> (1 == 2) or (2 == 2)
True
```

You can also use multiple Boolean operators in an expression, along with the comparison operators:

```python
>>> 2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
True
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

 If the execution reaches a break statement, it immediately exits the while loop’s clause.

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
  if name != 'Joe':       #(1)
    continue              #(2)
  print('Hello, Joe. What is the password? (It is a fish.)') 
  password = input()      #(3)
  if password == 'swordfish':
    break                 #(4)
print('Access granted.')  #(5)
```

### for Loops and the range() Function

```python
print('My name is')
for i in range(5):
    print('Jimmy Five Times (' + str(i) + ')')
```

Output:

```python
My name is
Jimmy Five Times (0)
Jimmy Five Times (1)
Jimmy Five Times (2)
Jimmy Five Times (3)
Jimmy Five Times (4)
```

The *range()* function can also be called with three arguments. The first two arguments will be the start and stop values, and the third will be the step argument. The step is the amount that the variable is increased by after each iteration.

```python
for i in range(0, 10, 2):
    print(i)
```

Output:

```python
0
2
4
6
8
```

You can even use a negative number for the step argument to make the for loop count down instead of up.

```python
for i in range(5, -1, -1):
    print(i)
```

Output:

```python
5
4
3
2
1
0
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

### Ending a Program Early with sys.exit()

```python
import sys

while True:
    print('Type exit to exit.')
    response = input()
    if response == 'exit':
        sys.exit()
    print('You typed ' + response + '.')
```

## Functions

```python
def hello(name):
    print('Hello ' + name)

hello('Alice')
hello('Bob')
```

Output:

```python
Hello Alice
Hello Bob
```

### Return Values and return Statements

When creating a function using the def statement, you can specify what the return value should be with a return statement. A return statement consists of the following:

- The return keyword.

- The value or expression that the function should return.

```python
import random
def getAnswer(answerNumber):
    if answerNumber == 1:
        return 'It is certain'
    elif answerNumber == 2:
        return 'It is decidedly so'
    elif answerNumber == 3:
        return 'Yes'
    elif answerNumber == 4:
        return 'Reply hazy try again'
    elif answerNumber == 5:
        return 'Ask again later'
    elif answerNumber == 6:
        return 'Concentrate and ask again'
    elif answerNumber == 7:
        return 'My reply is no'
    elif answerNumber == 8:
        return 'Outlook not so good'
    elif answerNumber == 9:
        return 'Very doubtful'

r = random.randint(1, 9)
fortune = getAnswer(r)
print(fortune)
```

### The None Value

```python
>>> spam = print('Hello!')
Hello!
>>> None == spam
True
```

### Keyword Arguments and print()

```python
print('Hello', end='')
print('World')
```

Output:

```python
HelloWorld
```

```python
>>> print('cats', 'dogs', 'mice')
cats dogs mice
```

```python
>>> print('cats', 'dogs', 'mice', sep=',')
cats,dogs,mice
```

### Local and Global Scope

- Code in the global scope cannot use any local variables.

- However, a local scope can access global variables.

- Code in a function’s local scope cannot use variables in any other local scope.

- You can use the same name for different variables if they are in different scopes. That is, there can be a local variable named spam and a global variable also named spam.

### The global Statement

If you need to modify a global variable from within a function, use the global statement:

```python
def spam():
    global eggs
    eggs = 'spam'

eggs = 'global'
spam()
print(eggs)
```

Output:

```python
spam
```

There are four rules to tell whether a variable is in a local scope or global scope:

1. If a variable is being used in the global scope (that is, outside of all functions), then it is always a global variable.

1. If there is a global statement for that variable in a function, it is a global variable.

1. Otherwise, if the variable is used in an assignment statement in the function, it is a local variable.

1. But if the variable is not used in an assignment statement, it is a global variable.

## Exception Handling

```python
def spam(divideBy):
    try:
        return 42 / divideBy
    except ZeroDivisionError:
        print('Error: Invalid argument.')

print(spam(2))
print(spam(12))
print(spam(0))
print(spam(1))
```

Output:

```python
21.0
3.5
Error: Invalid argument.
None
42.0
```

## Dictionaries and Structuring Data

Example Dictionary:

```python
myCat = {'size': 'fat', 'color': 'gray', 'disposition': 'loud'}
```

### The keys(), values(), and items() Methods

#### values()

```python
>>> spam = {'color': 'red', 'age': 42}
>>> for v in spam.values():
        print(v)
```

Output:

```python
red
42
```

#### keys()

```python
>>> for k in spam.keys():
        print(k)
```

Output:

```python
color
age
```

#### items()

```python
>>> for i in spam.items():
        print(i)
```

Output:

```python
('color', 'red')
('age', 42)
```
Using the keys(), values(), and items() methods, a for loop can iterate over the keys, values, or key-value pairs in a dictionary, respectively

```python

>>> spam = {'color': 'red', 'age': 42}
>>> for k, v in spam.items():
        print('Key: ' + k + ' Value: ' + str(v))
```

Output:

```python
Key: age Value: 42
Key: color Value: red
```

### Checking Whether a Key or Value Exists in a Dictionary

```python
>>> spam = {'name': 'Zophie', 'age': 7}
>>> 'name' in spam.keys()
True
>>> 'Zophie' in spam.values()
True
>>> 'color' in spam.keys()
False
>>> 'color' not in spam.keys()
True
>>> 'color' in spam
False
```

### The get() Method

```python
>>> picnicItems = {'apples': 5, 'cups': 2}
>>> 'I am bringing ' + str(picnicItems.get('cups', 0)) + ' cups.'
'I am bringing 2 cups.'
>>> 'I am bringing ' + str(picnicItems.get('eggs', 0)) + ' eggs.'
'I am bringing 0 eggs.'
```

### The setdefault() Method

```python
spam = {'name': 'Pooka', 'age': 5}
if 'color' not in spam:
    spam['color'] = 'black'
```

The above code is equal to:

```python
>>> spam = {'name': 'Pooka', 'age': 5}
>>> spam.setdefault('color', 'black')
'black'
>>> spam
{'color': 'black', 'age': 5, 'name': 'Pooka'}
>>> spam.setdefault('color', 'white')
'black'
>>> spam
{'color': 'black', 'age': 5, 'name': 'Pooka'}
```

### Pretty Printing

```python
import pprint
message = 'It was a bright cold day in April, and the clocks were striking
thirteen.'
count = {}

for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)
```

Output:

```python
{' ': 13,
 ',': 1,
 '.': 1,
 'A': 1,
 'I': 1,
 'a': 4,
 'b': 1,
 'c': 3,
 'd': 3,
 'e': 5,
 'g': 2,
 'h': 3,
 'i': 6,
 'k': 2,
 'l': 3,
 'n': 4,
 'o': 2,
 'p': 1,
 'r': 5,
 's': 3,
 't': 6,
 'w': 2,
 'y': 1}
```
