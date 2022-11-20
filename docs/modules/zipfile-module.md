---
title: Python Zipfile Module - Python Cheatsheet
description: This module provides tools to create, read, write, append, and list a ZIP file.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zipfile Module
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   This module provides tools to create, read, write, append, and list a ZIP file.
  </base-disclaimer-content>
</base-disclaimer>

## Reading ZIP files

```python
>>> with zipfile.ZipFile('example.zip') as example_zip:
...     print(example_zip.namelist())
...     spam_info = example_zip.getinfo('spam.txt')
...     print(spam_info.file_size)
...     print(spam_info.compress_size)
...     print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
...
# ['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
# 13908
# 3828
# 'Compressed file is 3.63x smaller!'
```

## Extracting from ZIP Files

The `extractall()` method for ZipFile objects extracts all the files and folders from a ZIP file into the current working directory.

```python
>>> with zipfile.ZipFile('example.zip') as example_zip:
...     example_zip.extractall()
```

The `extract()` method for ZipFile objects will extract a single file from the ZIP file:

```python
>>> with zipfile.ZipFile('example.zip') as example_zip:
...     print(example_zip.extract('spam.txt'))
...     print(example_zip.extract('spam.txt', 'C:\\some\\new\\folders'))
...
# 'C:\\spam.txt'
# 'C:\\some\\new\\folders\\spam.txt'
```

## Creating and Adding to ZIP Files

```python
>>> import zipfile
>>>
>>> with zipfile.ZipFile('new.zip', 'w') as new_zip:
...     new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

This code will create a new ZIP file named new.zip that has the compressed contents of spam.txt.

## Reading metadata of ZIP files

### Getting the filenames with namelist()

```python
>>> import zipfile
>>>
>>> with zipfile.ZipFile('example.zip', 'r') as zf:
...    print(zf.namelist())
...
# ['README.txt']
```

### Getting all metadata with infolist()

```python
>>> import datetime
>>> import zipfile
>>>
>>> with zipfile.ZipFile(archive_name) as zf:
...    for info in zf.infolist():
...        system = 'Windows' if info.create_system == 0 else 'Unix'
...        modified = datetime.datetime(*info.date_time)
...        print(info.filename)
...        print(f'Comment     : {info.comment}')
...        print(f'Modified    : {modified}')
...        print(f'System      : {system}')
...        print(f'ZIP version : {info.create_version}')
...        print(f'Compressed  : {info.compress_size} bytes')
...        print(f'Uncompressed: {info.file_size} bytes')
...
# README.txt
# Comment     : b''
# Modified    : 2022-11-15 06:48:02
# System      : Unix
# ZIP version : 30
# Compressed  : 65 bytes
# Uncompressed: 76 bytes
```
