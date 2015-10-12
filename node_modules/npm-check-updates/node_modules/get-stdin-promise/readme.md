# get-stdin-promise
[![Build Status](https://travis-ci.org/metaraine/get-stdin-promise.svg?branch=master)](https://travis-ci.org/metaraine/get-stdin-promise)
[![NPM version](https://badge.fury.io/js/get-stdin-promise.svg)](http://badge.fury.io/js/get-stdin-promise)

> Promise version of [get-stdin](https://github.com/sindresorhus/get-stdin)


## Install

```sh
$ npm install --save get-stdin-promise
```


## Usage

```js
var stdin = require('get-stdin-promise')

stdin.then(function (text) {
	console.log(text + '!!!')
})

```


## License

ISC © [Raine Lourie](https://github.com/metaraine)
