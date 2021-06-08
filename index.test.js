const assert = require('assert');
const Calc = require('./calc');

describe('Unit test', function () {

    it('Функція TaylorCh існує', function(){
        assert.equal(typeof Calc.TaylorCh, "function");
    });
    it('Has to be equal to 0.5231770833 if members are 3', function () {
        assert.equal(Calc.TaylorCh(2, 4), 3.7619);
    })
});