---
title: Function
---

# Functions

```python
def hello(name):
    print('Hello {}'.format(name))
```

## Return Values and return Statements

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

## The None Value

```python
spam = print('Hello!')
spam is None
```

Note: never compare to `None` with the `==` operator. Always use `is`.

## print Keyword Arguments

```python
print('Hello', end='')
print('World')
```

```python
print('cats', 'dogs', 'mice')
```

```python
print('cats', 'dogs', 'mice', sep=',')
```

## Local and Global Scope

- Code in the global scope cannot use any local variables.

- However, a local scope can access global variables.

- Code in a function’s local scope cannot use variables in any other local scope.

- You can use the same name for different variables if they are in different scopes. That is, there can be a local variable named spam and a global variable also named spam.

## The global Statement

If you need to modify a global variable from within a function, use the global statement:

```python
def spam():
    global eggs
    eggs = 'spam'

eggs = 'global'
spam()
print(eggs)
```

There are four rules to tell whether a variable is in a local scope or global scope:

1. If a variable is being used in the global scope (that is, outside of all functions), then it is always a global variable.

1. If there is a global statement for that variable in a function, it is a global variable.

1. Otherwise, if the variable is used in an assignment statement in the function, it is a local variable.

1. But if the variable is not used in an assignment statement, it is a global variable.
