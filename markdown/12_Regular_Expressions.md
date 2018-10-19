# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Regular Expressions

1. Import the regex module with `import re`.
2. Create a Regex object with the `re.compile()` function. (Remember to use a raw string.)
3. Pass the string you want to search into the Regex object’s `search()` method. This returns a `Match` object.
4. Call the Match object’s `group()` method to return a string of the actual matched text.

All the regex functions in Python are in the re module:

```python
import re
```

### Matching Regex Objects

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
mo = phone_num_regex.search('My number is 415-555-4242.')
print('Phone number found: {}'.format(mo.group()))
```

### Grouping with Parentheses

```python
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
mo = phone_num_regex.search('My number is 415-555-4242.')
mo.group(1)
```

```python
mo.group(2)
```

```python
mo.group(0)
```

```python
mo.group()
```

To retrieve all the groups at once: use the groups() method—note the plural form for the name.

```python
mo.groups()
area_code, main_number = mo.groups()
```

```python
print(area_code)
```

```python
print(main_number)
```

### Matching Multiple Groups with the Pipe

The | character is called a pipe. You can use it anywhere you want to match one of many expressions. For example, the regular expression r'Batman|Tina Fey' will match either 'Batman' or 'Tina Fey'.

```python
hero_regex = re.compile (r'Batman|Tina Fey')
mo1 = hero_regex.search('Batman and Tina Fey.')
mo1.group()
```

```python
mo2 = hero_regex.search('Tina Fey and Batman.')
mo2.group()
```

You can also use the pipe to match one of several patterns as part of your regex:

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')
mo.group()
```

```python
mo.group(1)
```

### Optional Matching with the Question Mark

The ? character flags the group that precedes it as an optional part of the pattern.

```python
bat_regex = re.compile(r'Bat(wo)?man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

### Matching Zero or More with the Star

The * (called the star or asterisk) means “match zero or more”—the group that precedes the star can occur any number of times in the text.

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```python
mo3 = bat_regex.search('The Adventures of Batwowowowoman')
mo3.group()
```

### Matching One or More with the Plus

While * means “match zero or more,” the + (or plus) means “match one or more”. The group preceding a plus must appear at least once. It is not optional:

```python
bat_regex = re.compile(r'Bat(wo)+man')
mo1 = bat_regex.search('The Adventures of Batwoman')
mo1.group()
```

```python
mo2 = bat_regex.search('The Adventures of Batwowowowoman')
mo2.group()
```

```python
mo3 = bat_regex.search('The Adventures of Batman')
mo3 is None
```

### Matching Specific Repetitions with Curly Brackets

If you have a group that you want to repeat a specific number of times, follow the group in your regex with a number in curly brackets. For example, the regex (Ha){3} will match the string 'HaHaHa', but it will not match 'HaHa', since the latter has only two repeats of the (Ha) group.

Instead of one number, you can specify a range by writing a minimum, a comma, and a maximum in between the curly brackets. For example, the regex (Ha){3,5} will match 'HaHaHa', 'HaHaHaHa', and 'HaHaHaHaHa'.

```python
ha_regex = re.compile(r'(Ha){3}')
mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

### Greedy and Nongreedy Matching

Python’s regular expressions are greedy by default, which means that in ambiguous situations they will match the longest string possible. The non-greedy version of the curly brackets, which matches the shortest string possible, has the closing curly bracket followed by a question mark.

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')
mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

```python
nongreedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = nongreedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

### The findall Method

In addition to the search() method, Regex objects also have a findall() method. While search() will return a Match object of the first matched text in the searched string, the findall() method will return the strings of every match in the searched string.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # has no groups
phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
```

To summarize what the findall() method returns, remember the following:

- When called on a regex with no groups, such as \d-\d\d\d-\d\d\d\d, the method findall() returns a list of ng matches, such as ['415-555-9999', '212-555-0000'].

- When called on a regex that has groups, such as (\d\d\d)-d\d)-(\d\ d\d\d), the method findall() returns a list of es of strings (one string for each group), such as [('415', ', '9999'), ('212', '555', '0000')].

### Making Your Own Character Classes

There are times when you want to match a set of characters but the shorthand character classes (\d, \w, \s, and so on) are too broad. You can define your own character class using square brackets. For example, the character class [aeiouAEIOU] will match any vowel, both lowercase and uppercase.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
```

You can also include ranges of letters or numbers by using a hyphen. For example, the character class [a-zA-Z0-9] will match all lowercase letters, uppercase letters, and numbers.

By placing a caret character (^) just after the character class’s opening bracket, you can make a negative character class. A negative character class will match all the characters that are not in the character class. For example, enter the following into the interactive shell:

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
```

### The Caret and Dollar Sign Characters

- You can also use the caret symbol (^) at the start of a regex to indicate that a match must occur at the beginning of the searched text.

- Likewise, you can put a dollar sign ($) at the end of the regex to indicate the string must end with this regex pattern.

- And you can use the ^ and $ together to indicate that the entire string must match the regex—that is, it’s not enough for a match to be made on some subset of the string.

The r'^Hello' regular expression string matches strings that begin with 'Hello':

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

```python
begins_with_hello.search('He said hello.') is None
```

The r'\d$' regular expression string matches strings that end with a numeric character from 0 to 9:

```python
whole_string_is_num = re.compile(r'^\d+$')
whole_string_is_num.search('1234567890')
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

```python
whole_string_is_num.search('12 34567890') is None
```

### The Wildcard Character

The . (or dot) character in a regular expression is called a wildcard and will match any character except for a newline:

```python
at_regex = re.compile(r'.at')
at_regex.findall('The cat in the hat sat on the flat mat.')
```

### Matching Everything with Dot-Star

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')
mo = name_regex.search('First Name: Some Last Name: One')
mo.group(1)
```

```python
mo.group(2)
```

The dot-star uses greedy mode: It will always try to match as much text as possible. To match any and all text in a nongreedy fashion, use the dot, star, and question mark (.*?). The question mark tells Python to match in a nongreedy way:

```python
nongreedy_regex = re.compile(r'<.*?>')
mo = nongreedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

### Matching Newlines with the Dot Character

The dot-star will match everything except a newline. By passing re.DOTALL as the second argument to re.compile(), you can make the dot character match all characters, including the newline character:

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

### Review of Regex Symbols

| Symbol                   | Matches                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `?`                      | zero or one of the preceding group.                          |
| `*`                      | zero or more of the preceding group.                         |
| `+`                      | one or more of the preceding group.                          |
| `{n}`                    | exactly n of the preceding group.                            |
| `{n,}`                   | n or more of the preceding group.                            |
| `{,m}`                   | 0 to m of the preceding group.                               |
| `{n,m}`                  | at least n and at most m of the preceding p.                 |
| `{n,m}?` or `*?` or `+?` | performs a nongreedy match of the preceding p.               |
| `^spam`                  | means the string must begin with spam.                       |
| `spam$`                  | means the string must end with spam.                         |
| `.`                      | any character, except newline characters.                    |
| `\d`, `\w`, and `\s`     | a digit, word, or space character, resectively.              |
| `\D`, `\W`, and `\S`     | anything except a digit, word, or space acter, respectively. |
| `[abc]`                  | any character between the brackets (such as a, b, ).         |
| `[^abc]`                 | any character that isn’t between the brackets.              |

### Case-Insensitive Matching

To make your regex case-insensitive, you can pass re.IGNORECASE or re.I as a second argument to re.compile():

```python
robocop = re.compile(r'robocop', re.I)
robocop.search('Robocop is part man, part machine, all cop.').group()
```

```python
robocop.search('ROBOCOP protects the innocent.').group()
```

```python
robocop.search('Al, why does your programming book talk about robocop so much?').group()
```

### Substituting Strings with the sub() Method

The sub() method for Regex objects is passed two arguments:

1. The first argument is a string to replace any matches.
1. The second is the string for the regular expression.

The sub() method returns a string with the substitutions applied:

```python
names_regex = re.compile(r'Agent \w+')
names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

Another example:

```python
agent_names_regex = re.compile(r'Agent (\w)\w*')
agent_names_regex.sub(r'\1****', 'Agent Alice told Agent Carol that Agent Eve knew Agent Bob was a double agent.')
```

### Managing Complex Regexes

To tell the re.compile() function to ignore whitespace and comments inside the regular expression string, “verbose mode” can be enabled by passing the variable re.VERBOSE as the second argument to re.compile().

Now instead of a hard-to-read regular expression like this:

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

you can spread the regular expression over multiple lines with comments like this:

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # area code
    (\s|-|\.)?                    # separator
    \d{3}                         # first 3 digits
    (\s|-|\.)                     # separator
    \d{4}                         # last 4 digits
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extension
    )''', re.VERBOSE)
```
