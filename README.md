# eslint-config-fritx

> Highly inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)

[![][npm-badge]][npm-url]&nbsp;&nbsp;[![][standard-badge]][standard-url]

[![][standard-logo]](http://standardjs.com)

- Extends [eslint-config-standard][eslint-standard-url]
- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- [Prefer let][prefer-let-url] (const is allowed at the top-level)

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

### Config .eslintrc

```js
{
  "extends": "fritx"
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

## Extended Reading

Learn more about the context - [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier).
