---
title: Python locals() built-in function - Python Cheatsheet
description: Update and return a dictionary representing the current local symbol table. Free variables are returned by locals() when it is called in function blocks, but not in class blocks. Note that at the module level, locals() and globals() are the same dictionary.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python locals() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Update and return a dictionary representing the current local symbol table. Free variables are returned by locals() when it is called in function blocks, but not in class blocks. Note that at the module level, locals() and globals() are the same dictionary.
  </base-disclaimer-content>
</base-disclaimer>


## Example

```python
def my_function():
    name = "Jim"
    age = 35
    print(locals())

my_function() # {'name': 'Jim', 'age': 35}
```
<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
