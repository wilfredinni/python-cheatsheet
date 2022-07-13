---
title: Args and Kwargs - Python Cheatsheet
description: args and kwargs may seem scary, but the truth is that they are not that difficult to grasp and have the power to grant your functions with flexibility and readability
---

# Args and Kwargs

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python 3 tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> and <code>**kwargs</code> may seem scary, but the truth is that they are not that difficult to grasp and have the power to grant your functions with flexibility and readability. If you know about tuples and dictionaries, you are ready to go.
  </base-disclaimer-content>
</base-disclaimer>

For a more in-deep article about `args and kwargs` you can read <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link>.

## Introduction

The names `args and kwargs` are arbitrary, the important thing are the `*` and `**` operators. They can mean:

1. In a function declaration, `*` means “pack all remaining positional arguments into a tuple named `<name>`”, while `**` is the same for keyword arguments (except it uses a dictionary, not a tuple).

2. In a function call, `*` means “unpack tuple or list named `<name>` to positional arguments at this position”, while `**` is the same for keyword arguments.

For example, you can make a function that you can use to call any other function, regardless of what parameters it has:

```python
def forward(f, *args, **kwargs):
    return f(*args, **kwargs)
```

Inside forward, args is a tuple (of all positional arguments except the first one because we specified it - the f), kwargs is a dict. Then we call f and unpack them, so they become normal arguments to f.

You use `*args` when you have an indefinite amount of positional arguments.

```python
>>> def fruits(*args):
>>>    for fruit in args:
>>>       print(fruit)

>>> fruits("apples", "bananas", "grapes")
# "apples"
# "bananas"
# "grapes"
```

Similarly, you use `**kwargs` when you have an indefinite number of keyword arguments.

```python
>>> def fruit(**kwargs):
>>>    for key, value in kwargs.items():
>>>        print("{0}: {1}".format(key, value))

>>> fruit(name = "apple", color = "red")
# name: apple
# color: red
```

```python
>>> def show(arg1, arg2, *args, kwarg1=None, kwarg2=None, **kwargs):
>>>   print(arg1)
>>>   print(arg2)
>>>   print(args)
>>>   print(kwarg1)
>>>   print(kwarg2)
>>>   print(kwargs)

>>> data1 = [1,2,3]
>>> data2 = [4,5,6]
>>> data3 = {'a':7,'b':8,'c':9}

>>> show(*data1,*data2, kwarg1="python",kwarg2="cheatsheet",**data3)
# 1
# 2
# (3, 4, 5, 6)
# python
# cheatsheet
# {'a': 7, 'b': 8, 'c': 9}

>>> show(*data1, *data2, **data3)
# 1
# 2
# (3, 4, 5, 6)
# None
# None
# {'a': 7, 'b': 8, 'c': 9}

# If you do not specify ** for kwargs
>>> show(*data1, *data2, *data3)
# 1
# 2
# (3, 4, 5, 6, "a", "b", "c")
# None
# None
# {}
```

## Things to Remember(args)

1. Functions can accept a variable number of positional arguments by using `*args` in the def statement.
2. You can use the items from a sequence as the positional arguments for a function with the `*` operator.
3. Using the `*` operator with a generator may cause your program to run out of memory and crash.
4. Adding new positional parameters to functions that accept `*args` can introduce hard-to-find bugs.

## Things to Remember(kwargs)

1. Function arguments can be specified by position or by keyword.
2. Keywords make it clear what the purpose of each argument is, when it would be confusing with only positional arguments.
3. Keyword arguments with default values make it easy to add new behaviors to a function, especially when the function has existing callers.
4. Optional keyword arguments should always be passed by keyword instead of by position.
