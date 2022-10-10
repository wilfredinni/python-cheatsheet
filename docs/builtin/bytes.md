---
title: Python bytes() built-in function - Python Cheatsheet
description: Return a new “bytes” object which is an immutable sequence of integers in the range [...]. bytes is an immutable version of bytearray – it has the same non-mutating methods and the same indexing and slicing behavior.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">

# Python bytes() built-in function

</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a new “bytes” object which is an immutable sequence of integers in the range [...]. bytes is an immutable version of bytearray – it has the same non-mutating methods and the same indexing and slicing behavior.
  </base-disclaimer-content>
</base-disclaimer>

## Examples

```python
>>> bytes(1)
# b'\x00'
>>> bytes(10)
# b'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'
>>> bytes(100)
# b'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'
...
```

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
