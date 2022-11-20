---
title: Python aiter() built-in function - Python Cheatsheet
description: Return an asynchronous iterator for an asynchronous iterable. Equivalent to calling x.__aiter__().
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python aiter() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return an asynchronous iterator for an asynchronous iterable. Equivalent to calling x.__aiter__(). aiter() is an async equivalent of iter()
  </base-disclaimer-content>
</base-disclaimer>

## Example

```python
>>> async def aitersync(iterable):
...    results = []
...    async for x in aiter(iterable):
...        results.append(x)
...    return iter(results)
```
