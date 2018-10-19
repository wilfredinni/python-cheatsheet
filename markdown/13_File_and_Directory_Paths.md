# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## Handling File and Directory Paths

There are two main modules in Python that deals with path manipulation.
One is the `os.path` module and the other is the `pathlib` module.
The `pathlib` module was added in Python 3.4, offering an object-oriented way
to handle file system paths.

### Backslash on Windows and Forward Slash on OS X and Linux

On Windows, paths are written using backslashes (\) as the separator between
folder names. On Unix based operating system such as macOS, Linux, and BSDs,
the forward slash (/) is used as the path separator. Joining paths can be
a headache if your code needs to work on different platforms.

Fortunately, Python provides easy ways to handle this. We will showcase
how to deal with this with both `os.path.join` and `pathlib.Path.joinpath`

Using `os.path.join` on Windows:

```python
import os

os.path.join('usr', 'bin', 'spam')
```

And using `pathlib` on \*nix:

```python
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))
```

`pathlib` also provides a shortcut to joinpath using the `/` operator:

```python
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')
```

Notice the path separator is different between Windows and Unix based operating
system, that's why you want to use one of the above methods instead of
adding strings together to join paths together.

Joining paths is helpful if you need to create different file paths under
the same directory.

Using `os.path.join` on Windows:

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

for filename in my_files:
    print(os.path.join('C:\\Users\\asweigart', filename))
```

Using `pathlib` on \*nix:

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()
for filename in my_files:
    print(home / filename)
```

### The Current Working Directory

Using `os` on Windows:

```python
import os

os.getcwd()
```

```python
os.chdir('C:\\Windows\\System32')
os.getcwd()
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
from os import chdir

print(Path.cwd())
```

```python
chdir('/usr/lib/python3.6')
print(Path.cwd())
```

### Creating New Folders

Using `os` on Windows:

```python
import os

os.makedirs('C:\\delicious\\walnut\\waffles')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

Oh no, we got a nasty error! The reason is that the 'delicious' directory does
not exist, so we cannot make the 'walnut' and the 'waffles' directories under
it. To fix this, do:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

And all is good :)

### Absolute vs. Relative Paths

There are two ways to specify a file path.

- An absolute path, which always begins with the root folder
- A relative path, which is relative to the program’s current working directory

There are also the dot (.) and dot-dot (..) folders. These are not real folders but special names that can be used in a path. A single period (“dot”) for a folder name is shorthand for “this directory.” Two periods (“dot-dot”) means “the parent folder.”

### Handling Absolute and Relative Paths

To see if a path is an absolute path:

Using `os.path` on \*nix:

```python
import os

os.path.isabs('/')
```

```python
os.path.isabs('..')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
Path('/').is_absolute()
```

```python
Path('..').is_absolute()
```

You can extract an absolute path with both `os.path` and `pathlib`

Using `os.path` on \*nix:

```python
import os

os.getcwd()
```

```python
os.path.abspath('..')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

print(Path.cwd())
```

```python
print(Path('..').resolve())
```

You can get a relative path from a starting path to another path.

Using `os.path` on \*nix:

```python
import os

os.path.relpath('/etc/passwd', '/')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

print(Path('/etc/passwd').relative_to('/'))
```

### Checking Path Validity

Checking if a file/directory exists:

Using `os.path` on \*nix:

```python
import os
os.path.exists('.')
```

```python
os.path.exists('setup.py')
```

```python
os.path.exists('/etc')
```

```python
os.path.exists('nonexistentfile')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
Path('.').exists()
```

```python
Path('setup.py').exists()
```

```python
Path('/etc').exists()
```

```python
Path('nonexistentfile').exists()
```

Checking if a path is a file:

Using `os.path` on \*nix:

```python
import os
os.path.isfile('setup.py')
```

```python
os.path.isfile('/home')
```

```python
os.path.isfile('nonexistentfile')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

Path('setup.py').is_file()
```

```python
Path('/home').is_file()
```

```python
Path('nonexistentfile').is_file()
```

Checking if a path is a directory:

Using `os.path` on \*nix:

```python
import os
os.path.isdir('/')
```

```python
os.path.isdir('setup.py')
```

```python
os.path.isdir('/spam')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

Path('/').is_dir()
```

```python
Path('setup.py').is_dir()
```

```python
Path('/spam').is_dir()
```

### Finding File Sizes and Folder Contents

Getting a file's size in bytes:

Using `os.path` on Windows:

```python
import os
os.path.getsize('C:\\Windows\\System32\\calc.exe')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat contains some other information about the file as well
```

```python
print(stat.st_size) # size in bytes
```

Listing directory contents using `os.listdir` on Windows:

```python
import os
os.listdir('C:\\Windows\\System32')
```

Listing directory contents using `pathlib` on \*nix:

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

To find the total size of all the files in this directory:

**WARNING**: Directories themselves also have a size! So you might want to
check for whether a path is a file or directory using the methods in the methods discussed in the above section!

Using `os.path.getsize()` and `os.listdir()` together on Windows:

```python
import os

total_size = 0

for filename in os.listdir('C:\\Windows\\System32'):
      total_size = total_size + os.path.getsize(os.path.join('C:\\Windows\\System32', filename))

print(total_size)
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
total_size = 0

for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

### Copying Files and Folders

The shutil module provides functions for copying files, as well as entire folders.

```python
import shutil, os

os.chdir('C:\\')

shutil.copy('C:\\spam.txt', 'C:\\delicious')
```

```python
shutil.copy('eggs.txt', 'C:\\delicious\\eggs2.txt')
   'C:\\delicious\\eggs2.txt'
```

While shutil.copy() will copy a single file, shutil.copytree() will copy an entire folder and every folder and file contained in it:

```python
import shutil, os

os.chdir('C:\\')
shutil.copytree('C:\\bacon', 'C:\\bacon_backup')
```

### Moving and Renaming Files and Folders

```python
import shutil

shutil.move('C:\\bacon.txt', 'C:\\eggs')
```

The destination path can also specify a filename. In the following example, the source file is moved and renamed:

```python
shutil.move('C:\\bacon.txt', 'C:\\eggs\\new_bacon.txt')
```

If there is no eggs folder, then move() will rename bacon.txt to a file named eggs.

```python
shutil.move('C:\\bacon.txt', 'C:\\eggs')
```

### Permanently Deleting Files and Folders

- Calling os.unlink(path) or Path.unlink() will delete the file at path.

- Calling os.rmdir(path) or Path.rmdir() will delete the folder at path. This folder must be empty of any files or folders.

- Calling shutil.rmtree(path) will remove the folder at path, and all files and folders it contains will also be deleted.

### Safe Deletes with the send2trash Module

You can install this module by running pip install send2trash from a Terminal window.

```python
import send2trash

with open('bacon.txt', 'a') as bacon_file: # creates the file
    bacon_file.write('Bacon is not a vegetable.')

send2trash.send2trash('bacon.txt')
```

### Walking a Directory Tree

```python
import os

for folder_name, subfolders, filenames in os.walk('C:\\delicious'):
    print('The current folder is {}'.format(folder_name))

    for subfolder in subfolders:
        print('SUBFOLDER OF {}: {}'.format(folder_name, subfolder))
    for filename in filenames:
        print('FILE INSIDE {}: {}'.format(folder_name, filename))

    print('')
```

`pathlib` provides a lot more functionality than the ones listed above,
like getting file name, getting file extension, reading/writing a file without
manually opening it, etc. Check out the
[official documentation](https://docs.python.org/3/library/pathlib.html)
if you want to know more!
