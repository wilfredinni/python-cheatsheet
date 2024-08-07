---
title: Python range() built-in function - Python Cheatsheet
description: Rather than being a function, range is actually an immutable sequence type, as documented in Ranges and Sequence Types — list, tuple, range.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python range() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Rather than being a function, range is actually an immutable sequence type, as documented in Ranges and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> for i in range(5):
...     print(i)
# 0
# 1
# 2
# 3
# 4
```

```python
>>> for i in range(1,8):
...     print(i)
# 1
# 2
# 3
# 4
# 5
# 6
# 7
```

```python
>>> for i in range(0,30,5):
...     print(i)
# 0
# 5
# 10
# 15
# 20
# 25
```

```python
>>> for i in range(0,10,3):
...     print(i)
# 0
# 3
# 6
# 9
```

```python
>>> for i in range(0,-6,-1):
...     print(i)
# 0
# -1
# -2
# -3
# -4
# -5
```

```python
>>> for i in range(0,-6,-1):
...     print(i)
# 0
# -1
# -2
# -3
# -4
# -5
```

```python
>>> for i in range(0):
...     print(i)
# 
```

```python
>>> for i in range(1,0):
...     print(i)
# 
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
