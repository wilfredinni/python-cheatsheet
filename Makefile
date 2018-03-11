

notebook: convert-md-to-notebook fix-notebook

convert-md-to-notebook:
	pipenv run notedown README.md > python_cheat_sheet.ipynb

run-jupyter:
	pipenv run jupyter notebook

fix-notebook:
	pipenv run python clean-notebook.py
