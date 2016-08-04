/* global describe, it */

'use strict'

var assert = require('assert')

var elementStyle = require('./')

describe('element style', function () {
  var userAgent = window.navigator.userAgent
  var ieDetected = (userAgent.indexOf('MSIE ') !== false || !!navigator.userAgent.match(/Trident.*rv\\:11\./))

  if (global.mocha && ieDetected) {
    global.mocha.globals(['getComputedStyle'])
  }

  it('setter', function () {
    assert.equal(elementStyle(document.body, 'width', '10000px'), '10000px')
  })

  it('getter', function () {
    assert.equal(elementStyle(document.body, 'width'), '10000px')
  })
})
