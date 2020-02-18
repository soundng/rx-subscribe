# rx-subscribe

AsyncPipe alternative for handling Observable data safely.

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

Angular's AsyncPipe (`{{ source$ | async }}`) has _Initial Null Problem_.
**Every AsyncPipe returns `null` as the initial value once** because `transform()` method must return a value synchronously.
As the result templates with AsyncPipe cannot be type-checked enough.

`*rxSubscribe` directive solves that all.

## Features

- ✅ null-less async data-binding
- ✅ Full-Typed Template (with `strictTemplates` flag)
- ✅ OnPush-Friendly

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

### NPM

`npm install @soundng/rx-subscribe --save`

## Usage

### Import RxSubscribeModule

```ts
import { RxSubscribeModule } from '@soundng/rx-subscribe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RxSubscribeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Use `*rxSubscribe` directive in templates

```html
<div *rxSubscribe="source$; let state">
  {{ state.count }}
</div>
```

`*rxSubscribe` directive will subscribe `source$` and render its template with the snapshot value named `state`. It won't render any view until the first value has been emitted.
And automatically it unsubscribes the `source$` on destroy.
That template can be regarded as the following code:

```ts
source$.subscribe(state => {
  console.log(state.count);
});
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
