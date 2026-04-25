/* global chai */
var assert

var util = require('../../common/util')

describe('util', function () {
  before(function () {
    assert = chai.assert
  })

  it('parseQueryParams', function () {
    var params = util.parseQueryParams('?id=123&return_url=http://whatever.com')

    assert.deepStrictEqual(params, {
      id: '123',
      return_url: 'http://whatever.com'
    })
  })
})
