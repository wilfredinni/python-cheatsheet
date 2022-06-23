## Ternary Conditional Operator

Many programming languages have a ternary operator, which define a conditional expression. The most common usage is to make a terse simple conditional assignment statement. In other words, it offers one-line code to evaluate the first expression if the condition is true, otherwise it evaluates the second expression.

    <expression1> if <condition> else <expression2>

Example:

```python
>>> age = 15

>>> print('kid' if age < 18 else 'adult')
kid
```

Ternary operators can be chained:

```python
>>> age = 15

>>> print('kid' if age < 13 else 'teenager' if age < 18 else 'adult')
teenager
```

The code above is equivalent to:

```python
if age < 18:
    if age < 13:
        print('kid')
    else:
        print('teenager')
else:
    print('adult')
```
