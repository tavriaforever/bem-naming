var naming = require('../../lib/bem-naming');

describe('original', function () {
    describe('isBlock', function () {
        it('should detect block', function () {
            naming.isBlock('block').should.be.true;
        });
    });
});
