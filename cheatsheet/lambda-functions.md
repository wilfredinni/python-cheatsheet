# Lambda Functions

This function:

```python
>>> def add(x, y):
        return x + y

>>> add(5, 3)
8
```

Is equivalent to the _lambda_ function:

```python
>>> add = lambda x, y: x + y
>>> add(5, 3)
8
```

It's not even need to bind it to a name like add before:

```python
>>> (lambda x, y: x + y)(5, 3)
8
```

Like regular nested functions, lambdas also work as lexical closures:

```python
>>> def make_adder(n):
        return lambda x: x + n

>>> plus_3 = make_adder(3)
>>> plus_5 = make_adder(5)

>>> plus_3(4)
7
>>> plus_5(4)
9
```

Note: lambda can only evaluate an expression, like a single line of code.
