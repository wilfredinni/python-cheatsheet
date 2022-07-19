# Python Cheatsheet

[![Netlify Status](https://api.netlify.com/api/v1/badges/a8d4511d-423a-49a9-bdf3-75307e997fb1/deploy-status)](https://app.netlify.com/sites/pythoncheatsheet/deploys)

This [Python Cheatsheet](https://www.pythoncheatsheet.org/) is based on the book [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) and many other sources.

Anyone can forget how to
[make character classes](https://www.pythoncheatsheet.org/cheatsheet/regular-expressions#making-your-own-character-classes)
for a regex, [slice a list](https://www.pythoncheatsheet.org/cheatsheet/lists-and-tuples#getting-sublists-with-slices) or do a [for loop](https://www.pythoncheatsheet.org/cheatsheet/control-flow#for-loop). This Python cheatsheet tries to provide basic reference for beginner and advanced developers, lower the entry barrier for newcomers and help veterans refresh the old tricks.

## Contribute

[All contributions are welcome!](/src/pages/contributing.md)

### Running the project locally

1.  Install [pnpm](https://pnpm.io/installation) package manager.

    Linux/macOS

        curl -fsSL https://get.pnpm.io/install.sh | sh -

    On Windows (PowerShell)

        iwr https://get.pnpm.io/install.ps1 -useb | iex

2.  Clone the project, change to the `next` branch and install the dependencies.

        git clone https://github.com/wilfredinni/python-cheatsheet.git
        cd python-cheatsheet
        git checkout next
        pnpm install

3.  Create a new branch from `next`.

        git branch fix_bug
        git checkout fix_bug

4.  Change/upgrade/add the changes you want.
5.  Update the `README` if needed.
6.  `Add`, `commit` and `push` your changes to Github.

        git add .
        git commit -m 'Add succinct explanation of what changed'
        git push origin fix_bug

7.  Open a [pull request](https://github.com/wilfredinni/python-cheatsheet/pulls).

## Code of Conduct

This project and everyone who participates in it is governed by the [Contributor Covenant Code of Conduct](https://github.com/wilfredinni/python-cheatsheet/blob/master/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to services@github.com.
