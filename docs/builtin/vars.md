---
title: Python vars() built-in function - Python Cheatsheet
description: Return the __dict__ attribute for a module, class, instance, or any other object with a __dict__ attribute.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python vars() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return the __dict__ attribute for a module, class, instance, or any other object with a __dict__ attribute.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
my_person = Person("Dwight", 35)

my_vars = vars(my_person)

print(my_vars)
# {'name': 'Dwight', 'age': 35}
```
<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
