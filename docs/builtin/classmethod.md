---
title: Python classmethod() built-in function - Python Cheatsheet
description: Transform a method into a class method. A class method receives the class as an implicit first argument, just like an instance method receives the instance.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python classmethod() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Transform a method into a class method. A class method receives the class as an implicit first argument, just like an instance method receives the instance.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

A `classmethod` is a method that is bound to the class and not the instance of the class. It takes the class itself as its first argument, conventionally named `cls`. This is in contrast to a regular instance method, which takes the instance as its first argument (`self`).

They are often used for factory methods that create instances of the class in a specific way.

## Examples

```python
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1
        return self.count

    @classmethod  # passes the class as the first argument to the method instead of passing the instance
    def get_new_instance(cls):
        return cls()

if __name__ == "__main__":
    counter = Counter()
    print(counter.increment())
    # 1

    counter = counter.get_new_instance()
    print(counter.increment())
    # 1
```

## Relevant links

- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/cheatsheet/decorators'">Decorators</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
