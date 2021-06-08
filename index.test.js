const assert = require('assert');
const Calc = require('./calc');

describe('Unit test', function () {

    it('Функція ATaylorCh існує', function(){
        assert.equal(typeof Calc.ATaylorCh, "function");
    });
    it('Has to be equal to 0.5231770833 if members are 3', function () {
        assert.equal(Calc.ATaylorCh(2, 4), 3.7619);
    })
});