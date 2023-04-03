# Quick Reference sheets



## Quickref for common LIST methods:


| Method             | Description                                                                                    |
|--------------------|------------------------------------------------------------------------------------------------|
| `list.append(x)`        | Adds an element `x` to the end of the list.                                                   |
| `list.extend(iterable)` | Appends the elements from an iterable to the end of the list.                                   |
| `list.insert(i, x)`     | Inserts element `x` at position `i` in the list.                                               |
| `list.remove(x)`        | Removes the first occurrence of element `x` from the list.                                     |
| `list.pop([i])`         | Removes and returns the element at position `i` in the list. If no index is provided, removes and returns the last element.    |                                                              |
| `list.index(x[, start[, end]])` | Returns the index of the first occurrence of element `x` in the list.The optional `start` and `end` arguments can be used to limit the search to a specific range.  |
| `list.count(x)`         | Returns the number of occurrences of element `x` in the list.                                  |
| `list.sort([key[, reverse]])`   | Sorts the elements of the list in ascending order. The optional `key` and `reverse` arguments can be used to customize the sorting behavior. |
| `list.reverse()`        | Reverses the order of the elements in the list.                                                |
| `list.clear()`     | Removes all elements from the list.                                                            |
| `list.copy()`      | Returns a shallow copy of the list.                                                             |
| List comprehension | A concise way to create a new list by applying an expression to each element of an existing list. Syntax: `[fn(item) for item in list if condition]`.                                    |

## Quickref for common DICTIONARY methods:

| Method             | Description                                                                                    |
|--------------------|------------------------------------------------------------------------------------------------|
| `dict.clear()`      | Removes all key-value pairs from the dictionary.                                               |
| `dict.copy()`       | Returns a shallow copy of the dictionary.                                                       |
| `dict.fromkeys(seq[, value])` | Returns a new dictionary with keys from `seq` and values set to `value`. If `value` is not provided, values will be set to `None`. |
| `dict.get(key[, default])` | Returns the value for `key` if it exists in the dictionary. If not, returns `default` (which defaults to `None`). |
| `dict.items()`      | Returns a view object of the dictionary's `(key, value)` pairs.                                 |
| `dict.keys()`       | Returns a view object of the dictionary's keys.                                                 |
| `dict.values()`     | Returns a view object of the dictionary's values.                                               |
| `dict.pop(key[, default])` | Removes the key-value pair for `key` and returns its value. If `key` is not found and `default` is not provided, a `KeyError` is raised. |
| `dict.popitem()`    | Removes and returns an arbitrary `(key, value)` pair from the dictionary. If the dictionary is empty, a `KeyError` is raised. |
| `dict.setdefault(key[, default])` | Returns the value for `key` if it exists in the dictionary. If not, inserts `key` with a value of `default` (which defaults to `None`) and returns `default`. |
| `dict.update([other])` | Updates the dictionary with the key-value pairs from `other`. |


## Quickref for common TUPLE methods:

| Method             | Description                                                                                    |
|--------------------|------------------------------------------------------------------------------------------------|
| `tuple.count(x)`        | Returns the number of occurrences of element `x` in the tuple.                                 |
| `tuple.index(x[, start[, end]])` | Returns the index of the first occurrence of element `x` in the tuple.                         |
| `len(tuple)`          | Returns the length of the tuple.                                                                |
| if x in my_tuple: (do something) |  checks truthiness of "the element x is found in this tuple" and then does something if truthy|
