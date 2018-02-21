# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.0-alpha.1"></a>
# [4.0.0-alpha.1](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2018-02-21)


### Bug Fixes

* Remove TypeScript definition ([#256](https://github.com/zemirco/json2csv/issues/256)) ([4f09694](https://github.com/zemirco/json2csv/commit/4f09694))



<a name="4.0.0-alpha.0"></a>
# [4.0.0-alpha.0](https://github.com/zemirco/json2csv/compare/v3.11.5...v4.0.0-alpha.0) (2018-02-21)


### Bug Fixes

* Add CLI tests ([#247](https://github.com/zemirco/json2csv/issues/247)) ([bb8126f](https://github.com/zemirco/json2csv/commit/bb8126f))
* Add excel string to cli and standardize ([#231](https://github.com/zemirco/json2csv/issues/231)) ([421baad](https://github.com/zemirco/json2csv/commit/421baad))
* Allow passing ldjson input files ([#220](https://github.com/zemirco/json2csv/issues/220)) ([9c861ed](https://github.com/zemirco/json2csv/commit/9c861ed))
* Avoid throwing an error on elements that can't be stringified (like functions) ([#223](https://github.com/zemirco/json2csv/issues/223)) ([679c687](https://github.com/zemirco/json2csv/commit/679c687))
* backslash logic ([#222](https://github.com/zemirco/json2csv/issues/222)) ([29e9445](https://github.com/zemirco/json2csv/commit/29e9445))
* broken stdin input ([#241](https://github.com/zemirco/json2csv/issues/241)) ([6cb407c](https://github.com/zemirco/json2csv/commit/6cb407c))
* Combine EOL and newLine parameters ([#219](https://github.com/zemirco/json2csv/issues/219)) ([4668a8b](https://github.com/zemirco/json2csv/commit/4668a8b))
* header flag ([#221](https://github.com/zemirco/json2csv/issues/221)) ([7f7338f](https://github.com/zemirco/json2csv/commit/7f7338f))
* outdated jsdoc ([#243](https://github.com/zemirco/json2csv/issues/243)) ([efe9888](https://github.com/zemirco/json2csv/commit/efe9888))
* pretty print issues ([#242](https://github.com/zemirco/json2csv/issues/242)) ([3bd9655](https://github.com/zemirco/json2csv/commit/3bd9655))
* Process header cells as any other cell ([#244](https://github.com/zemirco/json2csv/issues/244)) ([1fcde13](https://github.com/zemirco/json2csv/commit/1fcde13))
* Remove callback support ([2096ade](https://github.com/zemirco/json2csv/commit/2096ade))
* Remove fieldNames ([#232](https://github.com/zemirco/json2csv/issues/232)) ([6cc74b2](https://github.com/zemirco/json2csv/commit/6cc74b2))
* Remove path-is-absolute dependency ([#225](https://github.com/zemirco/json2csv/issues/225)) ([f71a3df](https://github.com/zemirco/json2csv/commit/f71a3df))
* Rename hasCSVColumnTitle to noHeader ([#216](https://github.com/zemirco/json2csv/issues/216)) ([f053c8b](https://github.com/zemirco/json2csv/commit/f053c8b))
* Rename ld-json to ndjson ([#240](https://github.com/zemirco/json2csv/issues/240)) ([24a7893](https://github.com/zemirco/json2csv/commit/24a7893))
* Rename unwindPath to unwind ([#230](https://github.com/zemirco/json2csv/issues/230)) ([7143bc7](https://github.com/zemirco/json2csv/commit/7143bc7))
* Streamify pretty print ([#248](https://github.com/zemirco/json2csv/issues/248)) ([fb7ad53](https://github.com/zemirco/json2csv/commit/fb7ad53))


### Chores

* Refactor the entire library to ES6 ([#233](https://github.com/zemirco/json2csv/issues/233)) ([dce4d33](https://github.com/zemirco/json2csv/commit/dce4d33))


### Features

* add doubleQuote to cli, rename other options to line up with the cli ([5e402dc](https://github.com/zemirco/json2csv/commit/5e402dc))
* Add fields config option to CLI ([#245](https://github.com/zemirco/json2csv/issues/245)) ([74ef666](https://github.com/zemirco/json2csv/commit/74ef666))
* Add streaming API ([#235](https://github.com/zemirco/json2csv/issues/235)) ([01ca93e](https://github.com/zemirco/json2csv/commit/01ca93e))
* Split tests in multiple files ([#246](https://github.com/zemirco/json2csv/issues/246)) ([839de77](https://github.com/zemirco/json2csv/commit/839de77))


### BREAKING CHANGES

* Replaces field-list with field-config
* Remove `preserveNewLinesInValues` option, preserve by default

* Refactor the entire library to ES6

* Fix PR issues

* Add strict mode for node 4.X
* Remove fieldNames

* Increase coverage back to 100%
* callback is no longer available, just return the csv from the json2csv.

- updated tests
- updated readme
* * Rename unwindPath to unwind

* Fix field-list in CLI
* newLine removed, eol kept.
* Rename del to delimiter to match the cli flag
* Rename quotes to quote to match the cli flag

* Remove unused double quotes comment

* Fix noHeader in CLI

* Revert "Remove unused double quotes comment"

This reverts commit 250d3e6ddf3062cbdc1e0174493a37fa21197d8e.

* Add doubleQuote to CLI
* Rename hasCSVColumnTitle to noHeader to keep in line with the CLI



<a name="3.11.5"></a>
## [3.11.5](https://github.com/zemirco/json2csv/compare/v3.11.4...v3.11.5) (2017-10-23)


### Bug Fixes

* backslash value not escaped properly ([#202](https://github.com/zemirco/json2csv/issues/202)) ([#204](https://github.com/zemirco/json2csv/issues/204)) ([2cf50f1](https://github.com/zemirco/json2csv/commit/2cf50f1))



<a name="3.11.4"></a>
## [3.11.4](https://github.com/zemirco/json2csv/compare/v3.11.3...v3.11.4) (2017-10-09)


### Bug Fixes

* **security:** Update debug to 3.1.0 for security reasons ([9c7cfaa](https://github.com/zemirco/json2csv/commit/9c7cfaa))



<a name="3.11.3"></a>
## [3.11.3](https://github.com/zemirco/json2csv/compare/v3.11.2...v3.11.3) (2017-10-09)



<a name="3.11.2"></a>
## [3.11.2](https://github.com/zemirco/json2csv/compare/v3.11.1...v3.11.2) (2017-09-13)


### Bug Fixes

* Remove extra space character in mode withBOM: true [#190](https://github.com/zemirco/json2csv/issues/190) ([#194](https://github.com/zemirco/json2csv/issues/194)) ([e8b6f6b](https://github.com/zemirco/json2csv/commit/e8b6f6b))



<a name="3.11.1"></a>
## [3.11.1](https://github.com/zemirco/json2csv/compare/v3.11.0...v3.11.1) (2017-08-11)


### Bug Fixes

* **cli:** pass BOM cli option to function ([#193](https://github.com/zemirco/json2csv/issues/193)) ([70cfdfe](https://github.com/zemirco/json2csv/commit/70cfdfe))



<a name="3.11.0"></a>
# [3.11.0](https://github.com/zemirco/json2csv/compare/v3.10.0...v3.11.0) (2017-08-02)


### Bug Fixes

* Handle dates without double-escaping ([#189](https://github.com/zemirco/json2csv/issues/189)) ([ff514ba](https://github.com/zemirco/json2csv/commit/ff514ba))
* unwind parameter in command line mode ([#191](https://github.com/zemirco/json2csv/issues/191)) ([e706c25](https://github.com/zemirco/json2csv/commit/e706c25))


### Features

* Added flag to signal if resulting function value should be stringified or not ([#192](https://github.com/zemirco/json2csv/issues/192)) ([aaa6b05](https://github.com/zemirco/json2csv/commit/aaa6b05))



<a name="3.10.0"></a>
# [3.10.0](https://github.com/zemirco/json2csv/compare/v3.9.1...v3.10.0) (2017-07-24)


### Features

* Add BOM character option ([#187](https://github.com/zemirco/json2csv/issues/187)) ([0c799ca](https://github.com/zemirco/json2csv/commit/0c799ca))



<a name="3.9.1"></a>
## [3.9.1](https://github.com/zemirco/json2csv/compare/v3.9.0...v3.9.1) (2017-07-14)



<a name="3.9.0"></a>
# [3.9.0](https://github.com/zemirco/json2csv/compare/v3.8.0...v3.9.0) (2017-07-11)


### Features

* Parameter unwindPath for multiple fields ([#174](https://github.com/zemirco/json2csv/issues/174)) ([#183](https://github.com/zemirco/json2csv/issues/183)) ([fbcaa10](https://github.com/zemirco/json2csv/commit/fbcaa10))



<a name="3.8.0"></a>
# [3.8.0](https://github.com/zemirco/json2csv/compare/v3.7.3...v3.8.0) (2017-07-03)


### Bug Fixes

* **docs:** Add a coma in the ReadMe example ([#181](https://github.com/zemirco/json2csv/issues/181)) ([abeb820](https://github.com/zemirco/json2csv/commit/abeb820))


### Features

* Preserve new lines in cells with option preserveNewLinesInCells ([#91](https://github.com/zemirco/json2csv/issues/91)) ([#171](https://github.com/zemirco/json2csv/issues/171)) ([187b701](https://github.com/zemirco/json2csv/commit/187b701))



<a name="3.7.3"></a>
## [3.7.3](https://github.com/zemirco/json2csv/compare/v3.7.1...v3.7.3) (2016-12-08)


### Bug Fixes

* **jsdoc:** JSDoc Editting ([#155](https://github.com/zemirco/json2csv/issues/155)) ([76075d6](https://github.com/zemirco/json2csv/commit/76075d6))
* **ts:** Fix type definition ([#154](https://github.com/zemirco/json2csv/issues/154)) ([fae53a1](https://github.com/zemirco/json2csv/commit/fae53a1))



## 3.6.3 / 2016-08-17

  * Fix crashing on EPIPE error [#134](https://github.com/zemirco/json2csv/pull/134)
  * Add UMD build for browser usage [#136](https://github.com/zemirco/json2csv/pull/136)
  * Add docs during prepublish

## 3.6.2 / 2016-07-22

  * Remove debugger, see [#132](https://github.com/zemirco/json2csv/pull/132)
  * Fix changelog typo

## 3.6.1 / 2016-07-12

  * Fix auto-fields returning all available fields, even if not available on the first object, see #104

## 3.6.0 / 2016-07-07

  * Make callback optional
  * Make callback use `process.nextTick`, so it's not sync

  Thanks @STRML!

## 3.5.1 / 2016-06-29

  * Revert [#114](https://github.com/zemirco/json2csv/pull/114), due to more issues
  * Update npmignore
  * Add a changelog
  * Updatee readme

## 3.5.0 / 2016-06-21

  * `includeEmptyRows` options added, see [#122](https://github.com/zemirco/json2csv/pull/122) (Thanks @glutentag)
  * `-a` or `--include-empty-rows` added for the CLI.

## 2.2.1 / 2013-11-10

  * mainly for development e.g. adding code format, update readme..

## 2.2.0 / 2013-11-08

  * not create CSV column title by passing hasCSVColumnTitle: false, into params.
  * if field is not exist in object then the field value in CSV will be empty.
  * fix data in object format - {...}

## 2.1.0 / 2013-06-11

  * quote titles in the first row

## 2.0.0 / 2013-03-04

  * err in callback function

## 1.3.1 / 2013-02-20

  * fix stdin encoding

## 1.3.0 / 2013-02-20

  * support reading from stdin [#9](https://github.com/zeMirco/json2csv/pull/9)

## 1.2.0 / 2013-02-20

  * support custom field names [#8](https://github.com/zeMirco/json2csv/pull/8)

## 1.1.0 / 2013-01-19

  * add optional custom delimiter