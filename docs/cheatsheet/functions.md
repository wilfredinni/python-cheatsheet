---
title: Python Functions - Python Cheatsheet
description: In Python, A function is a block of organized code that is used to perform a single task.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functions
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A function is a block of organized code that is used to perform a single task. They provide better modularity for your application and reuse-ability.
  </base-disclaimer-content>
</base-disclaimer>

## Function Arguments

A function can take `arguments` and `return values`:

In the following example, the function **say_hello** receives the argument "name" and prints a greeting:

```python
>>> def say_hello(name):
...    print(f'Hello {name}')
...
>>> say_hello('Carlos')
# Hello Carlos

>>> say_hello('Wanda')
# Hello Wanda

>>> say_hello('Rose')
# Hello Rose
```

## Keyword Arguments

To improve code readability, we should be as explicit as possible. We can achieve this in our functions by using `Keyword Arguments`:

```python
>>> def say_hi(name, greeting):
...    print(f"{greeting} {name}")
...
>>> # without keyword arguments
>>> say_hi('John', 'Hello')
# Hello John

>>> # with keyword arguments
>>> say_hi(name='Anna', greeting='Hi')
# Hi Anna
```

## Return Values

When creating a function using the `def` statement, you can specify what the return value should be with a `return` statement. A return statement consists of the following:

- The `return` keyword.

- The value or expression that the function should return.

```python
>>> def sum_two_numbers(number_1, number_2):
...    return number_1 + number_2
...
>>> result = sum_two_numbers(7, 8)
>>> print(result)
# 15
```

## Local and Global Scope

- Code in the global scope cannot use any local variables.

- However, a local scope can access global variables.

- Code in a function’s local scope cannot use variables in any other local scope.

- You can use the same name for different variables if they are in different scopes. That is, there can be a local variable named spam and a global variable also named spam.

```python
global_variable = 'I am available everywhere'

>>> def some_function():
...     print(global_variable)  # because is global
...     local_variable = "only available within this function"
...     print(local_variable)
...
>>> # the following code will throw error because
>>> # 'local_variable' only exists inside 'some_function'
>>> print(local_variable)
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## The global Statement

If you need to modify a global variable from within a function, use the global statement:

```python
>>> def spam():
...     global eggs
...     eggs = 'spam'
...
>>> eggs = 'global'
>>> spam()
>>> print(eggs)
```

There are four rules to tell whether a variable is in a local scope or global scope:

1. If a variable is being used in the global scope (that is, outside all functions), then it is always a global variable.

1. If there is a global statement for that variable in a function, it is a global variable.

1. Otherwise, if the variable is used in an assignment statement in the function, it is a local variable.

1. But if the variable is not used in an assignment statement, it is a global variable.

## Lambda Functions

In Python, a lambda function is a single-line, anonymous function, which can have any number of arguments, but it can only have one expression.

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Python 3 Tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda is a minimal function definition that can be used inside an expression. Unlike FunctionDef, body holds a single node.
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    Single line expression
  </base-warning-title>
  <base-warning-content>
    Lambda functions can only evaluate an expression, like a single line of code.
  </base-warning-content>
</base-warning>

This function:

```python
>>> def add(x, y):
...     return x + y
...
>>> add(5, 3)
# 8
```

Is equivalent to the _lambda_ function:

```python
>>> add = lambda x, y: x + y
>>> add(5, 3)
# 8
```

Like regular nested functions, lambdas also work as lexical closures:

```python
>>> def make_adder(n):
...     return lambda x: x + n
...
>>> plus_3 = make_adder(3)
>>> plus_5 = make_adder(5)

>>> plus_3(4)
# 7
>>> plus_5(4)
# 9
```
