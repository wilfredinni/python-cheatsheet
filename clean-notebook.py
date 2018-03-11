import json
import sys

def clean_notebook(json_content):
    for cell in json_content['cells']:
        lines = cell["source"]
        if lines and lines[0].startswith(">>>"):
            cell["source"] = [l.replace('>>> ', '') for l in lines if l.startswith(">>>")]
            cell["source"][-1] =cell["source"][-1].replace('\n', '')

if __name__ == '__main__':
    with open("python_cheat_sheet.ipynb", "r") as f:
        content = json.loads(f.read())
        clean_notebook(content)
    with open("python_cheat_sheet.ipynb", "w") as f:
        f.write(json.dumps(content, indent=1))
