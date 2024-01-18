---
title: Python compile() built-in function - Python Cheatsheet
description: Compile the source into a code or AST object. Code objects can be executed by exec() or eval(). source can either be a normal string, a byte string, or an AST object. Refer to the ast module documentation for information on how to work with AST objects.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python compile() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Compile the source into a code or AST object. Code objects can be executed by exec() or eval(). source can either be a normal string, a byte string, or an AST object. Refer to the ast module documentation for information on how to work with AST objects.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `compile()` function in Python is a built-in function that is used to convert a string or an Abstract Syntax Tree (AST) object into a code object. This code object can then be executed by functions like `exec()` or `eval()`.

## Example

Here's a basic example of how it works:

```python
code_string = """
def hello_world():
    print('Hello, world!')
"""

# Compile the string into a code object
code_object = compile(code_string, '<string>', 'exec')

# Execute the code object
exec(code_object)

# Call the function defined in the code object
hello_world()
```

In this example, a string containing Python code is compiled into a code object using `compile()`, and then executed with `exec()`. The function `hello_world()` defined in the string is then available to be called.