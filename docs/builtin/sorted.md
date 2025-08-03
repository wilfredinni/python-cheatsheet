---
title: Python sorted() built-in function - Python Cheatsheet
description: Return a new sorted list from the items in iterable.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sorted() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a new sorted list from the items in iterable.
  </base-disclaimer-content>
</base-disclaimer>

The `sorted()` function returns a new sorted list from the items in an iterable. It does not modify the original iterable.

You can also use the `reverse` parameter to sort in descending order.

### Examples

**Sorting a list of numbers:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # Output: [1, 1, 2, 3, 4, 5, 6, 9]
```

**Sorting a list of strings:**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)  # Output: ['apple', 'banana', 'cherry']
```



```python
>>> sorted([1, 2, 3, 7, 4])
# [1, 2, 3, 4, 7]

>>> sorted(['a', 'h', 'e'])
# ['a', 'e', 'h']

>>> sorted([1, 2, 3, 7, 4], reverse=True)
# [7, 4, 3, 2, 1]

>>> sorted(['a', 'h', 'e'], reverse=True)
# ['h', 'e', 'a']
```

## See also

- <router-link to="/cheatsheet/lists-and-tuples/">Lists and Tuples</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/zip/">zip()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
