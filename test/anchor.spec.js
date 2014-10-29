describe('ngAnchor', function () {
  describe('a', function () {
    var blanks = {
      '#test-empty': false,
      '#test-hash': false,
      '#test-local': false,
      '#test-external': true,
      '#test-dynamic': true
    }
    
    $.each(blanks, function (selector, blank) {
      it('should set correct target for anchor ' + selector, function () {
        var anchor = angular.element(selector)[0]
        var target = blank ? '_blank' : ''
        assert.equal(anchor.target, target)
      })
    })
  })
})
