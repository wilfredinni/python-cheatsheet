# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## `__main__` Top-level script environment

`__main__` is the name of the scope in which top-level code executes.
A module’s **name** is set equal to `__main__` when read from standard input, a script, or from an interactive prompt.

A module can discover whether or not it is running in the main scope by checking its own `__name__`, which allows a common idiom for conditionally executing code in a module when it is run as a script or with `python -m` but not when it is imported:

```python
if __name__ == "__main__":
    # execute only if run as a script
    main()
```

For a package, the same effect can be achieved by including a **main**.py module, the contents of which will be executed when the module is run with -m.

For example we are developing script which is designed to be used as module, we should do:

```python
# Python program to execute function directly
def add(a, b):
    return a+b

add(10, 20) # we can test it by calling the function save it as calculate.py
```

```python
# Now if we want to use that module by importing we have to comment out our call,
# Instead we can write like this in calculate.py
if __name__ == "__main__":
    add(3, 5)
```

```python
import calculate

calculate.add(3, 5)
```

### Advantages

1. Every Python module has it’s `__name__` defined and if this is `__main__`, it implies that the module is being run standalone by the user and we can do corresponding appropriate actions.
2. If you import this script as a module in another script, the **name** is set to the name of the script/module.
3. Python files can act as either reusable modules, or as standalone programs.
4. if `__name__ == “main”:` is used to execute some code only if the file was run directly, and not imported.
