# concat-object [![Build Status](https://travis-ci.org/kevva/concat-object.svg?branch=master)](https://travis-ci.org/kevva/concat-object)

> Concatenate object property values into arrays


## Install

```
$ npm install --save concat-object
```


## Usage

```js
const concatObject = require('concat-object');

concatObject({a: 'foo'}, {a: 'bar', b: 'unicorn'}, {b: ['foo']});
//=> {a: ['foo', 'bar'], b: ['unicorn', ['foo']]}
```


## API

### concatObject(object, [object, ...])

#### object

Type: `Object`

Assigns properties of `object` into arrays in a new object.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
