---
title: Python format() built-in function - Python Cheatsheet
description: Convert a value to a “formatted” representation, as controlled by format_spec. The interpretation of format_spec will depend on the type of the value argument. [...].
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python format() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convert a value to a “formatted” representation, as controlled by format_spec. The interpretation of format_spec will depend on the type of the value argument. [...].
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatting string (faster and easier)
print(f"My name is {name} and I work for {company}.")
```
