'use strict'

var rsvp = require('rsvp')
var stdin = require('get-stdin')

module.exports = new rsvp.Promise(function(resolve, reject) {
	stdin(function (data) {
		resolve(data)
	})
})
