const calculateNumber = require("./0-calcul.js");
const assert = require('assert');
describe('calculateNumber', function () {
    it('Should add 2 normal integers', function () {
      assert.equal(calculateNumber(1, 2), 3);
    });
    it('Should round 0.5 to 1', function () {
      assert.equal(calculateNumber(1.5, 2), 4);
    });
    it('Should round 1.6 to 2', function () {
      assert.equal(calculateNumber(1.6, 2), 4);
    });
    it('Should round 1.4 to 1', function () {
      assert.equal(calculateNumber(1.4, 2), 3);
    });
    it('Should add to rounded numbers', function () {
      assert.equal(calculateNumber(1.5, 1.5), 4);
    });
});
