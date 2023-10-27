---
title: Python Decorators - Python Cheatsheet
description: A Python Decorator is a syntax that provide a concise and reusable way for extending a function or a class.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Decorators
</base-title>

A Python Decorator provides a concise and reusable way for extending a function or a class.

## Bare bone decorator

A decorator in its simplest form is a function that takes another function as an argument and returns a wrapper. The following example shows the creation of a decorator and its usage.

```python
def your_decorator(func):
  def wrapper():
    # Do stuff before func...
    print("Before func!")
    func()
    # Do stuff after func...
    print("After func!")
  return wrapper

@your_decorator
def foo():
  print("Hello World!")

foo()
# Before func!
# Hello World!
# After func!
```

## Decorator for a function with parameters

```python
def your_decorator(func):
  def wrapper(*args,**kwargs):
    # Do stuff before func...
    print("Before func!") 
    func(*args,**kwargs)
    # Do stuff after func...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")

# Before func!
# My name is Jack
# After func!
```

## Template for a basic decorator

This template is useful for most decorator use-cases. It is valid for functions with or without parameters, and with or without a return value.

```python
import functools

def your_decorator(func):
  @functools.wraps(func) # For preserving the metadata of func.
  def wrapper(*args,**kwargs):
    # Do stuff before func...
    result = func(*args,**kwargs)
    # Do stuff after func..
    return result
  return wrapper
```

## Decorator with parameters

You can also define parameters for the decorator to use.

```python
import functools

def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func) # For preserving the metadata of func.
    def wrapper(*args,**kwargs):
      # Do stuff before func possibly using arg...
      result = func(*args,**kwargs)
      # Do stuff after func possibly using arg...
      return result
    return wrapper
  return decorator
```

To use this decorator:

```python
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## Class based decorators

A decorator can also be defined as a class instead of a method. This is useful for maintaining and updating a state, such as in the following example, where we count the number of calls made to a method:

```python
class CountCallNumber:

  def __init__(self, func):
    self.func = func
    self.call_number = 0

  def __call__(self, *args, **kwargs):
    self.call_number += 1
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)

@CountCallNumber
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")
# This is execution number 1
# Hi! My name is Jack

say_hi("James")
# This is execution number 2
# Hi! My name is James
```
<base-disclaimer>
  <base-disclaimer-title>
    Count Example
  </base-disclaimer-title>
  <base-disclaimer-content>
  This count example is inspired by Patrick Loeber's <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">YouTube tutorial</a>.
  </base-disclaimer-content>
</base-disclaimer>







