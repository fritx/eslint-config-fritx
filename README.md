# eslint-config-fritx

> Highly inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)

[![][npm-badge]][npm-url]&nbsp;&nbsp;[![][standard-badge]][standard-url]

[![][standard-logo]](http://standardjs.com)

- ~~Extends [eslint-config-standard][eslint-standard-url]~~
- [Standard][standard-url] like, super light-weight
- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- [Prefer let][prefer-let-url] (const is allowed at the top-level)
- Node / Browser / Wxapp / TypeScript / ESM
- es2022 / es2018 / es5 / etc

[npm-badge]: https://img.shields.io/npm/v/eslint-config-fritx.svg
[npm-url]: https://npmjs.org/package/eslint-config-fritx
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com
[standard-logo]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[eslint-standard-url]: https://www.npmjs.com/package/eslint-config-standard
[prefer-let-url]: https://www.npmjs.com/package/eslint-plugin-prefer-let

## Usage

### Install

```sh
npm i -g @antfu/ni  # `ni` is recommended

ni -D eslint eslint-config-fritx
```

### Config .eslintrc.cjs

```js
module.exports = {
  extends: ['fritx/node'],
  // or es2017 for better compatibility
  extends: ['fritx/node', 'fritx/es2018'],

  // or for front-end projects
  extends: ['fritx/browser'],

  // or for some really old projects
  extends: ['fritx/browser', 'fritx/es5-loose'],

  // if you want to lint third-party libraries with es5
  overrides: [
    {
      files: 'vendor/**/*.js',
      extends: ['plugin:es/restrict-to-es5'],
    },
    // ...

  // typescript
  // execute `ni -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`
  extends: ['fritx/typescript'],
  // wechat miniprogram
  extends: ['fritx/wxapp'],
  // both
  extends: ['fritx/wxapp', 'fritx/typescript'],

  // if you want more standard rules on besides
  // execute `ni -D eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise`
  extends: ['fritx/standard-full'],
}
```

### Add scripts for package.json

```js
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

```js
// .vscode/settings.json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## If you are using ESM (ES Modules)

```js
// package.json
{
  "type": "module",
  // ...
}
```

```js
// .eslintrc.cjs
module.exports = {
  extends: ['fritx/node', 'fritx/es2022', 'fritx/esm'],
  // or
  extends: ['fritx/browser', 'fritx/es2022', 'fritx/esm'],
  // ...
}
```

```js
// .vscode/settings.json
{
  // Intellisense vs JavaScript Modules - lack of ".js" in completion #126171
  // https://github.com/microsoft/vscode/issues/126171
  "javascript.preferences.importModuleSpecifierEnding": "js",
  // ...
}
```

## Extended Reading

Learn more about the context - [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier).
