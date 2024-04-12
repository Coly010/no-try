# [4.0.0](https://github.com/coly010/notry/compare/v3.2.0...v4.0.0) (2024-04-12)


### Features

* replace `null` with `undefined` ([#41](https://github.com/coly010/notry/issues/41)) ([9c71c95](https://github.com/coly010/notry/commit/9c71c959389dca23c02e9a7365b72c3b27c04cea))


### BREAKING CHANGES

* Return `undefined` instead of `null` for default value to allow reassignment when destructuring

# [3.2.0](https://github.com/coly010/notry/compare/v3.1.0...v3.2.0) (2024-04-12)


### Features

* add types for error response ([#39](https://github.com/coly010/notry/issues/39)) ([e2f8d51](https://github.com/coly010/notry/commit/e2f8d51c23484144b61d33e640460d2af94bc41c))

# [3.1.0](https://github.com/coly010/notry/compare/v3.0.0...v3.1.0) (2020-08-29)


### Features

* create alias for useTry ([#17](https://github.com/coly010/notry/issues/17)) ([#18](https://github.com/coly010/notry/issues/18)) ([1c3eb5e](https://github.com/coly010/notry/commit/1c3eb5eba9f966a601330baa74add28f0b255878))

# [3.0.0](https://github.com/coly010/notry/compare/v2.1.1...v3.0.0) (2020-08-28)


### Features

* remove tuple from type name ([#15](https://github.com/coly010/notry/issues/15)) ([b646aa7](https://github.com/coly010/notry/commit/b646aa77d4f62fcf464c45b18a5e3136256a08bd))


### BREAKING CHANGES

* Changed the type

## [2.1.1](https://github.com/coly010/notry/compare/v2.1.0...v2.1.1) (2020-08-28)


### Reverts

* Revert "feat: make use of export name without tuple qualifier (#13)" (#14) ([30ec981](https://github.com/coly010/notry/commit/30ec9811c0e6ef2d10b105bbfb8e0c28e1e4200a)), closes [#13](https://github.com/coly010/notry/issues/13) [#14](https://github.com/coly010/notry/issues/14)

# [2.1.0](https://github.com/coly010/notry/compare/v2.0.0...v2.1.0) (2020-08-28)


### Features

* make use of export name without tuple qualifier ([#13](https://github.com/coly010/notry/issues/13)) ([e26757c](https://github.com/coly010/notry/commit/e26757cb08063d6ffb6a23f5b1ed45e0b515b485))

# [2.0.0](https://github.com/coly010/notry/compare/v1.1.3...v2.0.0) (2020-08-27)


### Features

* Use only tuple to promote error handling ([#11](https://github.com/coly010/notry/issues/11)) ([9b69fb9](https://github.com/coly010/notry/commit/9b69fb9965f6d00afe80c8c849e4c75a95d9844b))


### BREAKING CHANGES

The Node.js `callback(err, res)` pattern makes sure that the error object is explicitly available and needs to be checked first before expecting the response object. Hence, ignoring the error object requires intentionally ignoring the first argument.

With the goal of making it simpler to adopt better error handling practices, the de-facto approach of this library is now `[err, res]` compared to the `[res, err]` and `{ error, result }` formats in previous versions.

- invert tuple ordering ([9b69fb9](https://github.com/coly010/notry/commit/9b69fb9965f6d00afe80c8c849e4c75a95d9844b))

## [1.1.3](https://github.com/coly010/notry/compare/v1.1.2...v1.1.3) (2020-01-27)

### Bug Fixes

- export tuple correctly ([d4fbd09](https://github.com/coly010/notry/commit/d4fbd09238b49b2c80c396bee8ec3e1b27ab43f8))
- export tuple correctly ([5377b9b](https://github.com/coly010/notry/commit/5377b9b721922892ff590712097bee92efae7a2b))

## [1.1.2](https://github.com/coly010/notry/compare/v1.1.1...v1.1.2) (2020-01-27)

### Bug Fixes

- tuple export path ([d4e9b4c](https://github.com/coly010/notry/commit/d4e9b4c26605243b5d9de14a5d4c25ce4b713905))
- tuple export path ([fce9468](https://github.com/coly010/notry/commit/fce9468d0be42c7027440c239d92f5d8a269414a))

## [1.1.1](https://github.com/coly010/notry/compare/v1.1.0...v1.1.1) (2020-01-27)

### Bug Fixes

- tuple folder path for build ([17fd35d](https://github.com/coly010/notry/commit/17fd35d79f12cbfee16c51b44c9fa2c018c6fe00))
- tuple folder path for build ([11bf028](https://github.com/coly010/notry/commit/11bf028e25dca779291266a7a05e4ec47c4c98e8))

# [1.1.0](https://github.com/coly010/notry/compare/v1.0.1...v1.1.0) (2020-01-27)

### Features

- add support for tuple return [#3](https://github.com/coly010/notry/issues/3) ([e86c65e](https://github.com/coly010/notry/commit/e86c65e8c7e18d053ea07666f22a72ac50ee6efa))
- add support for tuple return [#3](https://github.com/coly010/notry/issues/3) ([29052fa](https://github.com/coly010/notry/commit/29052fa7c6419d6d8fcefd9a5a41108336687b7b))

## [1.0.1](https://github.com/coly010/notry/compare/v1.0.0...v1.0.1) (2019-11-30)

### Bug Fixes

- ci build failing ([c84a082](https://github.com/coly010/notry/commit/c84a0825b8ce94fae3223f9bf86a6fb04c859e0b))

# 1.0.0 (2019-11-30)

### Bug Fixes

- build and publish script ([4a75d11](https://github.com/coly010/notry/commit/4a75d111273f5902d45c8b8d04a078d398fe6bc5))
- semantic release deps ([670e602](https://github.com/coly010/notry/commit/670e602aa8c5c6083a189d245bd46aba0f1a7fdd))

### Features

- add no try source ([5f8b3f6](https://github.com/coly010/notry/commit/5f8b3f6390e9dd852a5f097eadc340282098e4aa))
- **notry:** add source functions and tests ([3a3e560](https://github.com/coly010/notry/commit/3a3e560e3927df139a5dc5a81e7525c5ed61d1b8))
