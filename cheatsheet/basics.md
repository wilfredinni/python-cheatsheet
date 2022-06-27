---
title: Basics
description: The basics of python
meta:
  - name: description
    content: Python basics
---

<script setup lang="ts">
  const operatorItems = [
    {operator: '**', operation: 'Exponent', example: '2 ** 3 = 8'},
    {operator: '%', operation: 'Modulus/Remainder', example: '22 % 8 = 6'},
    {operator: '//', operation: 'Integer division', example: '22 // 8 = 2'},
    {operator: '/', operation: 'Division', example: '22 / 8 = 2.75'},
    {operator: '*', operation: 'Multiplication', example: '3 * 3 = 9'},
    {operator: '-', operation: 'Subtraction', example: '5 - 2 = 3'},
    {operator: '+', operation: 'Addition', example: '2 + 2 = 4'},
  ]

  const dataTypeItems = [
    {type: 'Integers', example: '-2, -1, 0, 1, 2, 3, 4, 5'},
    {type: 'Floating-point numbers', example: '-1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25'},
    {type: 'Strings', example: "'a', 'aa', 'aaa', 'Hello!', '11 cats'"},
  ]
</script>

# Python Basics

## Math Operators

From **Highest** to **Lowest** precedence:

<base-table :title-headers="['Operator', 'Operation', 'Example']">
  <base-table-row v-for="item in operatorItems" :key="item.operator">
    <base-table-item>{{ item.operator }}</base-table-item>
    <base-table-item>{{ item.operation }}</base-table-item>
    <base-table-item>{{ item.example }}</base-table-item>
  </base-table-row>
</base-table>

Examples of expressions in the interactive shell:

```python
2 + 3 * 6
```

```python
(2 + 3) * 6
```

```python
2 ** 8
```

```python
23 // 7
```

```python
23 % 7
```

```python
(5 - 1) * ((7 + 1) / (3 - 1))
```

## Data Types

<base-table :title-headers="['Data Type', 'Example']">
  <base-table-row v-for="item in dataTypeItems" :key="item.operator">
    <base-table-item>{{ item.type }}</base-table-item>
    <base-table-item>{{ item.example }}</base-table-item>
  </base-table-row>
</base-table>

## String Concatenation and Replication

String concatenation:

```python
'Alice' 'Bob'
```

Note: Avoid `+` operator for string concatenation. Prefer string formatting.

String Replication:

```python
'Alice' * 5
```

## Variables

You can name a variable anything as long as it obeys the following rules:

1. It can be only one word.
2. It can use only letters, numbers, and the underscore (`_`) character.
3. It can’t begin with a number.
4. Variable name starting with an underscore (`_`) are considered as "unuseful`.

Example:

```python
spam = 'Hello'
```

```python
_spam = 'Hello'
```

`_spam` should not be used again in the code.

## Comments

Inline comment:

```python
# This is a comment
```

Multiline comment:

```python
# This is a
# multiline comment
```

Code with a comment:

```python
a = 1  # initialization
```

Please note the two spaces in front of the comment.

Function docstring:

```python
def foo():
    """
    This is a function docstring
    You can also use:
    ''' Function Docstring '''
    """
```

## The print Function

```python
print('Hello world!')
```

```python
a = 1
print('Hello world!', a)
```

## The input Function

Example Code:

```python
myName = input('What is your name?') # ask for their name
print('It is good to meet you, {}'.format(myName))
```

## The len Function

Evaluates to the integer value of the number of characters in a string:

```python
len('hello')
```

Note: test of emptiness of strings, lists, dictionary, etc, should **not** use len, but prefer direct
boolean evaluation.

```python
a = [1, 2, 3]
if a:
    print("the list is not empty!")
```

## The str int and float Functions

Integer to String or Float:

```python
str(29)
```

```python
print('I am {} years old.'.format(str(29)))
```

```python
str(-3.14)
```

Float to Integer:

```python
int(7.7)
```

```python
int(7.7) + 1
```
