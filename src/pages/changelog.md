---
title: 'Changelog - Python Cheatsheet'
description: See what is new, what got fixed, and what is coming.
date: July 19, 2022
updated: February 11, 2023
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Changelog
</base-title>

<!-- ## [Unreleased](https://github.com/wilfredinni/python-cheatsheet/tree/next) -->

## 2023-02-11

- Added a filter method example for the built-in functions section. [@firdousmurtaza1](https://github.com/firdousmurtaza1) ([#161](https://github.com/wilfredinni/python-cheatsheet/pull/161))

## 2023-02-05

- Make it clear that the python dictionary is ordered by insertion of key value pairs. Thanks [@wn9237](https://github.com/wn9237) ([#159](https://github.com/wilfredinni/python-cheatsheet/pull/159))
- Added Dictionary subscription. Thanks [@kakasahebKK](https://github.com/kakasahebKK) ([#158](https://github.com/wilfredinni/python-cheatsheet/pull/158))

## 2023-01-30

- Fixed some mistakes in Dictionaries. Thanks [@Acumane](https://github.com/Acumane) ([#155](https://github.com/wilfredinni/python-cheatsheet/pull/155))
- Added `map` built-in details and examples. Thanks [@noraa-july-stoke](https://github.com/noraa-july-stoke) ([#156](https://github.com/wilfredinni/python-cheatsheet/pull/156))

## 2023-01-16

- Added a <new-badge /> badge to highlight new or updated content.
- Added `bytearray` built-in details and examples.
- Added `bytes` built-in details and examples.
- Added `callable` built-in details and examples.
- Added `chr` built-in details and examples.

## 2023-01-12

- Fixed a typo on `setup.py` . Thanks [@qkniep](https://github.com/qkniep) ([#154](https://github.com/wilfredinni/python-cheatsheet/pull/154))

## 2022-12-01

- Added **List Comprehension** with `range` example. Thanks [@nugel](https://github.com/nugel) ([#152](https://github.com/wilfredinni/python-cheatsheet/pull/152))

## 2022-11-28

- Added `round` method example. Thanks [@thacer13](https://github.com/thacer13) ([#151](https://github.com/wilfredinni/python-cheatsheet/pull/151))
- Fixed `List` vs `Tuple` broken link. Thanks [@nugel](https://github.com/nugel) ([#150](https://github.com/wilfredinni/python-cheatsheet/pull/150))

## 2022-11-20

- Added `Dictionary` clarification on `keys`. Thanks [@Yaya9256](https://github.com/Yaya9256) ([#149](https://github.com/wilfredinni/python-cheatsheet/pull/149))
- Added `title` method on **Manipulating strings**. Thanks [@elp3dr0](https://github.com/elp3dr0) ([2556a0c](https://github.com/wilfredinni/python-cheatsheet/commit/2556a0c849b03353dcaeb4e0a16d77dc6ef978b7))
- Updated the `changelog` TOC to show only the last 13 updates ([c0f45c3](https://github.com/wilfredinni/python-cheatsheet/commit/ff71cf367bb8ce65ed722094325bad2bc2d56eb9))

## 2022-11-14

- Added <router-link to='/cheatsheet/string-formatting#formatted-string-literals-or-f-strings'>f-Strings</router-link> debugging and formatting options.
- Fixed several typos. Thanks [@SalvoTr](https://github.com/SalvoTr), [@jkornijchuk](https://github.com/jkornijchuk) and [@Gaurav-jo1](https://github.com/Gaurav-jo1)

## 2022-10-31

- Fixed formatting for `breakpoint` and `aiter` builtin functions ([#138](https://github.com/wilfredinni/python-cheatsheet/pull/138))
- Fixed a nasty bug related to Carbon that could eventually lead to quite the performance issues ([#139](https://github.com/wilfredinni/python-cheatsheet/pull/139))

## 2022-10-16

- Fixed typo errors.
- Fixed _Algolia docsearch_ weir behavior when clicking on a result ([#133](https://github.com/wilfredinni/python-cheatsheet/pull/133))
- Added a _share button_ to every `h1` tag that only shows on hover ([#134](https://github.com/wilfredinni/python-cheatsheet/pull/134))

## 2022-10-02

### Website

- Updated dependencies to the latest version
- Removed some workarounds for workbox that were not needed anymore

### Cheatsheet

- Added Python <router-link to='/modules/zipfile-module'>Zipfile Module</router-link> ([e7538ee](https://github.com/wilfredinni/python-cheatsheet/commit/e7538ee7e8d7ab9b5888ad39560ad940a25dde6d)).
- Added Python <router-link to='/modules/shelve-module'>Shelve Module</router-link> ([0afd2b3](https://github.com/wilfredinni/python-cheatsheet/commit/0afd2b3002764c13b7d016c1e39b6c124445340c)).

## 2022-09-12

- Added Python <router-link to='/cheatsheet/control-flow#switch-case-statement'>Switch-Case Statement</router-link> or **Structural Pattern Matching** ([6397b0f](https://github.com/wilfredinni/python-cheatsheet/commit/6397b0f1f9f5295dd53168eb2587a492ac4d4dfa)).

## 2022-09-03

### Website

- Added font size controls for _Reader mode_ and updated navbar layout ([1978f69](https://github.com/wilfredinni/python-cheatsheet/commit/1978f693662d28cbe94a7c95377ce32e28d74ac4))
- Added a Sponsor link to the navbar ([dd22f81](https://github.com/wilfredinni/python-cheatsheet/commit/dd22f81c509cfbcef4d5b4688fd4cfd9dfd5d1d7))
- Added transitions for mobile navigation ([4cdfca4](https://github.com/wilfredinni/python-cheatsheet/commit/4cdfca4ba0f21e4cb1021b917e49660eccdefa7e))
- Fixed an issue that prevented the sidebar to close on mobile navigation([48b58e0](https://github.com/wilfredinni/python-cheatsheet/commit/48b58e0beef8dfd15e5450087a125af4872422d0))

### Cheatsheet

- Simplify json load/dump usage ([#118](https://github.com/wilfredinni/python-cheatsheet/pull/118))

## 2022-08-21

### Website

- Launched Python Cheatsheet [newsletter](https://ggt.ink/PoVKNkO) 🎉
- Added a newsletter subscription form component.

### Cheatsheet

- Fixed many code examples, grammar and typo errors.
- Added examples for:
  - `split` method ([#107](https://github.com/wilfredinni/python-cheatsheet/pull/107))
  - Built-in `all` , `any`, `ascii` and `eval` ([#115](https://github.com/wilfredinni/python-cheatsheet/pull/115))

## 2022-08-05

### Website

- Fixed a bug that prevented the toc to be updated when scrolling ([1e5eb39](https://github.com/wilfredinni/python-cheatsheet/commit/1e5eb3938cbe9241ac8eb25834784de3ee91af6e))

### Cheatsheet

- Added a `Removing Items` section to `Dictionaries` ([971aef6](https://github.com/wilfredinni/python-cheatsheet/commit/971aef6e8afd503b6804951292137d94abaa841e))
- Fixed a `lists-and-tuples.md` example ([41519b3](https://github.com/wilfredinni/python-cheatsheet/commit/41519b3727593997011b167ef00dcba5e245aaaa))
- Changed several titles ([05603c0](https://github.com/wilfredinni/python-cheatsheet/commit/05603c07ed24c835fe08f1cd337fd1913dcc5c1e)) ([c595143](https://github.com/wilfredinni/python-cheatsheet/commit/c595143358c3ee474e1b10c5f64fa92d8eb72833))

## 2022-07-31

### Website

- Optimized TOC by enabling `markdown-it-anchor` anchor links ([#87](https://github.com/wilfredinni/python-cheatsheet/pull/87))
- Optimized Mobile PageSpeed score ([#88](https://github.com/wilfredinni/python-cheatsheet/pull/88/commits/80f86c88773b4694ebacc2c7ff75c8fe4f083778))
- Fixed DocSearch results by enabling `renderJavaScript`.
- Fixed DocSearch behavior.

### Cheatsheet

- Added `Formatting Digits` to `String formatting` ([#92](https://github.com/wilfredinni/python-cheatsheet/pull/92)) ([caac300](https://github.com/wilfredinni/python-cheatsheet/commit/caac300483cbd103e0f9666e647160b2e337d36e))
- Fixed `function.md` example ([#89](https://github.com/wilfredinni/python-cheatsheet/pull/89))
- Fixed `pop` method example ([#91](https://github.com/wilfredinni/python-cheatsheet/pull/91))

## 2022-07-28

- Enable **Algolia DocSearch** 🎉
- Update all internal navigation to use `router-link`.
- Fixed anchor link navigation.
- Fixed broken links.

## 2022-07-24

### Website

- Added a `contribute` placeholder for unfinished sections.
- Added useful community links to the footer.
- Added Pagination.

### Cheatsheet

- Changed titles to be more descriptive.
- Changed TOC titles to be more concise and descriptive.
- Added Python **Built-in** Functions.
- Added Python **standard library** modules:
  - datetime
  - itertools
  - json
  - os
  - pathlib
  - random

## 2022-07-19

- Added this changelog file.

## 2022-07-17

The release of the new **pythoncheatsheet.org** website:

- Complete re-design with **Vue 3** and **Tailwind CSS**.
- The site is now a **PWA** (Progressive web app) and can be installed in any platform that has a compatible web browser. It is also available offline.
- Added a **dark mode**.
- Added a **reader mode**.
- Added **Algolia search** (not available yet).
- Added contributors to the index page 🥰
- Added, fixed and removed code examples.
- Added an **Edit this page on GitHub** link to make it easier to contribute.
- Changed hosting to **Netlify** with an OSS plan 🎉
- Removed and joined cheatsheet sections.
- Fixed grammar and spelling mistakes.
