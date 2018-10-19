# Python Cheat Sheet

Basic cheatsheet for Python mostly based on the book written by Al Sweigart, [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) under the [Creative Commons license](https://creativecommons.org/licenses/by-nc-sa/3.0/) and many other sources.

## Read It

- [Website](https://www.pythoncheatsheet.org)
- [Github](https://github.com/wilfredinni/python-cheatsheet)
- [PDF](https://github.com/wilfredinni/Python-cheatsheet/raw/master/python_cheat_sheet.pdf)
- [Jupyter Notebook](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)

## JSON, YAML and configuration files

### JSON

Open a JSON file with:

```python
import json
with open("filename.json", "r") as f:
    content = json.loads(f.read())
```

Write a JSON file with:

```python
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:
    f.write(json.dumps(content, indent=2))
```

### YAML

Compared to JSON, YAML allows a much better humain maintainance and gives ability to add comments.
It is a convinient choice for configuration files where human will have to edit.

There are two main librairies allowing to access to YAML files:

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Install them using `pip install` in your virtual environment.

The first one it easier to use but the second one, Ruamel, implements much better the YAML
specification, and allow for example to modify a YAML content without altering comments.

Open a YAML file with:

```python
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()
    yaml.load(f)
```

### Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) is a very handy package allowing to abstract completly the underlying configuration file format. It allows to load a Python dictionary from JSON, YAML, TOML, and so on.

Install it with:

```bash
pip install anyconfig
```

Usage:

```python
import anyconfig

conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")
```
