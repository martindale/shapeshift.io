var assert = require('assert')
var shapeshift = require('../')

/* global describe, it */

describe('shapeshift', function () {
  describe('> when setting cors to false', function () {
    it('should set the shapeshift url to the cors endpoint', function (done) {
      var _url

      shapeshift.cors = false

      var oldGet = shapeshift.http.get
      shapeshift.http.get = function (url, callback) {
        _url = url
        // don't actually make http request
        callback(null, {})
      }

      shapeshift.coins(function (err, coinData) {
        assert.ifError(err)

        assert.equal(_url.indexOf('https://shapeshift'), 0)

        // restore
        shapeshift.http.get = oldGet
        shapeshift.cors = true

        done()
      })
    })
  })
})
