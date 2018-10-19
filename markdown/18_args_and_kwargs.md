# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## args and kwargs

The names `args and kwargs` are arbitrary - the important thing are the `*` and `**` operators. They can mean:

1. In a function declaration, `*` means “pack all remaining positional arguments into a tuple named `<name>`”, while `**` is the same for keyword arguments (except it uses a dictionary, not a tuple).

2. In a function call, `*` means “unpack tuple or list named `<name>` to positional arguments at this position”, while `**` is the same for keyword arguments.

For example you can make a function that you can use to call any other function, no matter what parameters it has:

```python
def forward(f, *args, **kwargs):
    return f(*args, **kwargs)
```

Inside forward, args is a tuple (of all positional arguments except the first one, because we specified it - the f), kwargs is a dict. Then we call f and unpack them so they become normal arguments to f.

You use `*args` when you have an indefinite amount of positional arguments.

```python
def fruits(*args):
   for fruit in args:
      print(fruit)

fruits("apples", "bananas", "grapes")
```

Similarly, you use `**kwargs` when you have an indefinite number of keyword arguments.

```python
def fruit(**kwargs):
   for key, value in kwargs.items():
       print("{0}: {1}".format(key, value))

fruit(name = "apple", color = "red")
```

```python
def show(arg1, arg2, *args, kwarg1=None, kwarg2=None, **kwargs):
  print(arg1)
  print(arg2)
  print(args)
  print(kwarg1)
  print(kwarg2)
  print(kwargs)

data1 = [1,2,3]
data2 = [4,5,6]
data3 = {'a':7,'b':8,'c':9}

show(*data1,*data2, kwarg1="python",kwarg2="cheatsheet",**data3)
```

```python
show(*data1, *data2, **data3)
```

If you do not specify \*\* for kwargs

```python
show(*data1, *data2, *data3)
```

### Thinks to Remember(args)

1. Functions can accept a variable number of positional arguments by using `*args` in the def statement.
2. You can use the items from a sequence as the positional arguments for a function with the `*` operator.
3. Using the `*` operator with a generator may cause your program to run out of memory and crash.
4. Adding new positional parameters to functions that accept `*args` can introduce hard-to-find bugs.

### Thinks to remember(kwargs)

1. Function arguments can be specified by position or by keyword.
2. Keywords make it clear what the purpose of each argument is when it would be confusing with only positional arguments.
3. Keyword arguments with default values make it easy to add new behaviors to a function, especially when the function has existing callers.
4. Optional keyword arguments should always be passed by keyword instead of by position.
