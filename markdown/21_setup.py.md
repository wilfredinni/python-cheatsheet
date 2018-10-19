# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## setup.py

The setup script is the centre of all activity in building, distributing, and installing modules using the Distutils. The main purpose of the setup script is to describe your module distribution to the Distutils, so that the various commands that operate on your modules do the right thing.

The `setup.py` file is at the heart of a Python project. It describes all of the metadata about your project. There a quite a few fields you can add to a project to give it a rich set of metadata describing the project. However, there are only three required fields: name, version, and packages. The name field must be unique if you wish to publish your package on the Python Package Index (PyPI). The version field keeps track of different releases of the project. The packages field describes where you’ve put the Python source code within your project.

This allows you to easily install Python packages. Often it's enough to write:

```bash
python setup.py install
```

and module will install itself.

Our initial setup.py will also include information about the license and will re-use the README.txt file for the long_description field. This will look like:

```python
from distutils.core import setup
setup(
   name='pythonCheatsheet',
   version='0.1',
   packages=['pipenv',],
   license='MIT',
   long_description=open('README.txt').read(),
)
```

Find more information visit [http://docs.python.org/install/index.html](http://docs.python.org/install/index.html).
