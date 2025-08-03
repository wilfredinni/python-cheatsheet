---
title: Python super() built-in function - Python Cheatsheet
description: Return a proxy object that delegates method calls to a parent or sibling class of type. This is useful for accessing inherited methods that have been overridden in a class.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python super() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a proxy object that delegates method calls to a parent or sibling class of type. This is useful for accessing inherited methods that have been overridden in a class.
  </base-disclaimer-content>
</base-disclaimer>

The `super()` function is used to call a method from a parent class. This is particularly useful in inheritance when you want to extend the functionality of a parent's method without completely overriding it.

### Example

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
# Output:
# Hello from Parent
# Hello from Child
```

## See also

- <router-link to="/cheatsheet/oop-basics/">OOP Basics</router-link>
- <router-link to="/builtin/classmethod/">classmethod()</router-link>
- <router-link to="/builtin/staticmethod/">staticmethod()</router-link>
