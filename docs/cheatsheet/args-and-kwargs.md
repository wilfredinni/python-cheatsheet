---
title: Python Args and Kwargs - Python Cheatsheet
description: args and kwargs may seem scary, but the truth is that they are not that difficult to grasp and have the power to grant your functions with flexibility and readability
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Args and Kwargs
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python args and kwargs Made Easy</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> and <code>**kwargs</code> may seem scary, but the truth is that they are not that difficult to grasp and have the power to grant your functions with lots of flexibility.
  </base-disclaimer-content>
</base-disclaimer>

Read the article <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link> for a more in deep introduction.

## Args and Kwargs

`*args` and `**kwargs` allow you to pass an undefined number of arguments and keywords when calling a function.

```python
>>> def some_function(*args, **kwargs):
...     pass
...
>>> # call some_function with any number of arguments
>>> some_function(arg1, arg2, arg3)

>>> # call some_function with any number of keywords
>>> some_function(key1=arg1, key2=arg2, key3=arg3)

>>> # call both, arguments and keywords
>>> some_function(arg, key1=arg1)

>>> # or none
>>> some_function()
```

<base-warning>
  <base-warning-title>
    Python conventions
  </base-warning-title>
  <base-warning-content>
    The words <code>*args</code> and <code>**kwargs</code> are conventions. They are not imposed by the interpreter, but considered good practice by the Python community.
  </base-warning-content>
</base-warning>

## args

You can access the _arguments_ through the `args` variable:

```python
>>> def some_function(*args):
...     print(f'Arguments passed: {args} as {type(args)}')
...
>>> some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

## kwargs

Keywords are accessed through the `kwargs` variable:

```python
>>> def some_function(**kwargs):
...     print(f'keywords: {kwargs} as {type(kwargs)}')
...
>>> some_function(key1='arg1', key2='arg2')
# keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```
