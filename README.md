# eslint-config-cellular

[![Build Status](https://travis-ci.org/cellular/eslint-config-cellular.svg?branch=master)](https://travis-ci.org/cellular/eslint-config-cellular)
[![Greenkeeper badge](https://badges.greenkeeper.io/cellular/eslint-config-cellular.svg)](https://greenkeeper.io/)
[![version](https://img.shields.io/npm/v/eslint-config-cellular.svg)](http://npm.im/eslint-config-cellular)


ESLint config used at [CELLULAR](https://www.cellular.de).
## Usage

Install the conventions by running:

```
npm install --save-dev eslint eslint-config-cellular
```

Then add the extends to your `.eslintrc`:

```json
{
  "extends": "cellular"
}
```

## Rules

This config uses `eslint:recommended` and the default rules of the following plugins:

* [import](https://www.npmjs.com/package/eslint-plugin-import)
* [filenames](https://www.npmjs.com/package/eslint-plugin-filenames)
* [prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
* [react](https://www.npmjs.com/package/eslint-plugin-react) (if react or preact is a dependency)
* [flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype) (if flow-bin is a devDependency)


Disabled Rules:

* [no-debugger](https://eslint.org/docs/rules/no-debugger) (unless `NODE_ENV` is set to `production`)
* [no-console](https://eslint.org/docs/rules/no-console) use it responsibly!
* [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md) makes things more readable
* [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md) we (usually) only link to trusted sites
* [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) (if the project uses flowtype)

## Prettier

If the project does not contain any prettier configuration, the following settings are used:

```js
{
  singleQuote: true,
  trailingComma: 'es5'
}
```

# License

MIT