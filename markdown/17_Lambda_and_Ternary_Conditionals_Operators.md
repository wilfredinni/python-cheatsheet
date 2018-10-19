# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Lambda Functions

This function:

```python
def add(x, y):
        return x + y

add(5, 3)
```

Is equivalent to the _lambda_ function:

```python
add = lambda x, y: x + y
add(5, 3)
```

It's not even need to bind it to a name like add before:

```python
(lambda x, y: x + y)(5, 3)
```

Like regular nested functions, lambdas also work as lexical closures:

```python
def make_adder(n):
        return lambda x: x + n

plus_3 = make_adder(3)
plus_5(4)
```

Note: lambda can only evaluate an expression, like a single line of code.

## Ternary Conditional Operator

Many programming languages have a ternary operator, which define a conditional expression. The most common usage is to make a terse simple conditional assignment statement. In other words, it offers one-line code to evaluate the first expression if the condition is true, otherwise it evaluates the second expression.

    <expression1> if <condition> else <expression2>

Example:

```python
age = 15

print('kid' if age < 18 else 'adult')
```

Ternary operators can be changed:

```python
age = 15
print('kid' if age < 13 else 'teenager' if age < 18 else 'adult')
```

The code above is equivalent to:

```python
if age < 18:
    if age < 12:
        print('kid')
    else:
        print('teenager')
else:
    print('adult')
```
