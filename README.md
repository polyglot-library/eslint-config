
## Installation

```
$ npm install --save-dev eslint @polyglot-library/eslint-config
```


## Usage

Once the `@polyglot-library/eslint-config` package is installed, you can use it by specifying `google` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@polyglot-library/eslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```
