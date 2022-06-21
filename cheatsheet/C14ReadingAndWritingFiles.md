# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Reading and Writing Files

### The File Reading/Writing Process

To read/write to a file in Python, you will want to use the `with`
statement, which will close the file for you after you are done.

### Opening and reading files with the open function

```python
with open('C:\\Users\\your_home_folder\\hello.txt') as hello_file:
    hello_content = hello_file.read()

hello_content
```

Alternatively, you can use the _readlines()_ method to get a list of string values from the file, one string for each line of text:

```python
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()
```

You can also iterate through the file line by line:

```python
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file: # note the new line character will be included in the line
        print(line, end='')
```

### Writing to Files

```python
with open('bacon.txt', 'w') as bacon_file:
    bacon_file.write('Hello world!\n')
```

```python
with open('bacon.txt', 'a') as bacon_file:
    bacon_file.write('Bacon is not a vegetable.')
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

### Saving Variables with the shelve Module

To save variables:

```python
import shelve

cats = ['Zophie', 'Pooka', 'Simon']
with shelve.open('mydata') as shelf_file:
    shelf_file['cats'] = cats
```

To open and read variables:

```python
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    print(shelf_file['cats'])
```

Just like dictionaries, shelf values have keys() and values() methods that will return list-like values of the keys and values in the shelf. Since these methods return list-like values instead of true lists, you should pass them to the list() function to get them in list form.

```python
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

### Saving Variables with pprint.pformat

```python
import pprint

cats = [{'name': 'Zophie', 'desc': 'chubby'}, {'name': 'Pooka', 'desc': 'fluffy'}]
pprint.pformat(cats)
```

```python
with open('myCats.py', 'w') as file_obj:
    file_obj.write('cats = {}\n'.format(pprint.pformat(cats)))
```

### Reading ZIP Files

```python
import zipfile, os

os.chdir('C:\\')    # move to the folder with example.zip
with zipfile.ZipFile('example.zip') as example_zip:
    print(example_zip.namelist())
    spam_info = example_zip.getinfo('spam.txt')
    print(spam_info.file_size)
    print(spam_info.compress_size)
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

### Extracting from ZIP Files

The extractall() method for ZipFile objects extracts all the files and folders from a ZIP file into the current working directory.

```python
import zipfile, os

os.chdir('C:\\')    # move to the folder with example.zip

with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

The extract() method for ZipFile objects will extract a single file from the ZIP file. Continue the interactive shell example:

```python
with zipfile.ZipFile('example.zip') as example_zip:
    print(example_zip.extract('spam.txt'))
    print(example_zip.extract('spam.txt', 'C:\\some\\new\\folders'))
```

### Creating and Adding to ZIP Files

```python
import zipfile

with zipfile.ZipFile('new.zip', 'w') as new_zip:
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

This code will create a new ZIP file named new.zip that has the compressed contents of spam.txt.
