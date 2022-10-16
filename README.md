# eslint-config-fritx

Highly inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)

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
