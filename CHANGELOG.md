# Changelog

<!-- ## [Unreleased](https://github.com/wilfredinni/python-cheatsheet/tree/next) -->

## 2022-08-05 [#96](https://github.com/wilfredinni/python-cheatsheet/pull/96)

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
- The site is now a **PWA** (Progressive web app) and can be installed in any platform that has a compatible web browser.It is also available offline.
- Added a **dark mode**.
- Added a **reader mode**.
- Added **Algolia search** (not available yet).
- Added contributors to the index page 🥰
- Added, fixed and removed code examples,
- Added an **Edit this page on github** link on every page to make easier to contribute.
- Changed hosting to **Netlify** with an OSS plan 🎉
- Removed and joined cheatsheet sections.
- Fixed grammar and spelling mistakes.
