# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/soundng/rx-subscribe/compare/v1.0.0...v2.0.0) (2020-03-18)


### ⚠ BREAKING CHANGES

* previously rxSubscribe directive has not triggered change detection, so it doesn't work without zones. Now it triggers CD by itself.

### Bug Fixes

* **deps:** update dependency tslib to v1.11.1 ([#16](https://github.com/soundng/rx-subscribe/issues/16)) ([6aeccf7](https://github.com/soundng/rx-subscribe/commit/6aeccf71d2dd9de1d673511b428fe49386b14efa))
* call detectChanges() instead of markForCheck ([#29](https://github.com/soundng/rx-subscribe/issues/29)) ([bb900eb](https://github.com/soundng/rx-subscribe/commit/bb900ebd1b238a590889febde47ba6d25fd248f8))
* update package lock file ([9e432e3](https://github.com/soundng/rx-subscribe/commit/9e432e33b1f39f5a0449d65a331419f0c9fac2f6))

## 1.0.0 (2020-02-18)


### Features

* 🎸 implement RxSubscribeDirective ([72ab5aa](https://github.com/soundng/rx-subscribe/commit/72ab5aa6e2a906f9382b21fe5118a7c49435b948))
